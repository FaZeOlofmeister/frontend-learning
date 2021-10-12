import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    useEffect(() => {
        document.title = "pepAnno | Contact"
    },[]);
    return (
        <div style={{margin:"0 8%"}}>
            <h2 className="panel-tittle">Contact us</h2>
            <table className="table table-hover">
                <caption style={{ fontSize: "1.3em" }}>Please contact us for any questions, comments or suggestions.</caption>
                <tbody>
                    <tr>
                        <td className="title">Addr:</td>
                        <td>
                            Room 221, Building 4, School of Life Science and Biotechnology,Shanghai Jiao Tong University <br />
                                Dongchuan Road 800, Minhang District <br />
                                    Shanghai <br />
                                        P. R. China <br />
                                            200240 <br />
                        </td>
                    </tr>
                    <tr>
                        <td className="title">E-mail:</td>
                        <td>
                            Jiachen Ye: <a href="mailto:numbsoul@sjtu.edu.cn">numbsoul@sjtu.edu.cn</a> <br />
                                Jing Li: <a href="mailto:jing.li@sjtu.edu.cn">jing.li@sjtu.edu.cn</a> <br />
                                Jingya Jia: <a href="mailto:Jiajingya@sjtu.edu.cn">Jiajingya@sjtu.edu.cn</a> <br />
                        </td>
                    </tr>
                    <tr>
                        <td className="title">Tel:</td>
                        <td>(86)(21) 34204348-108</td>
                    </tr>
                    <tr>
                        <td className="title">Fax:</td>
                        <td>(86)(21)34204573</td>
                    </tr>
                    <tr>
                        <td className="title">Web:</td>
                        <td><a href="http://cbb.sjtu.edu.cn/~jingli/">Jing Li's Group | SJTU</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};