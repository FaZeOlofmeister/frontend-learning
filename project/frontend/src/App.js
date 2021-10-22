import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MessageOutlined, HomeOutlined, SearchOutlined, DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import "./App.css";
import Search from "./Components/Search";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Download from "./Components/Download";

const { Header, Content, Footer, Sider } = Layout;

export default function App() {
    const [route, setRoute] = useState("home");
    var mainContent;
    if (route === "home") {
        mainContent = <Home />;
    } else if (route === "search") {
        mainContent = <Search />;
    } else if (route === "download") {
        mainContent = <Download />;
    } else {
        mainContent = <Contact />;
    }
    return (
        <Layout style={{ minHeight: "100%" }}>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                }}
                breakpoint="lg"
                collapsedWidth="40"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{ margin: 10, padding: 10 }}>
                    <a href='/' style={{ fontSize: '30px', color: "red" }} className="lg-hide">pepAnno</a>
                    <p style={{ color: "white" }} className="lg-hide"><i>An integrated peptide-centric database with large-scale proteome annotation</i></p>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']} defaultOpenKeys={['links']} style={{ fontSize: '18px', marginTop: '13px' }}>
                    <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => setRoute("home")}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="search" icon={<SearchOutlined />} onClick={() => setRoute("search")}>
                        Search
                    </Menu.Item>
                    <Menu.Item key="download" icon={<DownloadOutlined />} onClick={() => setRoute("download")}>
                        Download
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<MessageOutlined />} onClick={() => setRoute("contact")}>
                        Contact Us
                    </Menu.Item>
                    <Menu.SubMenu key="links" icon={<LinkOutlined />} title="Links" >
                        <Menu.Item><a href="https://www.uniprot.org/" target='_blank'>UniProt</a></Menu.Item>
                        <Menu.Item><a href="https://proteomics.cancer.gov/programs/cptac" target='_blank'>CPTAC</a></Menu.Item>
                    </Menu.SubMenu>
                </Menu>
                
                <div style={{position:'absolute', bottom:20, paddingLeft:10, color:"grey"}}>
                    <b style={{fontSize:18}}>Statistics</b>
                    <div>Website clicks:</div>
                    <div>Query times:</div>
                </div>
            </Sider>
            <Layout id="mainContent" style={{ minHeight: "100%" }}>
                <Header className="site-layout-sub-header-background lg-hide" style={{ paddingLeft: 35, paddingTop:20, height: 130 }} >
                    <h3 style={{ color: "red" }}>Welcome to use pepAnno！</h3>
                    <p><i>This is an integrated peptide-centric database with large-scale proteome annotation </i></p>
                </Header>
                <Content style={{ margin: '24px 16px 0', minHeight: "80%" }}>
                    <div className="site-layout-background" style={{ padding: 20, minHeight: "100%" }}>
                        {mainContent}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center", height: "7.8%" }}>
                    <p style={{ fontSize: '16px' }}>Copyright &#169; <a href="http://cbb.sjtu.edu.cn/~jingli/">Jing Li's group</a>, SJTU. All rights reserved.</p>
                </Footer>
            </Layout>
        </Layout>
    );
};
