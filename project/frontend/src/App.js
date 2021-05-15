import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MessageOutlined, HomeOutlined, SearchOutlined } from "@ant-design/icons";
import "./App.css";
import Search from "./Components/Search"
import Index from "./Components/Index"
import Contact from "./Components/Contact"

const { Header, Content, Footer, Sider } = Layout;

export default function App() {
    const [route, setRoute] = useState("index");
    var mainContent;
    if (route === "index") {
        mainContent = <Index />
    } else if (route === "search") {
        mainContent = <Search />
    } else {
        mainContent = <Contact />
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
                    <a href='/' style={{ fontSize: '30px', color: "red" }} className="lg-hide">CPD</a>
                    <p style={{ color: "white" }} className="lg-hide"><i>The best cancer peptide database you have ever seen!</i></p>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['index']} style={{ fontSize: '18px', marginTop: '13px' }}>
                    <Menu.Item key="index" icon={<HomeOutlined />} onClick={() => setRoute("index")}>
                        Index
                    </Menu.Item>
                    <Menu.Item key="search" icon={<SearchOutlined />} onClick={() => setRoute("search")}>
                        Search
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<MessageOutlined />} onClick={() => setRoute("contact")}>
                        Contact Us
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout id="mainContent" style={{ minHeight: "100%" }}>
                <Header className="site-layout-sub-header-background lg-hide" style={{ padding: 30, height: 150 }} >
                    <h2 style={{ color: "red" }}>Welcome to use CPD！</h2>
                    <p><i>It might be the best <b>cancer peptide database</b> you have ever seen!</i></p>
                </Header>
                <Content style={{ margin: '24px 16px 0',minHeight:"80%" }}>
                    <div className="site-layout-background" style={{ padding: 20, minHeight: "100%" }}>
                        {mainContent}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" ,height:"7.8%"}}>
                    <p style={{ fontSize: '16px' }}>Copyright &#169; <a href="http://cbb.sjtu.edu.cn/~jingli/">Jing Li's group</a>, SJTU. All rights reserved.</p>
                </Footer>
            </Layout>
        </Layout>
    );
};
