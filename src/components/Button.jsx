import React from "react";
import { IoMdReturnRight } from "react-icons/io";
function Button({title='Get Started'}){
    return(
        <div className="w-40 h-10 bg-white rounded-2xl flex items-center px-2 justify-between hover:font-bold">
            <span className=" text-black">{title}</span>
            <IoMdReturnRight className="text-black"/>
        </div>
    )
}
export default Button;