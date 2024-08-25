import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Work() {
  const [image, setImage] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "65%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "55%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "70%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImage((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 5:
        imagesShow([0, 1, 2]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3]);
        break;
      case 9:
        imagesShow([0, 1, 2, 3,4]);
        break;
      case 11:
        imagesShow([0, 1, 2, 3,4,5]);
        break;
    } 
  });

  return (
    <div className="w-full mt-10 ">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[35vw]  font-medium  leading-none select-none">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {image.map(
            (item, index) =>
              item.isActive === true && (
                <img
                  key={index}
                  className="w-60 rounded-md absolute"
                  src={item.url}
                  style={{ top: item.top, left: item.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
export default Work;
