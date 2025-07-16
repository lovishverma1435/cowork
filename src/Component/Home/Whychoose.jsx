import whychoosejson from "../../Json/whychoose.json"
import Whychoosecard from "../Common/workcard"
import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";
import { Swiper, SwiperSlide } from 'swiper/react';


const Whychoose = ({ worktitle, workparagraph }) => {
    return (
        <>
            <div className="container pt-[30px] md:pt-[60px] pb-[60px]">
                <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                    <img className='hidden md:block' src={arrowline1} alt="Workssvg1" />
                    <h1 className="font-Inter font-semibold text-[22px] md:text-[40px] leading-[130%] text-black-black">
                        {worktitle}
                    </h1>
                    <img className='hidden md:block' src={arrowline2} alt="Workssvg2" />
                </div>

                <p className=" text-sm md:text-[20px] text-dark-gray leading-[130%] font-normal font-Inter text-center  mb-[30px] md:mb-[60px] max-w-[487px] w-full m-auto">
                    {workparagraph}
                </p>
                <div className="hidden xl:flex flex-wrap justify-center gap-8">
                    {whychoosejson.map((item, index) => (
                        <div key={index}>
                            <Whychoosecard
                                logo={item.logo}
                                title={item.title}
                                text={item.text}
                            />
                        </div>
                    ))}
                </div>

                <div className="block xl:hidden">
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
                        {whychoosejson.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Whychoosecard
                                    logo={item.logo}
                                    title={item.title}
                                    text={item.text}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
                    </div>
            </div>
        </>
    )
}

export default Whychoose
