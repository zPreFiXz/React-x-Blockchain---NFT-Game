import { useState } from "react";
import loginBackground from "../assets/loginBackground.png";
import Chiang_mai from "../assets/Chiang_mai.png";
import Bangkok from "../assets/Bangkok.png";
import Esan from "../assets/Esan.png";
import rayong from "../assets/rayong.png";
import Stun from "../assets/Stun.png";
import { Link } from "react-router-dom";

const Regions = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (regionName) => {
    setSelectedRegion(regionName);
  };

  const handleSelectRegion = async (regionName) => {
    try {
      const res = await fetch("http://localhost:3000/selecteRegion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerId: localStorage.getItem("peerId"),
          region: regionName,
        }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <img
        src={loginBackground}
        className="absolute w-full h-screen object-cover"
        alt="Background"
      />

      <div
        className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "100%",
          maxWidth: "980px",
          height: "500px",
          maxHeight: "550px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        {/* หัวข้อ */}
        <h1 className="text-3xl font-bold mb-4">Location’s Factory</h1>

        {/* คำอธิบาย */}
        <p className="text-center text-base text-gray-700 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>

        {/* ภาพของภูมิภาค */}
        <div className="flex justify-center items-center space-x-4">
          {/* ภาคเหนือ */}
          <div
            className="text-center"
            onClick={() => handleRegionClick("ภาคเหนือ")}
          >
            <img
              src={Chiang_mai}
              alt="ภาคเหนือ"
              className="w-32 h-24 rounded-xl border-4 border-green-500 object-cover cursor-pointer"
            />
            <p className="mt-2 font-medium">ภาคเหนือ</p>
          </div>

          {/* ภาคกลาง */}
          <div
            className="text-center"
            onClick={() => handleRegionClick("ภาคกลาง")}
          >
            <img
              src={Bangkok}
              alt="ภาคกลาง"
              className="w-32 h-24 rounded-xl border-4 border-gray-500 object-cover cursor-pointer"
            />
            <p className="mt-2 font-medium">ภาคกลาง</p>
          </div>

          {/* ภาคตะวันออก */}
          <div
            className="text-center"
            onClick={() => handleRegionClick("ภาคตะวันออก")}
          >
            <img
              src={rayong}
              alt="ภาคตะวันออก"
              className="w-32 h-24 rounded-xl border-4 border-blue-500 object-cover cursor-pointer"
            />
            <p className="mt-2 font-medium">ภาคตะวันออก</p>
          </div>

          {/* ภาคอีสาน */}
          <div
            className="text-center"
            onClick={() => handleRegionClick("ภาคอีสาน")}
          >
            <img
              src={Esan}
              alt="ภาคอีสาน"
              className="w-32 h-24 rounded-xl border-4 border-yellow-500 object-cover cursor-pointer"
            />
            <p className="mt-2 font-medium">ภาคอีสาน</p>
          </div>

          {/* ภาคใต้ */}
          <div
            className="text-center"
            onClick={() => handleRegionClick("ภาคใต้")}
          >
            <img
              src={Stun}
              alt="ภาคใต้"
              className="w-32 h-24 rounded-xl border-4 border-blue-300 object-cover cursor-pointer"
            />
            <p className="mt-2 font-medium">ภาคใต้</p>
          </div>
        </div>

        {/* แสดงผลเมื่อเลือกภูมิภาค */}
        {selectedRegion && (
          <div className="mt-4 text-xl font-bold text-blue-600">
            คุณเลือก: {selectedRegion}
          </div>
        )}
        {/* ปุ่ม Next */}
        <Link
          to="/dashboard"
          className="bottom-4 right-4 left-4 flex justify-center mt-[50px]"
          onClick={() => handleSelectRegion(selectedRegion)}
        >
          {selectedRegion ? (
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 cursor-pointer">
              Next
            </button>
          ) : (
            <></>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Regions;
