import Video from '../Video';

const AboutContent = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="my-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="col-span-1 relative">
              <img alt="img" src="/a.png" className="w-full h-full rounded-2xl" />
              <div className="absolute bottom-2 mx-2 bg-white rounded-2xl border p-3">
                <p className="text-[42px] text-[#646464] font-inter">Country</p>
                <p className="text-[18px] text-[#646464] font-inter">
                  We will offer various city related tours and surrounding areas along with
                  information. We will offer various city related tours.
                </p>
              </div>
            </div>
            <div className="col-span-1 relative">
              <img alt="img" src="/a.png" className="w-full h-full rounded-2xl" />
              <div className="absolute bottom-2 mx-2 bg-white rounded-2xl border p-3">
                <p className="text-[42px] text-[#646464] font-inter">Search</p>
                <p className="text-[18px] text-[#646464] font-inter">
                  We will offer various city related tours and surrounding areas along with
                  information. We will offer various city related tours.
                </p>
              </div>
            </div>
            <div className="col-span-1 relative">
              <img alt="img" src="/a.png" className="w-full h-full rounded-2xl" />
              <div className="absolute bottom-2 mx-2 bg-white rounded-2xl border p-3">
                <p className="text-[42px] text-[#646464] font-inter">Situational</p>
                <p className="text-[18px] text-[#646464] font-inter">
                  We will offer various city related tours and surrounding areas along with
                  information. We will offer various city related tours.
                </p>
              </div>
            </div>
            <div className="col-span-1 relative">
              <img alt="img" src="/a.png" className="w-full h-full rounded-2xl" />
              <div className="absolute bottom-2 mx-2 bg-white rounded-2xl border p-3">
                <p className="text-[42px] text-[#646464] font-inter">Travel</p>
                <p className="text-[18px] text-[#646464] font-inter">
                  We will offer various city related tours and surrounding areas along with
                  information. We will offer various city related tours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <Video />
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
