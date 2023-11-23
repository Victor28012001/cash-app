import React from 'react';
import Navbar from "../../layout/Frontend/Navbar";
import Footer from '../../layout/Frontend/Footer';

const PageNotFound = () => {
    return (
        <div className="container">
            <Navbar />
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
            <Footer />
        </div>
    );
}

export default PageNotFound;
