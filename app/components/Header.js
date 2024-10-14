import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";

const Header = () => {
  return (
    <div className="grid grid-cols-1 items-center  lg:ml-4  lg:px-4 lg:justify-between">
      <div className="flex justify-center items-center p-2 ">
        <div className="flex flex-col items-center text-yellow-500 font-bold justify-between space-x-2 text-xl lg:flex-row lg:text-2xl">
          <span>Badru-Zaman General Transport </span>
           </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full space-x-3">
        <p className="text-gray-800 font-light  px-1 border-gray-600 flex flex-row gap-1 items-center"> <span className="flex flex-row gap-1"><GiRotaryPhone/><PiWhatsappLogoLight/></span>+971551332163</p>
        <p className="text-gray-800 font-light gap-1  px-1 flex flex-row items-center"><span><GrLocation/></span>Al-Surooj Al-Ayen U.A.E</p>
      </div>
    </div>
  );
};

export default Header; 