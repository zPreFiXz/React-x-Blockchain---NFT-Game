import { Crown, LogOut } from "lucide-react";

const Progress = ({ value }) => {
  return (
    <div className="w-40 bg-gray-700 rounded-full h-2">
      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-[#1d2731] flex items-center px-6 justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-2 text-white text-lg font-semibold">
        <Crown className="text-yellow-400" size={24} />
        <span>KING OF ECONOMY</span>
      </div>
      
      {/* Middle Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-yellow-400 text-lg font-semibold space-x-2">
          <span className="text-yellow-400 text-2xl">&#36;</span>
          <span>XXXXXXX</span>
        </div>
        <Progress value={60} />
      </div>
      
      {/* Right Section */}
      <div>
        <button className="bg-red-500 p-2 rounded-full hover:bg-red-600">
          <LogOut className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
