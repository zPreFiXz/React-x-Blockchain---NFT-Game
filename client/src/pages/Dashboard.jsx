import loginBackground from "../assets/images/loginBackground.png";

const Dashboard = () => {
  return (
    <div className=" flex justify-center">
      <img src={loginBackground} className="fixed w-full h-screen" />
      <div className="absolute flex gap-[31.5px] w-full pl-[55.5px] pr-[56.25px] mt-[133.5px]">
        <div className="w-[833.25px] h-[645px] rounded-[15px] bg-white">
          <p className="mt-[19.5px] ml-[37.5px] text-black text-4xl font-bold">
            My assets
          </p>
          {/* Factory */}
          <div className="flex items-center mt-[21.75px] ml-[45px]">
            <div className="w-[164.25px] h-[161.25px] bg-[#d9d9d9]"></div>
            <svg
              width={81}
              height={29}
              viewBox="0 0 81 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="ml-[26.98px] mr-[31.48px]"
            >
              <path
                d="M80.092 15.7008C80.8243 14.9686 80.8243 13.7814 80.092 13.0492L68.1596 1.11675C67.4274 0.384515 66.2402 0.384515 65.508 1.11675C64.7757 1.84898 64.7757 3.03617 65.508 3.7684L76.1146 14.375L65.508 24.9816C64.7757 25.7138 64.7757 26.901 65.508 27.6333C66.2402 28.3655 67.4274 28.3655 68.1596 27.6333L80.092 15.7008ZM0.733765 16.25H78.7662V12.5H0.733765V16.25Z"
                fill="black"
              />
            </svg>
            <div className="w-[164.25px] h-[161.25px] bg-[#d9d9d9]" />
            <div className="ml-[30.75px]">
              <p className="text-black text-2xl">โรงงาน :</p>
              <p className="text-black text-2xl">ขนาด :</p>
              <p className="text-black text-2xl">เวลาที่เหลือ :</p>
              <p className="text-black text-2xl">วัตถุดิบที่ใช้สร้าง : 32/50</p>
              <p className="text-black text-2xl">ผลผลิต: 5/10</p>
            </div>
          </div>
          {/* Factory */}
          <div className="flex items-center mt-[21.75px] ml-[45px]">
            <div className="w-[164.25px] h-[161.25px] bg-[#d9d9d9]"></div>
            <svg
              width={81}
              height={29}
              viewBox="0 0 81 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="ml-[26.98px] mr-[31.48px]"
            >
              <path
                d="M80.092 15.7008C80.8243 14.9686 80.8243 13.7814 80.092 13.0492L68.1596 1.11675C67.4274 0.384515 66.2402 0.384515 65.508 1.11675C64.7757 1.84898 64.7757 3.03617 65.508 3.7684L76.1146 14.375L65.508 24.9816C64.7757 25.7138 64.7757 26.901 65.508 27.6333C66.2402 28.3655 67.4274 28.3655 68.1596 27.6333L80.092 15.7008ZM0.733765 16.25H78.7662V12.5H0.733765V16.25Z"
                fill="black"
              />
            </svg>
            <div className="w-[164.25px] h-[161.25px] bg-[#d9d9d9]" />
            <div className="ml-[30.75px]">
              <p className="text-black text-2xl">โรงงาน :</p>
              <p className="text-black text-2xl">ขนาด :</p>
              <p className="text-black text-2xl">เวลาที่เหลือ :</p>
              <p className="text-black text-2xl">วัตถุดิบที่ใช้สร้าง : 32/50</p>
              <p className="text-black text-2xl">ผลผลิต: 5/10</p>
            </div>
          </div>
          {/* Factory */}
          <div className="flex mt-[21.75px] ml-[45px]">
            <div className="w-[164.25px] h-[161.25px] bg-[#d9d9d9]"></div>
            <div className="flex items-center">
              <svg
                width={81}
                height={29}
                viewBox="0 0 81 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="ml-[26.98px] mr-[31.48px]"
              >
                <path
                  d="M80.092 15.7008C80.8243 14.9686 80.8243 13.7814 80.092 13.0492L68.1596 1.11675C67.4274 0.384515 66.2402 0.384515 65.508 1.11675C64.7757 1.84898 64.7757 3.03617 65.508 3.7684L76.1146 14.375L65.508 24.9816C64.7757 25.7138 64.7757 26.901 65.508 27.6333C66.2402 28.3655 67.4274 28.3655 68.1596 27.6333L80.092 15.7008ZM0.733765 16.25H78.7662V12.5H0.733765V16.25Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="w-[164.25px] h-[161.25px] bg-[#d9d9d9]" />
            <div className="ml-[30.75px]">
              <p className="text-black text-2xl">ว่าง</p>
            </div>
          </div>
        </div>
        <div className="w-[463.5px] h-[645px] rounded-[15px] bg-white">
          <p className=" mt-[19.5px] ml-[24.75px] text-black text-4xl font-bold">
            Groverment market
          </p>
          <p className="mt-[24.75px] ml-[33.75px] text-black text-2xl font-bold ">
            รายการสินค้า
          </p>
          <div className="flex items-center mt-[28.75px] ml-[44.25px]">
            <p className="text-black text-lg">ไม้แผ่น</p>
            <p className="text-black text-lg ml-[75.75px] mr-[74.75px]">
              x1 / 100 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <div className="flex items-center mt-[11.25px] ml-[44.25px]">
            <p className="text-black text-lg">ปูน</p>
            <p className="text-black text-lg ml-[104.25px] mr-[74.75px]">
              x1 / 300 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <div className="flex items-center mt-[11.25px] ml-[44.25px]">
            <p className="text-black text-lg">เหล็ก</p>
            <p className="text-black text-lg ml-[89.25px] mr-[74.75px]">
              x1 / 500 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <div className="flex items-center mt-[11.25px] ml-[44.25px]">
            <p className="text-black text-lg">ท่อนไม้</p>
            <p className="text-black text-lg ml-[78px] mr-[84.75px]">
              x1 / 75 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <div className="flex items-center mt-[11.25px] ml-[44.25px]">
            <p className="text-black text-lg">หินใหญ่</p>
            <p className="text-black text-lg ml-[73.5px] mr-[74.75px]">
              x1 / 100 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <div className="flex items-center mt-[11.25px] ml-[44.25px]">
            <p className="text-black text-lg">ถ่านหิน</p>
            <p className="text-black text-lg ml-[76.5px] mr-[76px]">
              x1 / 150 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <div className="flex items-center mt-[11.25px] ml-[44.25px]">
            <p className="text-black text-lg">น้ำมันดิบ</p>
            <p className="text-black text-lg ml-[65px] mr-[73px]">
              x1 / 200 บาท
            </p>
            <button className="w-[48.94px] h-[23.06px] rounded-[8.44px] bg-[#235789] cursor-pointer">
              <p className="text-white text-[14.06px]">ซื้อ</p>
            </button>
          </div>
          <button className="flex justify-center items-center w-[195px] gap-[7.5px] px-[42.75px] py-[14.25px] mt-[104.25px] ml-[246px] rounded-[11.25px] bg-[#127735] cursor-pointer">
            <p className="text-white text-[18.75px]">ขายสินค้า</p>
          </button>
        </div>
      </div>
      <div className="absolute flex gap-[31.5px] mt-[866.25px]">
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
