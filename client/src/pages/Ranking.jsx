const Ranking = () => {
  const rankings = [
    { rank: 1, name: "Noname 1", amount: "100M", average: "10%", medal: "🥇" },
    { rank: 2, name: "Noname 2", amount: "98M", average: "9.8%", medal: "🥈" },
    { rank: 3, name: "Noname 3", amount: "90M", average: "9%", medal: "🥉" },
    { rank: 4, name: "Noname 4", amount: "88M", average: "8.8%", medal: "" },
    { rank: 1, name: "Noname 1", amount: "100M", average: "10%", medal: "🥇" },
    { rank: 2, name: "Noname 2", amount: "98M", average: "9.8%", medal: "🥈" },
    { rank: 3, name: "Noname 3", amount: "90M", average: "9%", medal: "🥉" },
    { rank: 4, name: "Noname 4", amount: "88M", average: "8.8%", medal: "" },
    { rank: 1, name: "Noname 1", amount: "100M", average: "10%", medal: "🥇" },
    { rank: 2, name: "Noname 2", amount: "98M", average: "9.8%", medal: "🥈" },
    { rank: 3, name: "Noname 3", amount: "90M", average: "9%", medal: "🥉" },
    { rank: 4, name: "Noname 4", amount: "88M", average: "8.8%", medal: "" },
    { rank: 1, name: "Noname 1", amount: "100M", average: "10%", medal: "🥇" },
    { rank: 2, name: "Noname 2", amount: "98M", average: "9.8%", medal: "🥈" },
    { rank: 3, name: "Noname 3", amount: "90M", average: "9%", medal: "🥉" },
    { rank: 4, name: "Noname 4", amount: "88M", average: "8.8%", medal: "" },
    { rank: 1, name: "Noname 1", amount: "100M", average: "10%", medal: "🥇" },
    { rank: 2, name: "Noname 2", amount: "98M", average: "9.8%", medal: "🥈" },
    { rank: 3, name: "Noname 3", amount: "90M", average: "9%", medal: "🥉" },
    { rank: 4, name: "Noname 4", amount: "88M", average: "8.8%", medal: "" },
    { rank: 1, name: "Noname 1", amount: "100M", average: "10%", medal: "🥇" },
    { rank: 2, name: "Noname 2", amount: "98M", average: "9.8%", medal: "🥈" },
    { rank: 3, name: "Noname 3", amount: "90M", average: "9%", medal: "🥉" },
    { rank: 4, name: "Noname 4", amount: "88M", average: "8.8%", medal: "" },
  ];
  return (
    <div className=" min-h-screen w-screen bg-[url('/src/img/backgound.png')] bg-fixed text-white  flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="  h-[78vh] relative w-full bg-white/80 text-black rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">

        {/* Title Box */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#235789] text-white text-[2.5vw] px-6 py-2 rounded-md shadow-md">
          Ranking
        </div>
        {/* Category Tabs */}
        <div className=" w-[30%] bg-[#c5c5c5] text-black text-[1.5vw] rounded-t-lg  mt-4">
        <tr className="">
        <th className="p-2  hover:bg-[#235789] hover:text-white  cursor-pointer">เหรียญ</th>
        <th className="py-2 px-4  hover:bg-[#235789] hover:text-white  cursor-pointer">ไม้</th>
        <th className="py-2 px-4  hover:bg-[#235789] hover:text-white  cursor-pointer">ปูน</th>
        <th className="py-2 px-4  hover:bg-[#235789] hover:text-white  cursor-pointer">เหล็ก</th>
        <th className="p-2  hover:bg-[#235789] hover:text-white  cursor-pointer">ท่อนไม้</th>
      </tr>
        </div>
        <div className="truncate bg-white overflow-x-auto h-[60vh] overflow-y-auto mt-4 ">
          <table className="w-full  text-center  border-collapse">
            <thead>
              <tr className="sticky top-0 bg-[#235789] text-white  text-[1vw]">
                <th className="p-2">RANKING</th>
                <th className="p-2">CHARACTER NAME</th>
                <th className="p-2">AMOUNT</th>
                <th className="p-2">AVERAGE</th>
              </tr>
              {/* ต้องแก้ไข */}
              <tr className="sticky top-11 bg-gray-200 text-[1.5vw] md:text-base">
                <th className="p-2"></th>
                <th className="p-2">มูลค่าทรัพยากรทั้งหมด</th>
                <th className="p-2">1000M</th>
                <th className="p-2">100%</th>
              </tr>
            </thead>
            <tbody className="">
              {rankings.map((player, index) => (
                <tr
                  key={index}
                  className=" text-[1vw]"
                >
                  <td className="p-2">
                    {player.medal} {player.rank}
                  </td>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2">{player.amount} 💰</td>
                  <td className="p-2">{player.average}</td>
                </tr>
              ))}
            </tbody>
            <tr className="sticky bottom-0 bg-gray-200 text-[1.5vw] md:text-base">
                <th className="p-2">2</th>
                <th className="p-2">เราเอง</th>
                <th className="p-2">98M</th>
                <th className="p-2">100%</th>
              </tr>
          </table>

        </div>
        <p className="text-left  text-black">
      เกร็ดควมรู้ : การจัดอันดับจะรีทุกๆ ....{" "}
    </p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#235789] text-white py-2 px-6 rounded-lg text-[1.5vw] hover:bg-blue-700">
          คลิกเข้าเกม
        </button>
      </div>
    </div>
  );
}
export default Ranking
