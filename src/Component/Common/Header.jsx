import { NavLink } from "react-router-dom"
import headerjson from "../../Json/Header.json"
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="container">
                <div className="flex justify-between items-center py-9">
                    <div className="flex items-center gap-2.5">
                        <img src="/public/svg/cowork.svg" alt="" />
                        <h1 className="font-inter font-semibold text-xl">Cowork Mate</h1>
                    </div>
                    <div className="hidden md:flex max-w-[442px] w-full justify-between items-center">
                        {
                            headerjson.headerpath?.map((item, index) => (
                                <NavLink to={item.path} className="flex  " key={index}>
                                    <h1 className="font-inter font-medium text-lg hover:text-linear-blue">{item.title}</h1>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className="hidden lg:flex gap-[30px] items-center ">
                        <img className="cursor-pointer" src="/public/svg/bell-outline.svg" alt="" />
                        <img className="cursor-pointer" src="/public/svg/user.svg" alt="" />
                        <img className="cursor-pointer" src="/public/svg/search-rounded.svg" alt="" />
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative w-6 h-6 flex items-center justify-center group">
                        <span className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}></span>
                        <span className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`} ></span>
                        {
                            isOpen && (
                                <div className="absolute top-full right-0  w-52 pb-[52px] bg-white shadow-lg rounded pl-4 pt-[30px] flex flex-col gap-3 z-40  transition-all duration-300 ease-in-out ">
                                    {
                                        headerjson.headerpath?.map((item, index) => (
                                            <div to={item.path} key={index} className="">
                                                   <h1 className={`text-start text-black pb-5 ${index !== headerjson.headerpath.length - 1 ? "border-b border-black": ""}`}>
                                                   {item.title}  
                                                </h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            )


                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
