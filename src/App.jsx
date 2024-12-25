import React from "react";
import { Layout } from "antd";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Content from "./components/Layout/Content";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default App;
