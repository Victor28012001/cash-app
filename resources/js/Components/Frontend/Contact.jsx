import React from "react";
import Navbar from "../../layout/Frontend/Navbar";
import Footer from "../../layout/Frontend/Footer";


function Contact() {
    return (
        <div className="container">
            <Navbar />

            <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                    <h2>Contact page</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;