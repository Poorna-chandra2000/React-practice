import React, { useState } from 'react';

const Multistate2 = () => {
    const [formdata, setform] = useState({
        Name: "",
        Email: "",
        Password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setform((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const recieveData = (e) => {
        e.preventDefault();
        const { Name, Email, Password } = formdata;
        console.log(Name);
        console.log(Email);
        console.log(Password);
    };

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1>Form (one state handling many fields)</h1>
            <form onSubmit={recieveData} className="flex flex-col gap-5">
                <input 
                    className="text-white border-spacing-3 rounded-3xl text-center border-[0.3em] border-violet-700 bg-slate-200 p-1"
                    type="text"
                    name="Name"
                    value={formdata.Name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />

                <input 
                    className="text-white border-spacing-3 border-[0.3em] rounded-3xl text-center border-violet-700 bg-slate-200 p-1"
                    type="email"
                    name="Email"
                    value={formdata.Email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                />

                <input 
                    className="text-white border-spacing-3 border-[0.3em] rounded-3xl text-center border-violet-700 bg-slate-200 p-1"
                    type="password"
                    name="Password"
                    value={formdata.Password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                />

                <button className="bg-black p-1 text-white rounded-3xl" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Multistate2;
