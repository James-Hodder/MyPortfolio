"use client";

import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            window.location.href = "/blog/new";
        } else {
            setError("Invalid credentials");
        }
    }

    return (
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}