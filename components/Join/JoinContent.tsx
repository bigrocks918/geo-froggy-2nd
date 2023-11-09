const JoinContent = () => {
  return (
    <div className="md:h-[1080px] sm:h-[2338px] bg-join bg-center bg-cover bg-no-repeat justify-center items-center">
      <div className="flex justify-center">
        {/* <div className="relative">
        <img src="/join.png" alt="img" className="w-full" /> */}
        {/* <div className="absolute w-full h-full flex flex-wrap py-20">
          <div className="w-full md:w-1/2 py-20 px-20">
          <div className="mx-auto w-full">
            <span className="flex text-[64px] font-semibold text-white font-inter py-2">
              Join Us
            </span>
            <span className="flex text-[24px] text-white py-2">
              We’d love to ave you! Join our network of Travellers and geography geeks
            </span>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="-mx-3 flex flex-wrap mt-10">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Last Name"
                      className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="guest" className="mb-3 block text-base font-medium text-white">
                  Email
                </label>
                <input
                  type="number"
                  name="guest"
                  id="guest"
                  placeholder="5"
                  min="0"
                  className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="guest" className="mb-3 block text-base font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="guest"
                  id="guest"
                  min="0"
                  className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div>
                <button className="mt-8 w-full text-[24px] hover:shadow-form rounded-md bg-[#84BF3F] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Send message
                </button>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-start-2 col-end-5 p-5">
                  <span className="flex justify-content items-center text-xl text-white">
                    Already have an accoun? Log in
                  </span>
                </div>
              </div>
          </form>
          </div>
          </div>
          <div className="w-full md:w-1/2 py-20 px-20">
            <div className="grid grid-rows-5">
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
              <div className="row-span-1">
                <span className="text-white font-semibold text-[64px] font-inter">
                  Our Winder, Your World
                </span>
              </div>
              <div className="row-span-1">
                <span className="text-white text-[24px] font-inter">
                  A diverse community of groups coming together to express the <br />
                  geography and diversity of the world{' '}
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex-grow p-20">
              <span className="flex text-[64px] text-white font-inter py-2">Join Us</span>
              <span className="flex text-[24px] text-white font-inter py-2">
                We’d love to ave you! Join our network of Travellers and geography geeks
              </span>
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="-mx-3 flex flex-wrap mt-10">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="fName"
                        className="font-inter mb-3 block text-base font-medium text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="First Name"
                        className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="lName"
                        className="font-inter mb-3 block text-base font-medium text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Last Name"
                        className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="guest" className="mb-3 block text-base font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="guest"
                    id="guest"
                    className="font-inter w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="font-inter mb-3 block text-base font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="guest"
                    id="guest"
                    className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div>
                  <button className="font-inter mt-8 w-full text-[24px] hover:shadow-form rounded-md bg-[#84BF3F] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Send message
                  </button>
                </div>
                <span className="p-2 text-center font-inter flex justify-content items-center ml-10 text-xl text-white">
                  Already have an accoun? Log in
                </span>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 justify-center items-center">
            <div className="flex flex-col-4 text-center my-4 lg:mt-[600px] md:mt-[550px] sm:mt-100">
              <span className="text-white font-semibold text-[64px] font-inter">
                Our Winder, Your World
              </span>
            </div>
            <br />
            <div className="flex justify-center">
              <span className="text-white text-[24px] font-inter text-center">
                A diverse community of groups coming together to express the geography and diversity
                of the world
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinContent;
