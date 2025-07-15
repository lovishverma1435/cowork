import React from 'react'

const workcard = ({ logo, title, text, worktitle, workparagraph }) => {
    return (
        <>
            <h1 className="">{worktitle}</h1>
            <p className=""> {workparagraph}</p>
            <div className="bg-lite-gray max-w-[410px] border border-dark-gray   w-full rounded-[24px] p-5 lg:p-[30px] shadow-sm">
                <img src={logo} alt={title} />
                <h5 className="lg:pb-4 py-5 lg:pt-[30px] font-Inter font-medium text-base md:text-[24px] leading-[130%]">
                    {title}
                </h5>
                <p className="text-dark-grya text-sm lg:text-lg leading-[130%] font-Inter font-medium">
                    {text}
                </p>
            </div>
        </>
    )
}

export default workcard
