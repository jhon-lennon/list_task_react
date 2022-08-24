import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Nav from './Nav';
import FormCreate from './FormCreate';
import FormLogin from './FormLogin';

function RoutLoginCreate() {

    return (
        <>
            <Nav></Nav>
            <Routes>
                 <Route path="*" element={<FormLogin></FormLogin>} />
                <Route path="login" element={<FormLogin></FormLogin>} />
                <Route path="cadastro" element={<FormCreate></FormCreate>} />
            </Routes>
        </>

    )
}
export default RoutLoginCreate;