import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto justify-between flex p-3 border-b-2 border-slate-400">
      <div className="nleft items-center flex">
      <img
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="flex gap-10 ml-20">
        {["HOME", "WORK", "CULTURE", "", "News"].map((item, index) =>
          item.length === 0 ? (
            <span
              key={index}
              className="inline-block w-[1px] h-5 bg-slate-400 items-center"
            ></span>
          ) : (
            <a key={index} className="font-semibold flex items-center gap-1 font-regular" href="">
              {index == 1 && (
                <span style={{ boxShadow: "0 0 0.45em #00FF19" }} className="inline-block bg-green-500 h-1 w-1 rounded "></span>
              )}
              {item}
            </a>
          )
        )}
      </div>
      </div>
      <Button/>
    </div>
  );
}
export default Navbar;
