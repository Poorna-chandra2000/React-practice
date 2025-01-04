import React, { useState } from 'react';
import { useLoginMutation } from '../features/auth/authApi';
import {useDispatch, useSelector} from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useLoginMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({ email, password })
            dispatch(setCredentials({
                user: { id: data.data.id },
                accessToken: data.data.accessToken,
                refreshToken: data.data.refreshToken,
            }));
        } catch (err) {
            console.error('Login failed:', err);
        }
    };
const token=useSelector((state) => state.auth.accessToken);
    console.log(token)
    return (
        <div className="flex items-center justify-center h-screen">
            <form
                className="bg-white p-6 rounded shadow-md w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
