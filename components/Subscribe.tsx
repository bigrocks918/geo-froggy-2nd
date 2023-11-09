const Subscribe = () => {
  return (
    <div className="min-h-[400px] bg-[#245073] backdrop-blur-[25px] flex justify-center items-center">
      <div className="mx-3 container mt-10 mb-3 text-center">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="flex text-5xl text-white font-inter">Subscribe GeoFroggy</p>
            <p className="flex text-[32px] text-white font-inter">get latest news and updates</p>
            <p className="flex text-base text-white font-inter">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Enter your Email"
              className="font-inter w-full max-w-[600px] h-[66px] rounded-md bg-white bg-opacity-20 py-3 px-6 text-base font-medium placeholder:text-white text-white outline-none"
            />
            <br />
            <button className="font-inter mt-8 text-xl hover:shadow-form rounded-md bg-[#000] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
