import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'

import axios from 'axios';
import Delhi from '../Browserworkspace/Delhi';
import Chandigarh from '../Browserworkspace/Chandigarh';
import Noyda from '../Browserworkspace/Noyda';
import Jaipur from '../Browserworkspace/Jaipur';
import Kangra from '../Browserworkspace/Kangra';
import Dheradun from '../Browserworkspace/Dheradun';

const BrowserWorkspace = () => {
    const [data, setdata] = useState([])

    const hndeleget = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/getallproduct")
            console.log(res.data.data)
            setdata(res.data.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        hndeleget()
    }, [])
    const delhi = data.filter((item)=>item.catogry === "Delhi")
    const chandigarh = data.filter((item)=>item.catogry === "Chandigarh")
    const noyda = data.filter((item)=>item.catogry === "Noyda")
    const jaipur = data.filter((item)=>item.catogry === "Jaipur")
    const kangra = data.filter((item)=>item.catogry === "Kangra")
    const dheradun = data.filter((item)=>item.catogry === "Dheradun")

    return (
        <>
            <div className="container">
                <div className="flex flex-col text-center pt-[60px] pb-[100px] gap-8 ">
                    <h1 className='font-inter font-semibold text-[26px] md:text-[64px]'>Browse Workspaces</h1>
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
               <Delhi delhi={delhi}/>
               <Chandigarh chandigarh={chandigarh}/>
               <Noyda noyda={noyda}/>
               <Jaipur jaipur={jaipur}/>
               <Kangra kangra={kangra}/>
               <Dheradun dheradun={dheradun}/>
            </div>
        </>
    )
}

export default BrowserWorkspace
