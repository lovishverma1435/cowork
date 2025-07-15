import { SwiperSlide,Swiper } from "swiper/react";
import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";
import Usersjson from "../../Json/whatusers.json"

const WhatUsers = () => {
    return (
        <>
            <div className="container pb-[52px]">
                <div className=" pt-[30px] md:pt-[60px] pb-[60px]">
                    <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                        <img className='hidden md:block' src={arrowline1} alt="Workssvg1" />
                        <h1 className="font-Inter font-semibold text-[22px] md:text-[40px] leading-[130%] text-black-black">
                            What Our Users Are Saying
                        </h1>
                        <img className='hidden md:block' src={arrowline2} alt="Workssvg2" />
                    </div>
                    <p className=" text-sm md:text-[20px] text-dark-gray leading-[130%] font-normal font-Inter text-center">
                        Trusted by remote professionals, startups, and global teams.
                    </p>
                </div>
                <Swiper 
                    spaceBetween={32}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1.2,

                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        750: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                {
                    Usersjson.map((item, index) => (
                        <SwiperSlide className="p-[30px] bg-lite-gray max-w-[419px] w-full rounded-2xl" key={index}>
                            <div className="flex gap-3">
                                <img src={`/public/svg/${item.logo}`} alt="svg" />
                                <div className="flex flex-col gap-0.5">
                                    <h1 className="font-inter font-medium text-base leading-[130%]">{item.name}</h1>
                                    <h1 className="font-inter font-normal text-xs leading-[130%] text-dark-gray">{item.work}</h1>
                                </div>
                            </div>
                            <h1 className="py-6 font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.info}</h1>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <img src={`/public/svg/${item.ratinglogo}`} alt="rating" />
                                    <h1 className="font-inter font-medium text-base leading-[130%]">{item.ratting}</h1>
                                </div>
                                <h1 className="font-inter font-normal text-base leading-[130%]">{item.date}</h1>
                            </div>
                        </SwiperSlide>
                    ))
                }

                </Swiper>
            </div>
        </>
    )
}

export default WhatUsers
