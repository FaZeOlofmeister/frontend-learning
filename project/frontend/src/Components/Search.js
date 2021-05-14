import { Result } from "antd";
import React, { useState } from "react";
import GetInput from "./GetInput";
import GetOutput from "./GetOutput";

export default function Search() {
    const [result, setResult] = useState([]);
    const [done, setDone] = useState(false);
    const [seq, setSeq] = useState("");
    const [method, setMethod] = useState(0);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    var childComponent = (done) ? (<GetOutput setDone={setDone} result={result} />) : 
        (<GetInput setDone={setDone} setResult={setResult} setSeq={setSeq} setMethod={setMethod} setSelectedRowKeys={setSelectedRowKeys} seq={seq} method={method} selectedRowKeys={selectedRowKeys} />);

    return (
        <div>
            {childComponent}
        </div>
    );
};