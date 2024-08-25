import React from "react";
import {motion} from "framer-motion"
import { MdArrowRightAlt } from "react-icons/md";
function Card({width,start,but,para,hover}){
    return(
        <motion.div whileHover={{backgroundColor: hover === true ? "#7443ff" : "#3e3e46" }} className={`bg-zinc-800 rounded-xl p-4 px-5 ${width}  min-h-[50vh] flex flex-col  justify-between `}>
            <motion.div  className="w-full">
                <motion.div  className="flex items-center justify-between">
                    <h1>card</h1>
                    <MdArrowRightAlt/>
                </motion.div>
                <h1 className="text-xl mt-3 font-medium">Heading </h1>
            </motion.div>
            <motion.div >
                {
                    start === true && (<h1 className="mt-40 text-7xl font-semibold ">Start a Project</h1>)
                }
                {
                    but === true && (<button  className="border-[1px] rounded-full px-3 py-2 mt-5">Contact us</button>)
                }
                {
                    para && (<p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur.</p>)
                }
            </motion.div>
        </motion.div>
    )
}
export default Card;