import React, { useState } from 'react';
import signupimage from "/public/images/sign.png";
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: ''
  });
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) return setMessage('Please agree to the terms.');

    try {
      const res = await axios.post('http://localhost:3000/api/signup', formData);
      setMessage(res.data.message || 'Signup successful!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed.');
    }finally{
      alert(message)

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[1360px] flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Form Side */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-[30px] md:gap-3 pt-[54px] pb-[100px] pl-[60px]">
          <div>
            <Link to="/"><img className="cursor-pointer" src="/public/svg/arrowleft.svg" alt="" /></Link>
            <h2 className="text-2xl font-bold pt-[22px]">Create Account</h2>
          </div>

          {/* Name Fields */}
          <div className="flex gap-8 max-w-[648px] w-full justify-between">
            {['firstName', 'lastName'].map((field, i) => (
              <div key={field} className="flex flex-col gap-3.5 max-w-[306px] w-full">
                <h1 className='font-inter font-medium text-xl'>{field === 'firstName' ? 'First Name' : 'Last Name'}</h1>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field === 'firstName' ? 'First' : 'Last'} Name`}
                  className="outline-none rounded pl-3 py-[22px] bg-lite-gray font-inter font-normal text-sm"
                  required
                />
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3.5">
            <h1 className='font-inter font-medium text-xl'>E-mail</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full outline-none rounded pl-3 py-[22px] bg-lite-gray font-inter font-normal text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-3.5">
            <h1 className='font-inter font-medium text-xl'>Password</h1>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full outline-none rounded pl-3 py-[22px] bg-lite-gray font-inter font-normal text-sm"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
            <span className='py-5'>
              I agree with
              <a href="#" className="text-light-blue underline"> terms </a>
              and
              <a href="#" className="text-light-blue-blue underline"> privacy Policy</a>
            </span>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-5 rounded mb-5 font-inter text-xl">
            Create Account
          </button>
          

          {/* Google */}
          <div className="text-center text-gray-400">Or</div>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded">
            <a className='flex' href="https://accounts.google.com/signup" target='_blank'>
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="mr-2 h-6 w-6" />
              Sign up With Google
            </a>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm">
            Already have an Account?{" "}
            <Link to="/login" className="text-light-blue underline">Log in</Link>
          </p>
        </form>

        {/* Right Side Image */}
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={signupimage} alt="Signup Illustration" className="max-w-[704px] w-full max-h-[1024px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
