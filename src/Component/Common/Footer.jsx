import footerjson from "../../Json/footer.json"

const Footer = () => {
    return (
        <>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] sm:gap-10 lg:gap-[100px]">
                <div className=" ">
                    {
                        footerjson.company?.map((item, index) => (
                            <div to={item.path} key={index + Date.now()} className="flex flex-col max-w-[485px] w-full gap-3.5">
                                <div className="flex items-center gap-2.5">
                                    <img src={`/public/svg/${item.image}`} alt="" />
                                    <h1 className="font-inter font-semibold text-xl">{item.name}</h1>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="">
                                        <h1 className="font-inter font-normal text-base lg:text-xl leading-[130%] text-dark-gray">{item.description}</h1>
                                    </div>
                                    <div className="flex flex-col gap-3.5">
                                        <h1 className="font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.contact.email}</h1>
                                        <h1 className="font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.contact.phone}</h1>
                                        <h1 className="font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.contact.address}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-2 md:flex justify-between  max-w-[618px] w-full">
                    {
                        footerjson.sections?.map((item, index) => (
                            <div to={item.path} key={index + Date.now()} className="flex flex-col gap-6">
                                <h1 className="font-inter font-semibold text-lg leading-[130%] ">{item.title}</h1>
                                {item.links.map((item, index) => (
                                    <h1 className="flex-col font-inter font-normal text-sm sm:text-base leading-[130%] text-dark-gray gap-[14px]">
                                        {
                                            item.linkdata
                                        }
                                    </h1>
                                ))

                                }
                            </div>
                        ))
                    }
                </div>
                <div className="flex gap-5 m-auto max-w-[200px] md:hidden">
                    <img src="/svg/facebook.svg" alt="facebook" />
                    <img src="/svg/instagram.svg" alt="instagram" />
                    <img src="/svg/twitter.svg" alt="twitter" />
                    <img src="/svg/youtube.svg" alt="youtube" />
                    <img src="/svg/linkedin.svg" alt="linkedin" />
                </div>
            </div>
            <div className="border-t border-dark-gray mt-14 md:mt-[167px]"></div>
            <div className="container flex justify-center sm:justify-between py-6">
                <h1 className="text-center font-inter font-normal text-xs sm:text-sm md:text-start">© 2025 CoWorkMate. All rights reserved.</h1>
                <div className="hidden md:grid grid-cols-5 justify-center gap-5">
                    <img src="/svg/facebook.svg" alt="facebook" />
                    <img src="/svg/instagram.svg" alt="instagram" />
                    <img src="/svg/twitter.svg" alt="twitter" />
                    <img src="/svg/youtube.svg" alt="youtube" />
                    <img src="/svg/linkedin.svg" alt="linkedin" />
                </div>
            </div>
        </>
    )
}

export default Footer
