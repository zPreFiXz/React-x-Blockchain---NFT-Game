import { Link } from "react-router";
import loginBackground from "../assets/loginBackground.png";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [playerData, setPlayerData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/account/${localStorage.getItem('peerId')}`);  
        if (!res.ok) {
          throw new Error('Network response was not ok');  
        }

        const result = await res.json();  
        setPlayerData(result);

      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [])

  return (
    <div className=" flex justify-center">
      <img src={loginBackground} className="fixed w-full h-screen" />
      <div className="absolute flex justify-center gap-[31.5px] w-full mt-[133.5px]">
        {/* My assets */}
        <div className="w-[833.25px] h-[645px] rounded-[15px] bg-white">
          <p className="mt-[19.5px] ml-[37.5px] text-black text-4xl font-bold">
            My assets {playerData ? playerData.region : ''}
          </p>
          {/* Factory */}
          <div className="flex items-center mt-[21.75px] ml-[45px]">
            <Link
              to="/factory"
              className="w-[155.07px] h-[123.27px] rounded-[30px] bg-[#d9d9d9]"
            ></Link>
            <Link to="/factory" className="ml-[50px] text-2xl">
              คลิกเพื่อสร้างโรงงานแรก
            </Link>
          </div>
        </div>
        {/* Groverment market */}
        <div className="w-[463.5px] h-[645px] rounded-[15px] bg-white">
          <p className=" mt-[19.5px] ml-[24.75px] text-black text-4xl font-bold">
            Groverment market
          </p>
          <p className="mt-[24.75px] ml-[33.75px] mb-[17.5px] text-black text-2xl font-bold ">
            รายการสินค้า
          </p>
          <div className="flex flex-col items-center">
            {[
              { name: "ไม้แผ่น", price: 100 },
              { name: "ปูน", price: 300 },
              { name: "เหล็ก", price: 500 },
              { name: "ท่อนไม้", price: 75 },
              { name: "หินใหญ่", price: 100 },
              { name: "ถ่านหิน", price: 150 },
              { name: "น้ำมันดิบ", price: 200 },
              { name: "แร่ทองดิบ", price: 500 },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 w-[350px] items-center mt-[11.25px]"
              >
                <p className="text-black text-lg">{item.name}</p>
                <p className="text-black text-lg text-center">
                  x1 / {item.price} บาท
                </p>
                <button className="w-[50px] h-[25px] ml-auto rounded-[8px] bg-[#235789] cursor-pointer">
                  <p className="text-white text-[14px]">ซื้อ</p>
                </button>
              </div>
            ))}
          </div>
          <button className="flex justify-center items-center w-[195px] gap-[7.5px] px-[42.75px] py-[14.25px] mt-[104.25px] ml-[246px] rounded-[11.25px] bg-[#127735] cursor-pointer">
            <p className="text-white text-[18.75px]">ขายสินค้า</p>
          </button>
        </div>
      </div>
      <div className="absolute flex gap-[31.5px] mt-[866.25px]">
        {/* Auction */}
        <div className="w-[833.25px] h-[766.5px] rounded-[11.25px] bg-white">
          <p className="mt-[23.25px] ml-[37.5px] text-black text-4xl font-bold">
            Auction
          </p>
          <div className="flex mt-[46.75px]">
            <div className="w-[165.58px] h-[161.25px] ml-[45px] mr-[34.02px] bg-[#d9d9d9]"></div>
            <div>
              <p className="text-black text-2xl font-bold">ที่ดินพื้นที่โล่ง</p>
              <p className="text-black text-2xl">ภาค : เหนือ</p>
              <p className="text-black text-2xl">ราคาเปิด : 100,000</p>
            </div>
          </div>
          <svg
            width={761}
            height={2}
            viewBox="0 0 761 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="mt-[44.62px] mx-auto"
          >
            <line
              x1="0.498329"
              y1="0.75"
              x2="760.252"
              y2="0.75"
              stroke="black"
              strokeOpacity="0.42"
              strokeWidth="0.75"
            />
          </svg>
          <div className="flex justify-between items-center mt-[31.87px] ml-[45px] mr-[41.75px]">
            <p className="text-black text-2xl font-bold">
              ผู้ให้ราคาประมูลสูงที่สุดตอนนี้
            </p>
            <p className="text-black/[0.56] text-[18.75px]">
              ปิดการประมูลในอีก 59:10
            </p>
          </div>
          <div className="flex justify-between items-center mt-[24.25px] ml-[56.34px] mr-[49.57px]">
            <div className="flex items-center">
              <div className="w-[58.97px] h-[58.5px] rounded-[44.63px] bg-[#d9d9d9]" />
              <p className="ml-[12.1px] text-black text-2xl font-bold">
                Dummy-player
              </p>
            </div>
            <p className="text-black text-2xl font-bold text-left">500,000</p>
          </div>
          <svg
            width={761}
            height={2}
            viewBox="0 0 761 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="mt-[37.5px] mx-auto"
          >
            <line
              x1="0.5"
              y1="0.875"
              x2="760.25"
              y2="0.875"
              stroke="black"
              strokeOpacity="0.42"
              strokeWidth="0.75"
            />
          </svg>
        </div>
        <div className="w-[466.5px] h-[1113px] mb-[43.5px] rounded-[11.25px] bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
