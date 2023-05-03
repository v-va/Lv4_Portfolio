import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Layout from "../components/common/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route>
                        <Route path="/" element={<Main />} />
                        <Route path="detail/:id" element={<Detail />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
