import React from "react";
import {motion} from "framer-motion"
function Marquee({val , direction}){
    return(
        <div className="flex w-full overflow-hidden">
            <motion.div initial={{x:direction==="left"? "0":"-100%"}} animate={{x: direction==="left"?"-100%":"0"}} transition= {{ease:'linear', duration:15, repeat: Infinity}} className="flex flex-shrink-0 gap-[100px] py-5 pr-40">
                {val.map((item,index)=>(<img key={index} className="flex-shrink-0 w-30" src={item}/>))}
            </motion.div>
            <motion.div initial={{x:direction==="left"? "0":"-100%"}} animate={{x: direction==="left"?"-100%":"0"}} transition= {{ease:'linear', duration:15, repeat: Infinity}} className="flex flex-shrink-0 gap-[100px] py-5 pr-40">
                {val.map((item,index)=>(<img key={index} className="flex-shrink-0 w-30 " src={item}/>))}
            </motion.div>
        </div>
    )
}
export default Marquee;
