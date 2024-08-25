// import React , { useState } from "react";
// import Product from "./Product";
// import { motion } from "framer-motion";
// import {rainfall} from "../videos/rainfall.webm"

// function Products(){
//     var data1 = [{title:'Arqitel', paragraph:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.' , started:true, case:false},
//         {title:'Cula', paragraph:'We immersed ourselves in a 3D world we created to explain how Culas platform collects data from carbon removal processes and converts them into carbon credit certificates.' , started:true, case:false},
//         {title:'Layout Land', paragraph:'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.' , started:true, case:false},
//         {title:'TTR', paragraph:'We have created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.' , started:true, case:false},
//         {title:'Maniv', paragraph:'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.' , started:true, case:false},
//         {title:'Singularity', paragraph:'A new site for Singularity that supports their growth and showcases their true identity as industry innovators.' , started:true, case:false},
//         {title:'Like Magic', paragraph:'We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.' , started:true, case:true},
//         {title:'Silvr', paragraph:'We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.' , started:true, case:false},
//         {title:'Rainfall', paragraph:'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.' , started:true, case:true}
//     ]

//     const [pos,setPos] = useState(0)
//     const mover = (val)=>{
//         setPos(val*23)
//     }
    
//     return(
//         <div className="mt-32 relative">
//             {data1.map((item,index)=>(<Product key={index} val={item} mover={mover} count={index}/>))}
//             <div className="absolute top-0 w-full h-full pointer-events-none">
//                 <motion.div initial={{y:pos , x: "-50%"}} animate={{y:pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.6}} className="absolute w-[30rem] h-[23rem] bg-white left-[44%]  rounded-md overflow-hidden ">
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-100 left-[44%] rounded-md">
//                        <video src={rainfall.webm} controls />
//                    </motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-200 left-[44%] rounded-md"></motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-300 left-[44%] rounded-md"></motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-400 left-[44%] rounded-md"></motion.div>                 
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-500 left-[44%] rounded-md"></motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-600 left-[44%] rounded-md"></motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-700 left-[44%] rounded-md"></motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-800 left-[44%] rounded-md"></motion.div>
//                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:0.5}}  className=" w-full h-full bg-sky-900 left-[44%] rounded-md"></motion.div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }
// export default Products;



import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import rainfall from "../videos/rainfall.webm";
import remind from "../videos/remind.webm";
import rocketchat from "../videos/rocketchat.webm";
import Silvr from "../videos/Silvr.webm";
import summon from "../videos/summon.webm";
import weglot from "../videos/weglot.webm";
import layoutland from "../videos/layoutland.mp4";
import yahoo from "../videos/yahoo.webm";
import yearinreview from "../videos/yearinreview.webm";


function Products() {
  var data1 = [
    {
      title: 'Rainfall',
      paragraph: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
      started: true,
      case: false
    },
    {
      title: 'Remind',
      paragraph: 'We immersed ourselves in a 3D world we created to explain how Culas platform collects data from carbon removal processes and converts them into carbon credit certificates.',
      started: true,
      case: false
    },
    {
      title: 'Rocket Chat',
      paragraph: 'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.',
      started: true,
      case: false
    },
    {
      title: 'Silvr',
      paragraph: 'We have created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.',
      started: true,
      case: false
    },
    {
      title: 'Summon',
      paragraph: 'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.',
      started: true,
      case: false
    },
    {
      title: 'Weglot',
      paragraph: 'A new site for Singularity that supports their growth and showcases their true identity as industry innovators.',
      started: true,
      case: false
    },
    {
      title: 'Layout Land',
      paragraph: 'We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.',
      started: true,
      case: true
    },
    {
      title: 'YAHOO',
      paragraph: 'We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.',
      started: true,
      case: false
    },
    {
      title: 'Year in review',
      paragraph: 'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.',
      started: true,
      case: true
    }
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {data1.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos+`rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[30rem] h-[23rem] bg-white left-[44%] rounded-md overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos +`rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100 left-[44%] rounded-md">
            <video src={rainfall} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos+`rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200 left-[44%] rounded-md">
                <video src={remind} autoPlay muted loop className="overflow-hidden object-cover" />
            </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300 left-[44%] rounded-md"
          >
            <video src={rocketchat} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400 left-[44%] rounded-md"
          >
            <video src={Silvr} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500 left-[44%] rounded-md"
          >
            <video src={summon} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600 left-[44%] rounded-md"
          >
            <video src={weglot} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-700 left-[44%] rounded-md"
          >
            <video src={layoutland} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-800 left-[44%] rounded-md"
          >
            <video src={yahoo} autoPlay muted loop />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem`}}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-900 left-[44%] rounded-md"
          >
            <video src={yearinreview} autoPlay muted loop />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
