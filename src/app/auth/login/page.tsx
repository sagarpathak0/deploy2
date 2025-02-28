"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://chat-game-ten.vercel.app/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      router.push("/dashboard");
    } catch (err: unknown) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-2xl backdrop-blur-md border border-gray-800 z-10">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-200"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-400">
            Do not have an account?{" "}
            <Link href="/auth/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
