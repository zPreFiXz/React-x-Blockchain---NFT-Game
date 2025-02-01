import { useState } from "react";
import { Crown, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-[#1d2731] text-white relative p-2">
      {/* Navbar Section */}
      <div className="h-[50px] flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2 text-base font-semibold">
          <Crown className="text-yellow-400" size={20} />
          <span>KING OF ECONOMY</span>
        </div>

        {/* Middle Section */}
        <div className="items-center space-x-4">
          <div className="flex items-center text-yellow-400 text-lg font-semibold space-x-2">
            <span className="text-yellow-400 text-2xl">&#36;</span>
            <span>xxxxxx</span>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center relative"
        >
          <ChevronDown size={16} className={`${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Right Section */}
        <div>
          <button className="bg-red-500 p-1 rounded-full hover:bg-red-600">
            <LogOut className="text-white" size={18} />
          </button>
        </div>
      </div>

      {/* Expandable Section - Positioned Absolutely */}
      {isExpanded && (
        <div className="absolute top-full left-0 w-full bg-gray-800 p-2 rounded-md shadow-lg text-xs grid grid-cols-3 gap-2 z-50">
          {/* อันดับ */}
          <div className="col-span-1">
            <h2 className="font-bold text-yellow-400">อันดับ</h2>
            <div className="bg-gray-600 px-2 py-1 rounded-md mt-1">: </div>
          </div>

          {/* ทรัพยากร */}
          <div className="col-span-1">
            <h2 className="font-bold text-yellow-400">ทรัพยากร</h2>
            <div className="grid grid-cols-1 gap-1 mt-1">
              {['ท่อนไม้', 'ถ่านหิน', 'ทองดิบ', 'เหล็ก', 'หินใหญ่', 'น้ำมันดิบ', 'ปูน'].map((item, index) => (
                <div key={index} className="bg-gray-600 px-2 py-1 rounded-md">{item} XXXXXXX</div>
              ))}
            </div>
          </div>

          {/* สินค้า */}
          <div className="col-span-1">
            <h2 className="font-bold text-yellow-400">สินค้า</h2>
            <div className="grid grid-cols-1 gap-1 mt-1">
              {['ไม้แปรรูป', 'น้ำมันดีเซล', 'หิน', 'ไฟฟ้า', 'ทองแท่ง'].map((item, index) => (
                <div key={index} className="bg-gray-600 px-2 py-1 rounded-md">{item} XXXXXXX</div>
              ))}
            </div>
          </div>

          {/* โบนัสความเร็วการผลิต */}
          <div className="col-span-3">
            <h2 className="font-bold text-yellow-400">โบนัสความเร็วการผลิต</h2>
            <div className="grid grid-cols-5 gap-1 mt-1">
              {['โรงงานไม้', 'โรงงานหิน', 'โรงงานไฟฟ้า', 'โรงงานน้ำมัน', 'โรงงานทอง'].map((item, index) => (
                <div key={index} className="bg-gray-600 px-2 py-1 rounded-md text-center">{item} 0%</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
