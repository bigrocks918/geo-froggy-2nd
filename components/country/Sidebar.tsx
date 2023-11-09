const Sidebar = () => {
  return (
    <>
      <div className="flex justify-between p-6">
        <span className="font-inter">Year</span>
        <select className="bg-transparent">
          <option value="2020 font-inter">2020</option>
        </select>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Map Reference</p>
        <p className="text-[32px] font-inter">Asia</p>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Irrigated Land</p>
        <p className="">
          <span className="text-[32px] font-inter">32,080</span>
          <span className="text-[#A7A7A7] ml-2 font-inter">sq km</span>
        </p>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Area</p>
        <div className="flex mb-1">
          <span className="w-[50px] text-[#A7A7A7] font-inter">Total</span>
          <div className="flex-grow bg-[#D3FAD9] rounded-[8px] p-1 pl-3">
            <span className="font-inter">652,230</span>
            <span className="text-[#A7A7A7] ml-2 font-inter">sq km</span>
          </div>
        </div>
        <div className="flex mb-1">
          <span className="w-[50px] text-[#A7A7A7] font-inter">Land</span>
          <div className="flex-grow bg-[#FFF8E1] rounded-[8px] p-1 pl-3">
            <span className="font-inter">652,230</span>
            <span className="text-[#A7A7A7] ml-2 font-inter">sq km</span>
          </div>
        </div>
        <div className="flex">
          <span className="w-[50px] text-[#A7A7A7] font-inter">Water</span>
          <div className="flex-grow bg-[#E2EEFF] rounded-[8px] p-1 pl-3">
            <span className="">0</span>
            <span className="text-[#A7A7A7] ml-2 font-inter">sq km</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Coastline</p>
        <p className="">
          <span className="text-[32px] font-inter">0</span>
          <span className="text-[#A7A7A7] ml-2 font-inter">km</span>
        </p>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Geographical Coordinates</p>
        <p className="">
          <span className="font-inter">33 00 N, 65 00 E</span>
        </p>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Terrain</p>
        <p className="font-inter">
          <span className="font-inter">Mostly rugged mountains; plains in north and southwest</span>
        </p>
      </div>
      <div className="bg-white p-6 mb-1">
        <p className="text-[#195883] font-inter">Elevation</p>
        <div className="flex">
          <span className="text-[#A7A7A7] font-inter">Mean Elevation</span>
          <span className="ml-2 font-inter">1,884 m</span>
        </div>
        <div className="flex">
          <span className="text-[#A7A7A7] font-inter">Lowest Point</span>
          <span className="ml-2 font-inter">Amu Darya 258 m</span>
        </div>
        <div className="flex">
          <span className="text-[#A7A7A7] font-inter">Highest Point</span>
          <span className="ml-2 font-inter">Noshak 7,492 m</span>
        </div>
      </div>
      <div>
        <img alt="bg" src="/cd167d4012bbf5d591f399eb7c059955.png"></img>
      </div>
    </>
  );
};
export default Sidebar;
