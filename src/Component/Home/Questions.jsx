import { useState } from "react";
import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";
// import arrowup from "../../../public/svg/arrowup.svg";
import arrowdown from "../../../public/svg/arrowdown.svg";
import quesdata from "../../Json/questionsdata.json"

const Questions = () => {

    const [openIndex, setOpenIndex] = useState(0); // default: first question is open

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };
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

                    {/* FAQ Accordion */}
                    <div className="w-full flex flex-col items-end">
                        <div className="max-w-[1009px] w-full flex flex-col items-end pt-[60px] gap-[30px]">
                            {quesdata.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`flex flex-col gap-1 w-full transition-all duration-300 ${!isOpen ? "border-b border-gray-300 pb-4" : "border-0"
                                            }`}
                                    >
                                        {/* Question Row */}
                                        <div
                                            className="flex items-center justify-between w-full cursor-pointer"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <h1 className="font-inter font-medium text-xl leading-[130%]">
                                                {item.question}
                                            </h1>
                                            <img
                                                src={arrowdown}
                                                alt="arrow"
                                                className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </div>

                                        {/* Answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[300px] opacity-100 pt-2" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <h1 className="max-w-[661px] w-full font-inter font-normal text-base text-dark-gray leading-[130%]">
                                                {item.answer}
                                            </h1>
                                        </div>
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
