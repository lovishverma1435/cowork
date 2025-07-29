import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import { SwiperSlide ,Swiper} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import axios from 'axios';

const BrowserWorkspace = () => {
const [data ,setdata]=useState([])
    const hndeleget=async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/getallproduct")
              console.log(res.data.data)
              setdata(res.data.data)
        } catch (error) {
            console.error(error);
            
        }
    }
    useEffect(()=>{
hndeleget()
    },[])
    console.log(data)
    return (
        <>
            <div className="container">
                <div className="flex flex-col text-center pt-[60px] pb-[100px] gap-8 ">
                    <h1 className='font-inter font-semibold text-[64px]'>Browse Workspaces</h1>
                    <p className='font-inter font-normal text-[22px]'>Find the perfect coworking space for you</p>
                    <div className="flex max-w-[800px] w-full bg-lite-gray rounded-2xl  mx-auto overflow-hidden">
                        <div className="flex  pl-5 pr-3 gap-[42px] items-center max-w-[274px] w-full">
                            <h4 className='font-inter font-normal text-lg w-[176px] '>Enter city or location</h4>
                            <img className='h-6 w-6' src="/svg/arrowdown.svg" alt="arrow" />
                        </div>
                        <span className='h-[82px] block bg-[#55555533] w-[1px]'></span>
                        <div className="flex  pl-[45px] pr-3 gap-[42px] items-center">
                            <h4 className='font-inter font-normal text-lg w-[97px]'>Price range</h4>
                            <img className='h-6 w-6' src="/svg/arrowdown.svg" alt="arrow" />
                        </div>
                        <span className='h-[82px] block bg-[#55555533] w-[1px]'></span>
                        <div className="flex pl-5 gap-[57px] items-center max-w-[307px] w-full">
                            <h4 className='font-inter font-normal text-lg w-[84px]'>Amenities</h4>
                            <Button className='py-7 px-10 font-inter font-normal text-xl max-w-[146px] w-full rounded-[0px] '>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gp-[10px]">
                    <h5 className="font-Inter font-semibold text-[22px] leading-[100%]">
                        {}
                    </h5>
                    <img src={img} alt="" />
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
                    {res.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className=" mt-[32px] rounded-[12px] overflow-x-hidden mb-[30px] md:mb-[50px]  max-w-[419px] w-full"
                        >
                            <img src={item.mainimg} alt="" />
                            <div className="">
                                <h2 className="pb-[6px] pt-3 md:pt-[14px] font-Inter font-medium text-lg sm:text-[22px] leading-[100%]">
                                    {item.text}
                                </h2>
                                <span className="flex items-center gap-1 pb-[22px] md:pb-[22px]">
                                    <p className="font-Inter font-normal text-base sm:text-lg leading-[100%]">
                                        {item.location}
                                    </p>
                                    <span className="flex items-center gap-[10px]">
                                        <p className="font-Inter font-normal text-base sm:text-lg leading-[100%]">
                                            {item.price}
                                        </p>
                                        <img src={item.star} alt="" />
                                        <p className="font-Inter font-normal text-base sm:text-lg leeleading-[100%]">
                                            {item.rating}
                                        </p>
                                    </span>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default BrowserWorkspace
