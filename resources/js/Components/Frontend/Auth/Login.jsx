import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../layout/Frontend/Navbar";
import Footer from "../../../layout/Frontend/Footer";

import { useForm } from "../../../hooks/useForm";
import { useAuth } from "../../../hooks/useAuth";
// import AuthContext from "../../../context/authContext";

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const { setAsLogged } = useAuth();

    // const { authData } = useContext(AuthContext);

    // useEffect(() => {
    //     if (!authData.signedIn) {
    //         navigate('/');
    //     }
    // }, []);

    const { setErrors, renderFieldError, message, setMessage, navigate } = useForm();

    const makeRequest = (e) => {
        e.preventDefault();

        setErrors(null);

        setMessage('');

        // make request first to sanctum/csrf-cookie
        axios.get('/sanctum/csrf-cookie').then(() => {

            const payload = {
                email,
                password
            };

            if (remember) {
                payload.remember = true;
            }

            axios.post('/api/login', payload, {
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {

                if (response.data.user) {

                    alert("Login success");

                    setAsLogged(response.data.user);
                    navigate('/user');
                }
            }).catch(error => {
                console.log(error);

                if (error.response) {
                    if (error.response.data.message) {
                        setMessage(error.response.data.message);
                    }

                    if (error.response.data.errors) {
                        setErrors(error.response.data.errors);
                    }
                }
            });
        });
    };

    return (
        <>
            <Navbar />
            <section className="relative block py-24 lg:pt-0 bg-gray-900 mt-[260px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">Register</h4>

                                    <div className="card-body">
                                        {
                                            message && <div className="alert alert-danger">{message}</div>
                                        }
                                        <form method="POST" action="#" onSubmit={makeRequest}>

                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    E-Mail Address
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="email" name="email" required autoComplete="email" autoFocus value={email} onChange={e => setEmail(e.target.value)}
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                                {renderFieldError('email')}
                                            </div>


                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="password" name="password" required autoComplete="password" autoFocus value={password} onChange={e => setPassword(e.target.value)}
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                                {renderFieldError('password')}
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md-6 offset-md-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="remember"
                                                            id="remember" onChange={e => { setRemember(e.target.checked ? 1 : 0) }} />

                                                        <label className="form-check-label" htmlFor="remember">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
};


export default Login;