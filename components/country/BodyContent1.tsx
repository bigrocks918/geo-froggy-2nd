import MapContent from './MapContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import items from './CountryItem';
const BodyContent1 = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[74px] pl-[108px] pr-[102px] w-full">
        <div className="flex flex-wrap">
          <div className="md:w-3/4 sm:w-1/2 xs: w-full">
            <MapContent />
            {items.map((item, key) => (
              <div key={key} className="w-full bg-white mt-1 p-6">
                <p className="text-[36px] font-inter">{item.title}</p>
                <p className="text-[#737373]">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 md:pl-6 sm:w-1/2 xs: w-full">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent1;
