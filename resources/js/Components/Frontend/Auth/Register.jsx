import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Navbar from "../../../layout/Frontend/Navbar";
import Footer from "../../../layout/Frontend/Footer";

function Register(props) {

    const [firstname, setFName] = useState('');
    const [lastname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const { setErrors, renderFieldError, navigate } = useForm();

    const makeRequest = (e) => {
        e.preventDefault();

        setErrors(null);

        axios.post('/api/register', {
            firstname,
            lastname,
            email,
            password,
            password_confirmation: passwordConfirmation
        }).then(response => {

            console.log(response.data.user);

            if (response.data.user) {
                alert("Register success");

                navigate('/login');
            }
        }).catch(error => {
            console.log(error);

            if (error.response) {
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            }
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
                                        <form method="POST" action="#" onSubmit={makeRequest}>

                                            
                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="firstname"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    id="firstname"
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="First Name" name="firstname" required autoComplete="firstname" autoFocus value={firstname} onChange={e => setFName(e.target.value)}
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                                {renderFieldError('firstname')}
                                            </div>
                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="lastname"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    id="lastname"
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Last Name" name="lastname" required autoComplete="lastname" autoFocus value={lastname} onChange={e => setLName(e.target.value)}
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                                {renderFieldError('lastname')}
                                            </div>

                                            

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


                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="password-confirm"
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                    id="password-confirm"
                                                    type="password"
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Confirm Password" name="password_confirmation" required autoComplete="new-password" autoFocus value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                                {renderFieldError('password_confirmation')}
                                            </div>

                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Register
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

export default Register;