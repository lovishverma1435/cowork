import React, { useState } from 'react'
import signupimage from "/public/images/sign.png"

const Signup = () => {

    const [agree, setAgree] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">

                {/* Left Form Side */}
                <div className="w-full md:w-1/2 flex flex-col gap-[30px] md:gap-3 pt-[54px] pb-[100px] pl-[60px]">
                    <div className="">
                        <img src="/public/svg/arrowleft.svg" alt="" />
                        <h2 className="text-2xl font-bold pt-[22px]">Create Account</h2>
                    </div>
                    <div className="flex gap-8  max-w-[648px] w-full justify-between">
                        <div className="flex flex-col gap-3.5 max-w-[306px] w-full">
                            <h1 className='font-inter font-medium text-xl leading-[130%]'>First Name</h1>
                            <input
                                type="text"
                                placeholder="Enter your First Name"
                                className=" outline-none rounded pl-3 py-[22px] bg-lite-gray font-inter font-medium text-sm leading-[130%]"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 max-w-[306px] w-full">
                            <h1 className='font-inter font-medium text-xl leading-[130%]'>Last Name</h1>
                            <input
                                type="text"
                                placeholder="Enter your Last Name"
                                className=" outline-none rounded pl-3 py-[22px] bg-lite-gray font-inter font-medium text-sm leading-[130%]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 ">
                        <h1 className='font-inter font-medium text-xl leading-[130%]'>E-mail</h1>
                        <input
                            type="email"
                            placeholder="Enter your E-mail"
                            className="w-full outline-none rounded px-4 py-2 bg-lite-gray font-inter font-medium text-sm leading-[130%]"
                        /></div>
                    <div className="flex flex-col gap-3.5 ">
                        <h1 className='font-inter font-medium text-xl leading-[130%]'>Password</h1>
                        <input
                            type="password"
                            placeholder="Create Password"
                            className="w-full outline-none rounded px-4 py-2 bg-lite-gray font-inter font-medium text-sm leading-[130%]"
                        /></div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                        />
                        <span>
                            I agree with{" "}
                            <a href="#" className="text-blue-600 underline">
                                terms
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-600 underline">
                                privacy Policy
                            </a>
                        </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded mb-5">
                        Create Account
                    </button>
                    <div className="text-center text-gray-400 ">Or</div>

                    <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded ">
                        <img
                            src="https://img.icons8.com/color/16/000000/google-logo.png"
                            alt="Google"
                            className="mr-2"
                        />
                        Sign up With Google
                    </button>

                    <p className="text-center text-sm">
                        Already have an Account?{" "}
                        <a href="#" className="text-blue-600 underline">
                            Log in
                        </a>
                    </p>
                </div>

                {/* Right Image Side */}
                <div className="hidden md:flex items-center justify-center  w-1/2">
                    <img
                        src={signupimage}
                        alt="Signup Illustration"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}


export default Signup
