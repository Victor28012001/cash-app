import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import PageNotFound from '../pages/Pagenotfound'
import { useAuth } from "../hooks/useAuth";
import AuthContext from "../context/authContext";
import { HomePage } from '../pages/HomePage';
import routes from "@/routes";


function Admin() {

    const { userData } = useAuth();
    const [authData, setAuthData] = useState({ signedIn: userData.signedIn, user: userData.user });

    return (

        <AuthContext.Provider value={{ authData, setAuthData }}>

            <Layout>

                <Routes>
                    {routes.map(
                        ({ path, element }, key) =>
                            element && <Route key={key} exact path={path} element={element} />
                    )}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
 

            </Layout>
        </AuthContext.Provider>

    );

}



export default Admin;



if (document.getElementById('admin')) {

    ReactDOM.render(
        <BrowserRouter>
            <Admin />
        </BrowserRouter>
        , document.getElementById('admin'));

}