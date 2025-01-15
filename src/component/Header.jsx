import React, { useState } from "react";
import Logo from "../../public/logo.png";
import menu from "../../public/Meun.svg"

function Header() {
  let [state, setState] = useState(false);
  return (
    <div className=" bg-slate-950">
      <div className="  p-2 w-screen lg:w-[1120px] m-auto flex justify-between align-middle">
        <div className=" w-36 my-2">
          <img src={Logo} alt="blackrose-club" />
        </div>

        <div className=" align-middle hidden sm:flex">
          <ul className=" flex text-white gap-4 text-xs font-semibold my-3">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>ROADMAP</li>
            <li>SERVICES</li>
            <li>TEAM</li>
          </ul>
        </div>

        <div className=" hidden sm:flex">
          <button className=" px-4 my-1 bg-green-500 duration-150 hover:bg-green-600 p-2 font-semibold text-xs">
            BECOME A SHOPE OWNER
          </button>
        </div>

        <div onClick={()=>setState(!state)} className="md:hidden text-xl cursor-pointer  duration-500">
          <img className=" w-10 " src={menu} alt="" />
        </div>
      </div>
    
        <div className={state ? "h-64 md:hidden text-center text-white duration-1000" : "h-0 overflow-hidden text-center text-white duration-500"}>
          <ul className="">
            <li className=" cursor-pointer w-full hover:bg-slate-900 p-3 font-semibold">
              HOME
            </li>
            <li className=" cursor-pointer w-full hover:bg-slate-900 p-3 font-semibold">
              ABOUT
            </li>
            <li className=" cursor-pointer w-full hover:bg-slate-900 p-3 font-semibold">
              ROADMAP
            </li>
            <li className=" cursor-pointer w-full hover:bg-slate-900 p-3 font-semibold">
              SERVICES
            </li>
            <li className=" cursor-pointer w-full hover:bg-slate-900 p-3 font-semibold">
              TEAM
            </li>
          </ul>
        </div>
    
    </div>
  );
}

export default Header;
