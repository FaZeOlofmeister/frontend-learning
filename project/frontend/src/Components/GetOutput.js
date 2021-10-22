import { Button, Table, Tag, Popover } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const switchColor = (idx) => {
    var color;
    switch (idx % 4) {
        case 0: color = "#f50"; break;
        case 1: color = "#2db7f5"; break;
        case 2: color = "#87d068"; break;
        case 3: color = "#108ee9"; break;
        default: color = ""; break;
    }
    return color;
};

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: 'Sequence',
        dataIndex: 'seq'
    },
    {
        title: 'FDR',
        dataIndex: 'fdr',
        responsive: ['lg'],
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.fdr - b.fdr,
    },
    {
        title: 'p-value',
        dataIndex: 'p_value',
        responsive: ['md'],
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.p_value - b.p_value,
    },
    {
        title: 'Expression rate',
        dataIndex: 'expression_rate',
        responsive: ['lg'],
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.expression_rate - b.expression_rate,
    },
    {
        title: 'Fold change (T/N)',
        dataIndex: 'fold_Change',
        responsive: ['md'],
        defaultSortOrder: 'descend',
        render: value => {
            var color="black";
            if(value>=1.1){
                color="red";
            }
            else if(value<0.9){
                color="green";
            }
            return (
                <p style={{color:color}}>{value}</p>
            );
        },
        sorter: (a, b) => a.fold_Change - b.fold_Change,
    },
    {
        title: 'Protein',
        key: 'tags',
        dataIndex: 'protein_id',
        render: tags => (
            <>
                {tags.split(';').map((tag, idx) => {
                    const url = "https://www.uniprot.org/uniprot/" + tag

                    return (
                        <Tag key={idx} target="blank">
                            <a href={url} target="_blank" rel="noopener noreferrer" >{tag}</a>
                        </Tag>
                    )
                })}
            </>
        ),
    },
    {
        title: 'Survival Analysis',
        key: 'survival',
        render: (text, record) => (
            <>
                <Popover content={<embed src={`http://139.224.252.240:9000/static/pdf/survival/${record.seq}.pdf`} type="application/pdf" width="500px" height="500px"></embed>} title="Survival Picture" trigger="click" placement="left">
                    <Button type="primary" shape="round">show</Button>
                </Popover>
            </>
        ),
        responsive: ['lg'],
    },
];

export default function GetOutput(props) {
    return (
        <div>
            <Button danger onClick={() => props.setDone(false)} icon={<LeftOutlined />}>Go back</Button>
            <Table
                columns={columns}
                dataSource={props.result}
                style={{ margin: '10px' }}
            />
        </div>
    );
};