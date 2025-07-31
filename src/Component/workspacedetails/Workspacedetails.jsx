import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
                                <div className="">
                                    <h1 className='font-inter font-medium text-[22px]'>  {item.catogry} Filed Office,India</h1>
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
