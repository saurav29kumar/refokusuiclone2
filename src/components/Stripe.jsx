import React from "react";
function Stripe({val}){
    
    return(
        <div className="w-[16.66%] mt-20 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex items-center px-5 py-2 justify-between">
            <img src={val.url} alt="" />
            <span>{val.number}</span>
        </div>
    )
}
export default Stripe;