import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import signupimage from "/public/images/sign.png";
import { Eye, EyeOff } from "lucide-react";
import Ifacebook from "/svg/facebook2.svg";
import Iapple from "/svg/apple.svg";
import Igoogle from "/svg/google.svg";
import Itwitter from "/svg/twitter2.svg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/login', formData);
      const { token, message } = res.data;
      localStorage.setItem('id', res.data.data.id);
      setMessage(message || 'Login successful');
      alert("Login Successful!");
      navigate(""); 
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
      alert(message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">
        <form onSubmit={handleLogin} className="w-full md:w-1/2 flex flex-col gap-[30px] md:gap-3 pt-[54px] pb-[100px] pl-[60px]">
          <div>
            <Link to="/signup">
              <img src="/public/svg/arrowleft.svg" alt="Back" />
            </Link>
            <h2 className="text-2xl font-bold pt-[22px]">Log in</h2>
          </div>

          <div className="flex flex-col gap-3.5">
            <label className='font-inter font-medium text-xl'>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your E-mail"
              required
              className="w-full outline-none rounded pl-3 py-[22px] bg-lite-gray"
            />
          </div>

          <div className="flex flex-col gap-3.5">
            <label className='font-inter font-medium text-xl'>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                className="w-full outline-none rounded pl-3 py-[22px] bg-lite-gray"
              />
              <div className="absolute right-3 top-1/4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className='flex items-center gap-3'>
              <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
              <span className='text-light-blue'>Remember me</span>
            </div>
            <Link to="/forget">
              <span className='text-light-blue'>Forgot Password?</span>
            </Link>
          </div>

<Link to={"/"}>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded text-xl"
          >
            Log in
          </button></Link>

          <div className="flex flex-col gap-[30px]">
            <Link to="/signup">
              <p className="text-center text-base">
                Don’t have an Account? <span className='text-light-blue hover:underline'>Create account</span>
              </p>
            </Link>
            <p className="text-center text-base">Or Continue with</p>
          </div>

          <div className="mt-10 flex justify-around">
            <a href="https://accounts.google.com/signin" target="_blank"><img src={Igoogle} alt="Google" /></a>
            <a href="https://www.facebook.com/login/" target="_blank"><img src={Ifacebook} alt="Facebook" /></a>
            <a href="https://appleid.apple.com/" target="_blank"><img src={Iapple} alt="Apple" /></a>
            <a href="https://twitter.com/i/flow/login" target="_blank"><img src={Itwitter} alt="Twitter" /></a>
          </div>
        </form>

        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={signupimage} alt="Signup Illustration" className="max-w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Login;
