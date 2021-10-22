import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Download() {
    useEffect(() => {
        document.title = "pepAnno | Download"
    },[]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = keys => {
        console.log("selected download changed: ", keys);
        setSelectedRowKeys(keys);
    };
    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
    };
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
    return (
        <div style={{margin:"0 8%"}}>
            <h2 className="panel-tittle">Our datasets</h2>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
            <Button
                type="primary"
                icon={<DownloadOutlined />}
                disabled={selectedRowKeys.length === 0}
                style={{ margin: "10px 10px" }}
            >
                Download
            </Button>
        </div>
    );
};