import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
const Dheradun = ({ dheradun }) => {
    return (
        <>
            <div className="flex items-center gap-[10px]">
                <h5 className="font-Inter font-semibold text-[22px] leading-[100%]">
                    Available in Dheradun
                </h5>
                <img src="/svg/arrowright.svg" alt="" />
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
                }}>
                {
                    dheradun.length === 0 ? (
                        <p>Loading...</p>
                    ) : (dheradun.map((item, index) => {
                        const formattedPrice = item.price.toLocaleString("en-IN");
                        return(<>
                        <SwiperSlide
                            key={index}
                            className=" mt-[32px] rounded-[12px] overflow-x-hidden mb-[30px] md:mb-[50px]  max-w-[419px] w-full"
                        >
                            <img src={`http://localhost:3000/upload/${item.mainImgPath}`} alt={item.text || "workspace image"} />
                            <div className="">
                                <h2 className="pb-[6px] pt-3 md:pt-[14px] font-Inter font-medium text-lg sm:text-[22px] leading-[100%]">
                                    {item.name}
                                </h2>
                                <span className="flex items-center gap-1 pb-[22px] md:pb-[22px]">
                                    <p className="font-Inter font-normal text-base sm:text-lg leading-[100%]">
                                        {item.location}
                                    </p>
                                    <span className="flex items-center gap-[10px]">
                                        <p className="font-Inter font-normal text-base sm:text-lg leading-[100%]">
                                            ₹{formattedPrice}
                                        </p>
                                        <img src={`http://localhost:3000/upload/${item.raitingImgPath}`} alt="" />
                                        <p className="font-Inter font-normal text-base sm:text-lg leeleading-[100%]">
                                            {item.raiting}
                                        </p>
                                    </span>
                                </span>
                            </div>
                        </SwiperSlide>
                        </>)
}))}
            </Swiper>
        </>
    )
}

export default Dheradun
