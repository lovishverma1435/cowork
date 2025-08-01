import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Placeofferr from "../../Json/placeoffer.json"
import Calendar from '../Pages/Calender'

const Workspacedetails = () => {
    const [data, setdata] = useState([])
    const query = new URLSearchParams(useLocation().search)
    const id = query.get("page")
    const hndeleget = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/getoneproduct/${id}`)
            console.log(res.data.data)
            setdata([res.data.data])
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        hndeleget()
    }, [id])
    console.log(data)
    const baseurl = "http://localhost:3000/upload"

    return (
        <>
            <div className="container">
                <div className="">
                    {
                        data.map((item, index) => (
                            <div key={index}>
                                <h1 className='font-inter font-bold text-[26px] py-[50px]'>{item.name}</h1>
                                <div className="flex gap-8">
                                    <img className=' max-w-[758px] w-full rounded-l-2xl ' src={`${baseurl}/${item.mainImgPath}`} alt="" />
                                    <div className="grid grid-cols-2 gap-8">
                                        {item.detailImgPath.map((item, index) => (
                                            <div key={index}>
                                                <img src={`${baseurl}/${item.img}.png`} alt="" />
                                            </div>
                                        ))}</div>
                                </div>
                                <div className="max-w-[758px] w-full">
                                    <div className="pt-10 flex flex-col gap-2">
                                        <h1 className='font-inter font-medium text-[22px]'>  {item.catogry} Filed Office,India</h1>
                                        <h1 className='font-inter font-normal text-xl text-dark-gray'>Lorem Ipsum is simply dummy text of the printing.</h1>
                                    </div>
                                    <div className="flex max-w-[757px] w-full items-center  border border-black rounded-2xl py-9 px-10 mt-[60px] mb-10">
                                        <h4 className='max-w-[81px] w-full font-inter font-medium text-lg leading-[120%] text-center'>Guest Favourite</h4>
                                        <h4 className='max-w-[359px] w-full font-inter font-medium text-base leading-[120%] ml-[51px] mr-5'>One of the most loved homes on Cowork Mate, according to guests</h4>
                                        <div className="flex flex-col max-w-[58px] w-full text-center gap-3">
                                            <h4 className='w-full font-inter font-medium text-base leading-[120%]'>{item.raiting}</h4>
                                            <img src="/svg/ratingfivestar.svg" alt="Rating" />
                                        </div>
                                        <span className='w-[1px] h-10 block bg-lite-gray mx-[30px]'></span>
                                        <div className="flex flex-col max-w-[48px] w-full text-center gap-2">
                                            <h4 className='w-full font-inter font-medium text-base leading-[120%]'>5.0</h4>
                                            <h4 className='w-full font-inter font-medium text-xs text-dark-gray leading-[120%]'>Reviews</h4>
                                        </div>
                                    </div>
                                    <div className="flex gap-[18px] items-center border-b border-dark-gray pb-5 ">
                                        <img className='h-[42px] w-[42px]' src={`${baseurl}/${item.hostImgPath}`} alt="Host" />
                                        <div className="flex flex-col gap-2">
                                            <h4 className='font-inter font-medium text-base'>Stay with {item.hostName}</h4>
                                            <h4 className='font-inter font-normal text-sm text-dark-gray leading-[150%]'>Superhost {item.hostingTime} hosting</h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-10 gap-10 border-b border-dark-gray pb-5 ">
                                        <div className="flex gap-7">
                                            <img src="/svg/keyround.svg" alt="key.svg" />
                                            <div className="flex flex-col gap-2">
                                                <h4 className='font-inter font-medium text-sm'>Expential check -inexperiance</h4>
                                                <h4 className='font-inter font-normal text-sm text-dark-gray'>Recent guest gave the check in process a5-star rating.</h4>
                                            </div>
                                        </div><div className="flex gap-7">
                                            <img src="/svg/locationoutlined.svg" alt="key.svg" />
                                            <div className="flex flex-col gap-2">
                                                <h4 className='font-inter font-medium text-sm'>Unbeatable location</h4>
                                                <h4 className='font-inter font-normal text-sm text-dark-gray'>100% of guest in the past ear gave this location a 5-star rating.</h4>
                                            </div>
                                        </div><div className="flex gap-7">
                                            <img src="/svg/guidanceoffice.svg" alt="key.svg" />
                                            <div className="flex flex-col gap-2">
                                                <h4 className='font-inter font-medium text-sm'>Office in area</h4>
                                                <h4 className='font-inter font-normal text-sm text-dark-gray'>Recent guest gave the check in process a5-star rating.</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col pt-10 border-b border-dark-gray pb-10">
                                        <h1 className='font-inter font-medium text-[22px] leading-[150%] pb-2'>About this project</h1>
                                        <p className='font-inter font-normal text-sm leading-[150%] text-dark-gray max-w-[590px] w-full pb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <button className="flex justify-center max-w-[116px] w-full bg-lite-gray py-3 rounded-2xl font-inter font-medium text-base">Book Now</button>
                                    </div>
                                    <div className="flex flex-col pt-10">
                                        <h1 className='font-inter font-medium text-[22px] leading-[150%]'>Where you’ll Work</h1>
                                        <div className="flex gap-8 pt-[30px] pb-10">
                                            {
                                                item.office.map((item, index) => (
                                                    <div className="flex flex-col gap-[18px]" key={index}>
                                                        <img src={`${baseurl}/${item.officeImgPath}`} alt="" />
                                                        <div className="flex flex-col gap-1">
                                                            <h4 className='font-inter font-medium text-base'>{item.officeTitle}</h4>
                                                            <h4 className='font-inter font-normal text-sm text-dark-gray'>{item.officeInfo}</h4>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="flex flex-col gap-[30px] border-b border-dark-gray pb-10">
                                            <h1 className='font-inter font-medium text-[22px] leading-[150%]'>What this place offer</h1>
                                            <div className="grid grid-cols-2 gap-5">
                                            {
                                                Placeofferr.map((item, index) => (
                                                    <div key={index + Date.now()}>
                                                        <div className="flex gap-5">
                                                            <img src={`/svg/${item.img}`} alt="svg" />
                                                            <h4>{item.title}</h4>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            </div>
                                        </div>
                                        <div className="flex flex-col pt-10 pb-10">
                                            <div className="flex flex-col gap-2 pb-11">
                                                <h4 className='font-inter font-medium text-[22px] leading-[150%]'>Select check-in date</h4>
                                                <h4 className='font-inter font-normal text-xl leading-[150%]'>Add your travel dates for exact pricing</h4>
                                            </div>
                                            <Calendar/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Workspacedetails
