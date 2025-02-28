"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Register: React.FC = () => {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [isOtpVerified, setIsOtpVerified] = useState<boolean>(false);

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await axios.post('https://chat-game-ten.vercel.app/api/auth/send-otp', { email });
      setOtpSent(true);
    } catch (err: unknown) {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await axios.post('https://chat-game-ten.vercel.app/api/auth/verify-otp', { email, otp });
      setIsOtpVerified(true);
    } catch (err: unknown) {
      setError('Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://chat-game-ten.vercel.app/api/auth/register', { name, email, password });
      router.push('/auth/login');
    } catch (err: unknown) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div className="w-full max-w-md bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg z-10">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Register</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {!otpSent && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <input type="email" className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-200" disabled={loading}>{loading ? 'Sending OTP...' : 'Send OTP'}</button>
            </form>
          )}

          {otpSent && !isOtpVerified && (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <input type="text" className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-200" disabled={loading}>{loading ? 'Verifying OTP...' : 'Verify OTP'}</button>
            </form>
          )}

          {isOtpVerified && (
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <input type="text" className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <input type="password" className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div>
                <input type="password" className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-200" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
            </form>
          )}

          <p className="text-sm text-center mt-4 text-gray-400">
            Already have an account? <Link href="/auth/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;