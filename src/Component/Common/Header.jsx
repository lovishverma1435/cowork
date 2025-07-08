import { NavLink } from "react-router-dom"
import headerjson from "../../Json/Header.json"

const Header = () => {
    console.log(headerjson.headerlogo)
    return (
        <>
            <div className="container">
                <div className="flex justify-between items-center py-9">
                    <div className="flex items-center gap-2.5">
                        <img src="/public/svg/cowork.svg" alt="" />
                        <h1 className="font-inter font-semibold text-xl">Cowork Mate</h1>
                    </div>
                    <div className="hidden lg:flex max-w-[442px] w-full justify-between items-center">
                        {
                            headerjson.headerpath?.map((item, index) => (
                                <NavLink to={item.path} className="flex  " key={index}>
                                    <h1 className="font-inter font-medium text-lg">{item.title}</h1>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className="flex gap-[30px] items-center ">
                        <img className="hidden lg:flex" src="/public/svg/bell-outline.svg" alt="" />
                        <img className="" src="/public/svg/user.svg" alt="" />
                        <img className="hidden lg:flex" src="/public/svg/search-rounded.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
