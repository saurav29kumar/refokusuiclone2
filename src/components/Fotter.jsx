import React from "react";
function Fotter() {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex">
        <div>
          <h1 className="text-[12vw] font-bold tracking-tight">refokus.</h1>
        </div>
        <div className="flex gap-20 ml-40 mt-10">
          <div className="text-nowrap">
            <h2 className="mb-10">Socials</h2>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="flex text-zinc-500">
                {item}
              </a>
            ))}
          </div>
          <div>
            <h2 className="mb-10">Sitemap</h2>
            {["Home", "Work", "Careers", "Contaxt"].map((item, index) => (
              <a key={index} className="flex text-zinc-500">
                {item}
              </a>
            ))}
          </div>
          <div className="w-[200px]">
            <p className="mt-[60px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit
              temporibus excepturi magni ullam. Officiis!
            </p>
            <img
              className="" src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex gap-20 text-zinc-500">
        <h4>Privacy policy</h4>
        <h4>Cookie Policy</h4>
        <h4>Terms</h4>
        <h4>condition</h4>
      </div>
    </div>
  );
}
export default Fotter;
