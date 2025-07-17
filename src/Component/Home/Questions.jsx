import { useState } from "react";
import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";
// import arrowup from "../../../public/svg/arrowup.svg";
import arrowdown from "../../../public/svg/arrowdown.svg";
import quesdata from "../../Json/questionsdata.json"

const Questions = () => {

   const [isOpen,SetIsopen] = useState("")
    return (
        <>
            <div className="container">
                <div className="pt-[30px] md:pt-[60px] pb-[60px]">
                    {/* Title */}
                    <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                        <img className="hidden md:block" src={arrowline1} alt="line1" />
                        <h1 className="font-Inter font-semibold text-[22px] md:text-[40px] leading-[130%] text-black-black">
                            Frequently Asked Questions
                        </h1>
                        <img className="hidden md:block" src={arrowline2} alt="line2" />
                    </div>

                    <p className="text-sm md:text-[20px] text-dark-gray leading-[130%] font-normal font-Inter text-center">
                        Got a question? We’re here to help.
                    </p>

                    <div className="w-full flex flex-col items-end">
                        <div className="max-w-[1009px] w-full flex flex-col pt-[60px] gap-[30px]">
                            {quesdata.map((item, index) => {
                                return (
                                    <div onClick={()=>SetIsopen(index)} key={index+item} className="flex justify-between cursor-pointer w-full">
                                        <div className={` flex flex-col items-start gap-3.5`}>
                                            <h4 className={`font-inter font-medium text-xl border-b leading-[130%] ${isOpen !== index ? " border-dark-gray pb-3.5" : "border-none pb-0 "} `}>{item.question}</h4>
                                            <p className={`font-inter font-normal text-base leading-[130%] text-dark-gray ${isOpen === index ? "h-[42px] opacity-100  " :"h-0 opacity-0 "} transition-all duration-500 `}>{item.answer}</p>
                                        </div>
                                        <img className={`${isOpen === index ? "rotate-180  transition-all duration-500" : "rotate-0"}  `} src={arrowdown} alt="" />

                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Questions
