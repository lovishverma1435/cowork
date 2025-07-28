import TopWorkprod from "../../Json/topworkspace.json"
import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../ui/Button";
import { useState } from "react";
const TopWorkspace = ({ worktitle, workparagraph }) => {
  const baseurl = "http://localhost:3000/upload";
  const [IsLoading, SetIsLoading] = useState(false)


  const handleclick = () => {
    SetIsLoading(true)
    setTimeout(() => {
      SetIsLoading(false)
    }, 2000)
  }
  return (
    <>
      <section>
        <div className="container ">
          <div className="pt-[30px] md:pt-[60px] pb-[66px]">
            <div className="flex items-center justify-center gap-6 mb-3 md:mb-6">
              <img className='hidden md:block' src={arrowline1} alt="Workssvg1" />
              <h1 className="font-Inter font-semibold text-[22px] md:text-[40px] leading-[130%] text-black-black">
                {worktitle}
              </h1>
              <img className='hidden md:block' src={arrowline2} alt="Workssvg2" />
            </div>

            <p className=" text-sm md:text-[20px] text-dark-gray leading-[130%] font-normal font-inter text-center  mb-[30px] md:mb-[60px] md:w-[507px] w-[232px] mx-auto">
              {workparagraph}
            </p>

            <div className="flex w-full justify-between">
              <Swiper
                spaceBetween={32}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  456: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  614: {
                    slidesPerView: 1.6,
                  },
                  770: {
                    slidesPerView: 1.6,
                  },
                  972: {
                    slidesPerView: 2.2,
                  },
                  1130: {
                    slidesPerView: 2.5,
                  },
                  1334: {
                    slidesPerView: 2.7,
                  },
                  1450: {
                    slidesPerView: 3,
                  },
                }}
                className="mySwiper"
              >
                {TopWorkprod.map((item, index) => (
                  <SwiperSlide>
                    <div
                      key={item + index}
                      className="flex flex-col md:max-w-[419px] max-w-[336px] w-full overflow-hidden bg-lite-gray  rounded-3xl"
                    >
                      <img className="md:max-w-[419px] md:h-[240px] w-full max-w-[336px] h-[192px]" src={`${baseurl}/${item.headimg}`} alt="headimg" />
                      <div className="flex flex-col md:p-[24px_20px_40px_20px] p-[20px_19px_30px_20px]">
                        <h4 className="font-medium font-inter md:text-[22px] text-[20px] leading-[130%] md:pb-3 pb-[14px] ">
                          {item.title}
                        </h4>
                        <div className="flex gap-[10px] md:pb-5 pb-[18px]">
                          <img
                            className="md:w-[22px] w-[20px] md:h-[22px] h-[20px]"
                            src="/svg/location.svg"
                            alt="mdi_location"
                          />
                          <h4 className="md:text-[16px] text-[14px] leading-[130%] text-dark-gray">
                            {item.location}
                          </h4>
                        </div>
                        <div className="flex w-full justify-between md:pb-[21px] pb-[24px]">
                          {item.benifits.map((item, index) => (
                            <h4 className="px-4 py-2 rounded-xl md:text-xs text-[10px] leading-[130%] bg-white font-inter">
                              {item.title}
                            </h4>
                          ))}
                        </div>
                        <div className="flex justify-between md:pb-5 pb-6">
                          <div className="flex gap-[10px] md:text-base text-[14px] leading-[130%] items-center  ">
                            <img
                              className="w-[20px] h-[20px]"
                              src="/svg/starrating.svg"
                              alt=""
                            />
                            <h4 className=" text-dark-gray">{item.raiting}</h4>
                          </div>
                          <h4 className="text-golden">{item.price}</h4>
                        </div>
                        <Button variant="primary"
                          size="md"
                          onClick={handleclick}
                          isLoading={IsLoading}
                          disabled={IsLoading}
                          className="px-[60px] py-[18px]  font-inter font-normal text-xl leading-[130%]">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default TopWorkspace;