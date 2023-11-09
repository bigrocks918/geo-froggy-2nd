const Main3 = () => {
  return (
    <div className="bg-about min-h-[501px] flex justify-center items-center">
      <div className="mx-3 container grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <p className="text-[64px] text-white font-inter mb-5">Who we are</p>
          <p className="text-[16px] text-[#D1D1D1] font-inter mb-5">
            We will offer various city related tours (and surrounding areas) along with information
            on Transportation, Accommodations, Medellin Travel Blog, Food, Safety. We will offer
            various city related tours (and surrounding areas) along with information on
            Transportation, Accommodations, Medellin Travel Blog, Food, Safety. We will offer
            various city related tours (and surrounding areas) along with information on
            Transportation, Accommodations, Medellin Travel Blog, Food, Safety
          </p>
          <button className="mt-5 font-inter rounded-[30px] px-10 py-4 bg-[#269938] text-xl text-white">
            Join Us
          </button>
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-2">
            <div className="row-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <p className="text-[78px] font-inter text-white text-center">5M</p>
                  <p className="text-[18px] font-inter text-white text-center">Total users</p>
                </div>
                <div className="col-span-1">
                  <p className="text-[78px] font-inter text-white text-center">14K</p>
                  <p className="text-[18px] font-inter text-white text-center">New Places</p>
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <p className="text-[78px] font-inter text-white text-center">147K</p>
                  <p className="text-[18px] font-inter text-white text-center">Customer Reviews</p>
                </div>
                <div className="col-span-1">
                  <p className="text-[78px] font-inter text-white text-center">100+</p>
                  <p className="text-[18px] font-inter text-white text-center">Awards won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
