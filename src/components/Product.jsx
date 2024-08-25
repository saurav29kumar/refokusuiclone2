import React from "react";
import Button from "./Button";
function Product({val,mover,count}){
    
    return(
        <div className="w-full px-20 py-20 h-[23rem] border-2 border-black text-white ">
            <div onMouseEnter={()=>{mover(count)}}className="max-w-screen-xl mx-auto flex items-center justify-between ">
                <h1 className="text-4xl ">{val.title}</h1>
                <div className="w-1/3">
                    <p className="mb-6">{val.paragraph}</p>
                    <div className="flex gap-8 items-center">
                        {val.started && <Button />}
                        {val.case && <Button title="Case Study"/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;