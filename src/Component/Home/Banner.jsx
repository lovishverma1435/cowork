import SearchPanel from "../ui/SearchPanel"

const Banner = () => {
    return (
        <>
            <div className="container mb-[66px]">
                <div className="flex flex-col-reverse md:grid grid-cols-2 items-center gap-6 md:gap-0">
                    <div className="flex flex-col max-w-[659px] gap-3 lg:gap-6 ">
                        <h1 className='font-inter font-medium text-[32px] lg:text-5xl xl:text-[64px] leading-[120%]'>Find Your Perfect Workspace, Anytime.</h1>
                        <div className="font-inter font-normal text-sm lg:text-lg xl:text-2xl leading-[120%] text-dark-gray max-w-[500px] w-full pb-4">Discover and book coworking spaces that match your style and needs.</div>
                        <div className="flex items-center ">
                            <SearchPanel />
                        </div>
                    </div>
                    <div className="">
                        <img className="rounded-3xl md:rounded-tr-none md:rounded-br-none md:ml-[60px] max-w-[666px] w-full " src="/images/studentsstudying.png" alt="banner" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
