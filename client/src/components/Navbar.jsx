import { Link } from "react-router";
import { useState } from "react";
import crown from "../assets/crown.png";
import logout from "../assets/logout.png";
import dollar from "../assets/dollar.png";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="z-10 fixed w-full bg-[#1d2731] text-white">
      {/* Navbar Section */}
      <div className="h-[48.75px] flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center text-base font-semibold">
          <img src={crown} className="w-[70.5px] h-[39.75px] ml-[15.25px]" />
          <Link to="/dashboard">
            <span className="ml-[17.75px]">KING OF ECONOMY</span>
          </Link>
        </div>

        {/* Middle Section */}
        <div className="items-center space-x-4">
          <div className="flex items-center text-yellow-400 text-lg font-semibold">
            <img src={dollar} className="w-[33.75px] h-[33.75px]" />
            <span className="ml-[10px]">123456</span>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center relative cursor-pointer"
        >
          <ChevronDown
            size={16}
            className={`${isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Right Section */}
        <Link to="/login">
          <img src={logout} className="w-[37.5px] h-[37.5px] mr-[30px]" />
        </Link>
      </div>

      {/* Expandable Section - Positioned Absolutely */}
      {isExpanded && (
        <div className="absolute top-full left-0 w-full bg-gray-800 p-2 shadow-lg text-xs grid grid-cols-3 gap-2 z-50">
          {/* อันดับ */}
          <div className="col-span-1">
            <h2 className="font-bold text-yellow-400">อันดับ</h2>
            <div className="bg-gray-600 px-2 py-1 rounded-md mt-1">: </div>
          </div>

          {/* ทรัพยากร */}
          <div className="col-span-1">
            <h2 className="font-bold text-yellow-400">ทรัพยากร</h2>
            <div className="grid grid-cols-1 gap-1 mt-1">
              {[
                "ท่อนไม้",
                "ถ่านหิน",
                "ทองดิบ",
                "เหล็ก",
                "หินใหญ่",
                "น้ำมันดิบ",
                "ปูน",
              ].map((item, index) => (
                <div key={index} className="bg-gray-600 px-2 py-1 rounded-md">
                  {item} XXXXXXX
                </div>
              ))}
            </div>
          </div>

          {/* สินค้า */}
          <div className="col-span-1">
            <h2 className="font-bold text-yellow-400">สินค้า</h2>
            <div className="grid grid-cols-1 gap-1 mt-1">
              {["ไม้แปรรูป", "น้ำมันดีเซล", "หิน", "ไฟฟ้า", "ทองแท่ง"].map(
                (item, index) => (
                  <div key={index} className="bg-gray-600 px-2 py-1 rounded-md">
                    {item} XXXXXXX
                  </div>
                )
              )}
            </div>
          </div>

          {/* โบนัสความเร็วการผลิต */}
          <div className="col-span-3">
            <h2 className="font-bold text-yellow-400">โบนัสความเร็วการผลิต</h2>
            <div className="grid grid-cols-5 gap-1 mt-1">
              {[
                "โรงงานไม้",
                "โรงงานหิน",
                "โรงงานไฟฟ้า",
                "โรงงานน้ำมัน",
                "โรงงานทอง",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-600 px-2 py-1 rounded-md text-center"
                >
                  {item} 0%
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
