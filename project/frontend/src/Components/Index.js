import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CardDeck, Card } from 'react-bootstrap';

export default function Index() {
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        document.title = "CPD | Index";
        const fetchData = async () => {
            var result = await fetch("http://139.224.252.240:9000/getImg/")
                .then(res => res.text())
                .then(res => { return res; })
                .catch(err => console.log(err));

            if (typeof (result) == "undefined") {
                result = []
            } else {
                result = result.split("\n");
                result.pop();
            }
            setImgList(result);
        };
        fetchData();
    }, []);

    const baseUrl = "http://139.224.252.240:9000/static/images/carousel/";
    const settings = {
        indicators: true,
        controls: true,
        wrap: true,
        autoPlay: true,
        interval: 4000,
        pause: "hover",
        defaultActiveIndex: 0,
        style: { width: "70%", marginLeft: "15%" }
    };
    let imgItems = imgList.map((item, idx) => {
        return (
            <Carousel.Item>
                <img src={baseUrl + item} alt={idx} style={{ display: "block", width: "1100px", height: "500px" }} />
                <Carousel.Caption>
                    <h3>{idx+1} slide</h3>
                    <p style={{color:"red"}}>Know about what we are doing</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (
        <div id="index">
            <div id="introduction" style={{ margin:"50px 5% 0 5%" }}>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="http://139.224.252.240:9000/static/images/introduction/intro1.png" />
                        <Card.Body>
                            <Card.Title>What is CPD？</Card.Title>
                            <Card.Text>
                                This database contains common protein peptides in human gastric cancer, lung cancer and other tumor tissues. Reference to the <a href="https://www.sciencedirect.com/science/article/pii/S1535610818305749">raw data of large-scale gastric cancer protein mass spectrometry published by Dong-Gi Mun, Jinhyuk Bhin and others</a>.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="http://139.224.252.240:9000/static/images/introduction/how.jpg" />
                        <Card.Body>
                            <Card.Title>How to use CPD?</Card.Title>
                            <Card.Text>
                                You can click the "Serach" button on the left to query related peptide information, or you can contact us for more information
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="http://139.224.252.240:9000/static/images/introduction/intro2.png" />
                        <Card.Body>
                            <Card.Title>Who we are?</Card.Title>
                            <Card.Text>
                                We are an experimental group from Professor Li Jing from the Department of Bioinformatics, School of Life Science and Technology, <a href="https://www.sjtu.edu.cn/"><b>Shanghai Jiao Tong University</b></a>.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div style={{ margin: "20px 0" }}>
                <p>What we are doing now:</p>
                <Carousel {...settings}>
                    {imgItems}
                </Carousel>
            </div>
        </div>
    );
};