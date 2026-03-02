"use client"
import Image from 'next/image';
import { useLoginHook } from './signinHook';
import { use, useState } from 'react';

export default function SiginPage(props: {
  searchParams?: {
    callbackUrl?: string;
    verify?: string;
    email?: string;
  };
}) {

  const callbackUrl = props.searchParams?.callbackUrl;

  const {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    handleLogin,
  } = useLoginHook();

  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(callbackUrl);
    console.log("loginnn.....")
  };

  return (
     <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
            <Image src="/images/linguahub.png" alt="lingua-hub logo" width={56} height={56} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Welcome to LinguaHub
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Please sign in to continue
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={email}
              placeholder="Enter your username"
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
                👁
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg cursor-pointer text-white font-medium bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition">
            Sign in
          </button>
        </form>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500">
        For admin and instructor access only
      </p>
    </div>
   
  );
}
