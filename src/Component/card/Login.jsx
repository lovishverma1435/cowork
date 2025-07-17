import { useState } from 'react'
import signupimage from "/public/images/sign.png"
import { Eye, EyeOff } from "lucide-react";
import Ifacebook from "/svg/facebook2.svg"
import Iapple from "/svg/apple.svg"
import Igoogle from "/svg/google.svg"
import Itwitter from "/svg/twitter2.svg"
import { Link } from 'react-router-dom';
const Login = () => {

    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2 flex flex-col gap-[30px] md:gap-3 pt-[54px] pb-[100px] pl-[60px]">
                    <div className="">
                        <Link to={"/signup"}>
                        <img src="/public/svg/arrowleft.svg" alt="" />
                        </Link>
                        <h2 className="text-2xl font-bold pt-[22px]">Log in</h2>
                    </div>

                    <div className="flex flex-col gap-3.5 ">
                        <h1 className='font-inter font-medium text-xl leading-[130%]'>E-mail</h1>
                        <input
                            type="email"
                            placeholder="Enter your E-mail"
                            className="w-full outline-none rounded px-4 py-2 bg-lite-gray font-inter font-medium text-sm leading-[130%]"
                        />
                    </div>
                    <div className="flex flex-col gap-3.5 ">
                            <label className='font-inter font-medium text-xl leading-[130%]'>Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                placeholder="Create Password"
                                className="w-full outline-none rounded px-4 py-2 bg-lite-gray font-inter font-medium text-sm leading-[130%]" />
                            <div className="absolute right-3 top-1/4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 justify-between">
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                            <h1 className='text-light-blue font-inter font-normal text-base leading-[130%]'>Remember me</h1>
                        </div>
                        <Link to={"/forget"}>
                        <h1 className='text-light-blue font-inter font-normal text-base leading-[130%]'>Forgot Password?</h1>
                        </Link>
                    </div>
                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded font-inter font-normal text-xl leading-[130%]">
                        Log in
                    </button>
                    <div className="flex flex-col gap-[30px]">
                        <Link to={"/signup"}>
                        <div className="text-center font-inter font-normal text-base leading-[130%]">Don,t have an Account? <a className='font-inter font-normal text-base leading-[130%] text-light-blue hover:underline' href='#'>Create account</a> </div>
                        </Link>
                        <div className="text-center font-inter font-normal text-base leading-[130%]">Or Continue with</div>
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-around ">
                            <a href="https://accounts.google.com/signin" target="_blank"  className="hover:scale-110 transition-transform" ><img src={Igoogle} alt="" /> </a>
                            <a className="hover:scale-110 transition-transform text-blue-600" href="https://www.facebook.com/login/" target="_blank" ><img src={Ifacebook} alt="" /></a>
                            <a href="https://appleid.apple.com/" target="_blank"  className="hover:scale-110 transition-transform text-black"><img src={Iapple} alt="" /></a>
                            <a href="https://twitter.com/i/flow/login" target="_blank" className="hover:scale-110 transition-transform text-sky-500"><img src={Itwitter} alt="" /></a>
                        </div>
                    </div>
                </div>
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


export default Login
