import React, { useState } from "react";
import { Input, Button, Table, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./GetInput.css"

const dataSource = [
    {
        key: "1",
        CancerType: "Gastric Cancer",
        Publications: "PMID:30645970",
        Quantitation: "iTRAQ4",
        PatientNum: 80,
    },
    {
        key: "2",
        CancerType: "Lung Adenocarcinoma",
        Publications: "PMID:30645970",
        Quantitation: "TMT10",
        PatientNum: 111,
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
    },
    {
        title: "Quantitation",
        dataIndex: "Quantitation",
    },
    {
        title: "PatientNum",
        dataIndex: "PatientNum",
    }
];

const { TextArea } = Input;
const Tips = "For example:\n>SeqName SeqDescription\nAAAAAAAAAAAAAAAGAGAGAK";

export default function GetInput(props) {
    const [localSeq, setLocalSeq] = useState(props.seq);
    const [localMethod, setLocalMethod] = useState(props.method);
    const [localSelectedRowKeys, setLocalSelectedRowKeys] = useState(props.selectedRowKeys);
    const [format, setFormat] = useState(false);
    const [loading, setLoading] = useState(false);
    const submit = async () => {
        var seq = localSeq;
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
    }

    const getSeq = (e) => {
        var seq = e.target.value.toString().toUpperCase();
        var flag;
        if (seq[0] === ">") {
            flag = true
        } else {
            flag = false
        }
        setLocalSeq(seq);
        setFormat(flag);
    }

    const searchMethod = (e) => {
        console.log("search method changed, ", e.target.value)
        setLocalMethod(e.target.value);
    }

    const onSelectChange = selectedRowKeys => {
        console.log("selectedDataBases changed: ", selectedRowKeys);
        setLocalSelectedRowKeys(selectedRowKeys);
    }

    const clear = () => {
        setLoading(true);
        setTimeout(() => {
            setLocalSeq("");
            setLocalMethod(0);
            setLocalSelectedRowKeys([]);
            setFormat(false);
            setLoading(false);
        }, 500);
    }

    const rowSelection = {
        selectedRowKeys: localSelectedRowKeys,
        onChange: onSelectChange
    };
    const hasInput = localSeq.length > 0 || localMethod == 1 || localSelectedRowKeys.length > 0;
    const radioStyle = {
        display: "block",
        height: "32px",
        lineHeight: "32px",
        fontSize: "16px",
    }

    return (
        <div style={{ padding: "0 25px" }}>
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
                    <input type="file" style={{ width: "25%", paddingRight: 0 }} />
                </Input.Group>
            </div>
            <div id="Method" className="stack">
                <div className="Tips">Matching method</div>
                <Radio.Group onChange={searchMethod} value={localMethod}>
                    <Radio style={radioStyle} value={1}>
                        Blast: Fuzzy matching between sequence and database
                        </Radio>
                    <Radio style={radioStyle} value={0}>
                        Precise: Exact matching between sequence and database character
                        </Radio>
                </Radio.Group>
            </div>
            <div style={{ margin: "10px" }} className="stack">
                <div className="Tips">Reference database</div>
                <span style={{ marginLeft: 8, fontSize: "16px" }}>
                    {`Selected ${localSelectedRowKeys.length} dataBases`}
                </span>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                />
                <Button onClick={clear} disabled={!hasInput} loading={loading}>
                    Reload
                </Button>
            </div>

            <div id="SearchButton" className="stack" style={{ position: "fixed", right: "8%", bottom: "15%" }}>
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    shape="round"
                    size="large"
                    disabled={!format}
                    onClick={submit}
                >
                    {format ? "search" : "invalid format"}
                </Button>
            </div>
        </div>
    );
};