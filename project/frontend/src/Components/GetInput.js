import React, { useState } from "react";
import { Input, Button, Table, Radio, Upload } from "antd";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import "./GetInput.css"

const dataSource = [
    {
        key: "1",
        CancerType: "Gastric Cancer",
        Publications: "30645970",
        Quantitation: "iTRAQ4",
        PatientNum: 80,
    },
    {
        key: "2",
        CancerType: "Lung Adenocarcinoma",
        Publications: "30645970",
        Quantitation: "TMT10",
        PatientNum: 111,
    },
    {
        key: "3",
        CancerType: "Hepatocellular carcinoma(HCC)",
        Publications: "30645970",
        Quantitation: "TMT11",
        PatientNum: 165,
    },
];

const columns = [
    {
        title: "CancerType",
        dataIndex: "CancerType",
    },
    {
        title: "Publications",
        dataIndex: "Publications",
        responsive: ['md'],
        render: (text, record) => (
            <p>PMID:<a href={`https://pubmed.ncbi.nlm.nih.gov/${record.Publications}`} target="_blank" rel="noopener noreferrer" >{record.Publications}</a></p>
        ),
    },
    {
        title: "Quantitation",
        dataIndex: "Quantitation",
        responsive: ['lg'],
    },
    {
        title: "PatientNum",
        dataIndex: "PatientNum",
        responsive: ['lg'],
    }
];

const { TextArea } = Input;
const Tips = "For example:\n>SeqName SeqDescription\nAAAAAAAAAAAAAAAGAGAGAK";

export default function GetInput(props) {
    const [localSeq, setLocalSeq] = useState(props.seq);
    const [localMethod, setLocalMethod] = useState(props.method);
    const [localSelectedRowKeys, setLocalSelectedRowKeys] = useState(props.selectedRowKeys);
    const [format, setFormat] = useState(props.seq.length>0);
    const [loading, setLoading] = useState(false);
    const submit = async () => {
        var seq = localSeq.toUpperCase();
        const str_li = seq.split("\n");
        str_li.shift();
        seq = str_li.join("");
        console.log("Sent seq:", seq, "method:", localMethod, "to server")
        var result = await fetch("http://139.224.252.240:9000/search", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                seq: seq,
                method: localMethod
            })
        }).then(res => res.json()).catch(err => err);

        console.log("get response from server:", result);
        props.setResult(result);
        props.setSeq(localSeq);
        props.setMethod(localMethod);
        props.setSelectedRowKeys(localSelectedRowKeys);
        props.setDone(true);
    };

    const getSeq = (e) => {
        var seq = e.target.value.toString();
        var flag;
        if (seq[0] === ">") {
            flag = true
        } else {
            flag = false
        }
        setLocalSeq(seq);
        console.log(localSeq)
        setFormat(flag);
    };

    const searchMethod = (e) => {
        console.log("search method changed, ", e.target.value)
        setLocalMethod(e.target.value);
    };

    const onSelectChange = selectedRowKeys => {
        console.log("selected databases changed: ", selectedRowKeys);
        setLocalSelectedRowKeys(selectedRowKeys);
    };

    const clear = () => {
        setLoading(true);
        setTimeout(() => {
            setLocalSeq("");
            setLocalMethod(0);
            setLocalSelectedRowKeys([]);
            setFormat(false);
            setLoading(false);
        }, 500);
    };

    const getUpload = (file) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (result) => {
            setLocalSeq(result.target.result)
        }
        setFormat(true);
        return false;
    }

    const rowSelection = {
        selectedRowKeys: localSelectedRowKeys,
        onChange: onSelectChange
    };
    const hasInput = localSeq.length > 0 || localMethod === 1 || localSelectedRowKeys.length > 0;
    const radioStyle = {
        display: "block",
        height: "32px",
        lineHeight: "32px",
        fontSize: "16px",
    }

    return (
        <div style={{ padding: "0 3%" }}>
            <div id="SearchBox" className="stack">
                <div className="Tips">Sequence input</div>
                <Input.Group style={{ width: "100%" }}>
                    <TextArea
                        id="InputSpace"
                        placeholder={Tips}
                        autoSize={{ minRows: 2 }}
                        onChange={getSeq}
                        value={localSeq}
                    />
                    <Upload action="" accept="text/plain" beforeUpload={getUpload} showUploadList={false}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>,
                </Input.Group>
            </div>
            <div id="Method" className="stack">
                <div className="Tips">Matching method</div>
                <Radio.Group onChange={searchMethod} value={localMethod}>
                    <Radio style={radioStyle} value={0}>
                        Precise<i className="lg-hide">: Exact matching between sequence and database character</i>
                    </Radio>
                    <Radio style={radioStyle} value={1}>
                        Fuzzy<i className="lg-hide">: Fuzzy matching between sequence and database</i>
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        BLAST<i className="lg-hide">: BLAST alignment between sequence and database</i>
                    </Radio>
                </Radio.Group>
            </div>
            <div style={{ margin: "10px" }} className="stack">
                <div className="Tips lg-hide">Reference database</div>
                <span style={{ marginLeft: 8, fontSize: "16px" }} className="lg-hide">
                    {`Selected ${localSelectedRowKeys.length} dataBases`}
                </span>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                />
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    disabled={!format || localSelectedRowKeys.length === 0}
                    onClick={submit}
                    style={{ margin: "10px 10px" }}
                >
                    {(format && localSelectedRowKeys.length > 0) ? "Search" : "Invalid format"}
                </Button>
                <Button danger onClick={clear} disabled={!hasInput} loading={loading}>
                    <b>Reload</b>
                </Button>
            </div>
        </div>
    );
};