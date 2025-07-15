import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";

const Questions = () => {
    return (
        <>
            <div className="container ">
                <div className=" pt-[30px] md:pt-[60px] pb-[60px]">
                    <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                        <img className='hidden md:block' src={arrowline1} alt="Workssvg1" />
                        <h1 className="font-Inter font-semibold text-[22px] md:text-[40px] leading-[130%] text-black-black">
                            Frequently Asked Questions

                        </h1>
                        <img className='hidden md:block' src={arrowline2} alt="Workssvg2" />
                    </div>
                    <p className=" text-sm md:text-[20px] text-dark-gray leading-[130%] font-normal font-Inter text-center">
                        Got a question? We’re here to help.
                    </p>
                    <div className="w-full flex flex-col items-end">
                        <div className="max-w-[1009px] w-full flex flex-col items-end pt-[60px] gap-[30px]">
                            <div className="flex flex-col gap-3.5 w-full">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-inter font-medium text-xl leading-[130%]">Q 1. How do I book a workspace on CoWorkMate?</h1>
                                    <img src="/public/svg/arrowup.svg" alt="" />
                                </div>
                                <h1 className="max-w-[661px] w-full font-inter font-normal text-base text-dark-gray leading-[130%]">A. Simply search by location and date, browse available spaces, and click “Book Now.” You’ll receive instant confirmation via email.</h1>

                            </div>
                            <div className="flex items-center justify-between w-full">
                                <h1 className="font-inter font-medium text-xl leading-[130%]">Q 2. Can I cancel or reschedule my booking?</h1>
                                <img src="/public/svg/arrowdown.svg" alt="" />
                            </div>
                             <div className="flex items-center justify-between w-full">
                                <h1 className="font-inter font-medium text-xl leading-[130%]">Q 3. What amenities are included in a workspace?</h1>
                                <img src="/public/svg/arrowdown.svg" alt="" />
                            </div>
                             <div className="flex items-center justify-between w-full">
                                <h1 className="font-inter font-medium text-xl leading-[130%]">Q 4. Do I need a subscription to use CoWorkMate?</h1>
                                <img src="/public/svg/arrowdown.svg" alt="" />
                            </div> 
                            <div className="flex items-center justify-between w-full">
                                <h1 className="font-inter font-medium text-xl leading-[130%]">Q 5. Is customer support available if I have issues?</h1>
                                <img src="/public/svg/arrowdown.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions
