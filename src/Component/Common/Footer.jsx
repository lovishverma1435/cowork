import footerjson from "../../Json/footer.json"

const Footer = () => {
    return (
        <>
            <div className="container flex gap-[100px]">
                <div className=" ">
                    {
                        footerjson.company?.map((item, index) => (
                            <div to={item.path} key={index + Date.now()} className="flex flex-col max-w-[485px] w-full gap-[30px]">
                                <div className="flex items-center gap-2.5">
                                    <img src={`/public/svg/${item.image}`} alt="" />
                                    <h1 className="font-inter font-semibold text-xl">{item.name}</h1>
                                </div>
                                <div className="flex flex-col gap-[30px]">
                                    <div className="">
                                        <h1 className="font-inter font-normal text-xl leading-[130%] text-dark-gray">{item.description}</h1>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h1 className="font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.contact.email}</h1>
                                        <h1 className="font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.contact.phone}</h1>
                                        <h1 className="font-inter font-normal text-lg leading-[130%] text-dark-gray">{item.contact.address}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex gap-[100px]">
                    {
                        footerjson.sections?.map((item, index) => (
                            <div to={item.path} key={index + Date.now()} className="flex flex-col max-w-[153px] w-full gap-6">
                                <h1 className="font-inter font-semibold text-lg leading-[130%] ">{item.title}</h1>
                                <h1 className="flex-col font-inter font-normal text-base leading-[130%] text-dark-gray gap-[14px]">{item.links}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Footer
