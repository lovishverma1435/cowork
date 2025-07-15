import arrowline1 from "../../../public/svg/Line.svg";
import arrowline2 from "../../../public/svg/rightline.svg";
import Button from "../ui/Button";

const BookWorkspace = () => {
    return (
        <>
            <div className="container">
                <div className=" pt-[30px] md:pt-[60px] pb-[58px]">
                    <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                        <img className='hidden md:block' src={arrowline1} alt="Workssvg1" />
                        <h1 className="font-Inter font-semibold text-[22px] md:text-[40px] leading-[130%] text-black-black">
                            Ready to Book Your Perfect Workspace?

                        </h1>
                        <img className='hidden md:block' src={arrowline2} alt="Workssvg2" />
                    </div>
                    <p className=" text-sm md:text-[20px] text-dark-gray leading-[130%] font-normal font-Inter text-center max-w-[669px] w-full m-auto">
                        Join thousands of professionals using CoWorkMate to work better, smarter, and anywhere.
                    </p>
                    <div className="flex w-full justify-center pt-[30px]">
                        <Button variant="primary" size="md">
                            Find a Workspace
                        </Button>
                    </div>
                    <div className="flex w-full justify-center pt-7">
                    <h1 className="font-inter font-medium text-xl leading-[130%]">or<a className="text-light-blue font-inter font-medium text-xl leading-[130%] cursor-pointer"> Learn How it Works</a></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookWorkspace
