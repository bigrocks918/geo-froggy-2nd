const DonateContent = () => {
  return (
    <div className="py-40 bg-white text-center">
      <p className="flex justify-center text-[70px] items-center font-inter">Donate Now</p>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-20 py-10 rounded">
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#84BF3F] text-white w-[137px] h-[64px]">
          <h1 className="text-2xl md:text-3xl font-inter">25$</h1>
        </button>
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#E8E8E8] text-white w-[137px] h-[64px]">
          <h1 className="text-2xl md:text-3xl font-inter">50$</h1>
        </button>
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#E8E8E8] text-white w-[137px] h-[64px]">
          <h1 className="text-2xl md:text-3xl font-inter">75$</h1>
        </button>
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#E8E8E8] text-white w-[137px] h-[64px]">
          <h1 className="text-2xl md:text-3xl font-inter">100$</h1>
        </button>
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#E8E8E8] text-white w-[137px] h-[64px]">
          <h1 className="text-2xl md:text-3xl font-inter">150$</h1>
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center bg-white gap-10 px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-10 rounded">
        <button className="flex justify-center items-center py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-full bg-[#195883] text-white w-[338px] h-[64px]">
          <h1 className="text-lg md:text-xl lg:text-3xl font-inter">Debit/Credit Card</h1>
        </button>
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#E8E8E8] text-white w-[137px] h-[64px]">
          <h1 className="text-lg md:text-xl lg:text-2xl font-inter">Paypal</h1>
        </button>
        <button className="flex justify-center items-center py-2 px-4 md:py-4 md:px-8 rounded-full bg-[#E8E8E8] text-white w-[137px] h-[64px]">
          <h1 className="text-lg md:text-xl lg:text-2xl">Stripe</h1>
        </button>
      </div>
      <div className="grid grid-cols-8 gap-8">
        <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-6 md:col-start-2 md:col-span-3">
          <div className="w-full sm:pl-4 sm:pr-4 md:pl-8 md:pr-8">
            <span className="flex text-[24px] text-[#4F545E] py-9 font-inter">
              You are donating as a guest or Log in
            </span>
            <div className="flex items-center py-9">
              <div className="mx-auto w-full">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1">
                      <div className="mb-5">
                        <label
                          htmlFor="fName"
                          className="text-start font-inter mb-3 block text-base text-xl text-[#07074D]"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-5">
                        <label
                          htmlFor="lName"
                          className="text-start font-inter mb-3 block text-base text-xl text-[#07074D]"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          className="font-inter w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="text-start font-inter mb-3 block text-base text-xl text-[#07074D]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="guest"
                      id="guest"
                      className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="text-start font-inter mb-3 block text-base text-xl text-[#07074D]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="guest"
                      id="guest"
                      className="h-[162px] h-[162px] w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-6 md:col-start-5 md:col-span-3">
          <div className="w-full sm:pl-4 sm:pr-4 md:pl-8 md:pr-8">
            <span className="flex text-[24px] text-[#4F545E] py-9 justify-center font-inter font-inter">
              Pay With Debit Card or Credit Card
            </span>
            <div className="flex items-center py-9">
              <div className="mx-auto w-full">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  {/* <div className="relative mb-5">
                                        <label
                                            htmlFor="guest"
                                            className="mb-3 block text-base text-xl text-[#07074D]"
                                        >
                                            Card number
                                        </label>
                                        <div className="relative  focus-within:text-gray-900 dark:focus-within:text-gray-800 ">

                                        <div aria-hidden="true" className="absolute inset-y-0 flex items-center px-4 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M26.6663 7.99992L5.33301 7.99992C4.59663 7.99992 3.99967 8.59687 3.99967 9.33325L3.99967 12.6666H27.9997L27.9997 9.33325C27.9997 8.59687 27.4027 7.99992 26.6663 7.99992ZM27.9997 15.3333H3.99968V22.6666C3.99968 23.403 4.59663 23.9999 5.33301 23.9999H26.6663C27.4027 23.9999 27.9997 23.403 27.9997 22.6666V15.3333ZM5.33301 5.33325L26.6663 5.33325C28.8755 5.33325 30.6663 7.12411 30.6663 9.33325L30.6663 22.6666C30.6663 24.8757 28.8755 26.6666 26.6663 26.6666L5.33301 26.6666C3.12387 26.6666 1.33301 24.8757 1.33301 22.6666L1.33301 9.33325C1.33301 7.12411 3.12387 5.33325 5.33301 5.33325Z" fill="black" />
                                            </svg>
                                        </div>
                                        <input
                                            type="number"
                                            name="guest"
                                            id="guest"
                                            min="0"
                                            className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                        </div>
                                    </div> */}
                  <label className="relative w-full flex flex-col">
                    <span className="mb-3 font-inter text-start">Card number</span>
                    <input
                      className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                      type="text"
                      name="card_number"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="absolute bottom-0 left-2 mb-4"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.6663 7.99992L5.33301 7.99992C4.59663 7.99992 3.99967 8.59687 3.99967 9.33325L3.99967 12.6666H27.9997L27.9997 9.33325C27.9997 8.59687 27.4027 7.99992 26.6663 7.99992ZM27.9997 15.3333H3.99968V22.6666C3.99968 23.403 4.59663 23.9999 5.33301 23.9999H26.6663C27.4027 23.9999 27.9997 23.403 27.9997 22.6666V15.3333ZM5.33301 5.33325L26.6663 5.33325C28.8755 5.33325 30.6663 7.12411 30.6663 9.33325L30.6663 22.6666C30.6663 24.8757 28.8755 26.6666 26.6663 26.6666L5.33301 26.6666C3.12387 26.6666 1.33301 24.8757 1.33301 22.6666L1.33301 9.33325C1.33301 7.12411 3.12387 5.33325 5.33301 5.33325Z"
                        fill="black"
                      />
                    </svg>
                  </label>
                  <div className="grid grid-cols-2 gap-8 py-4">
                    <div className="col-span-1">
                      {/* <div className="mb-5">
                                                <label
                                                    htmlFor="fName"
                                                    className="mb-3 block text-base text-xl text-[#07074D]"
                                                >
                                                    Expiary Date
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fName"
                                                    id="fName"
                                                    className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div> */}
                      {/* <label className="relative flex-1 flex flex-col">
                                                <span className="mb-3 font-inter text-start">Expire date</span>
                                                <input className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="text" name="expire_date" placeholder="MM/YY" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="absolute bottom-0 right-2 mb-4">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.33337C10.7367 1.33337 11.3337 1.93033 11.3337 2.66671V4.00004H20.667V2.66671C20.667 1.93033 21.2639 1.33337 22.0003 1.33337C22.7367 1.33337 23.3337 1.93033 23.3337 2.66671V4.03296C26.7025 4.36744 29.3337 7.20981 29.3337 10.6667V22.6667C29.3337 26.3486 26.3489 29.3334 22.667 29.3334H9.33366C5.65176 29.3334 2.66699 26.3486 2.66699 22.6667V10.6667C2.66699 7.20981 5.29811 4.36744 8.66699 4.03296V2.66671C8.66699 1.93033 9.26395 1.33337 10.0003 1.33337ZM5.56127 9.33337H26.4394C25.8903 7.77978 24.4086 6.66671 22.667 6.66671H9.33366C7.59203 6.66671 6.11038 7.77978 5.56127 9.33337ZM26.667 12H5.33366V22.6667C5.33366 24.8758 7.12452 26.6667 9.33366 26.6667H22.667C24.8761 26.6667 26.667 24.8758 26.667 22.6667V12Z" fill="black" />
                                                </svg>
                                            </label> */}
                      <label className="relative flex-1 flex flex-col">
                        <span className="font-bold mb-3">Expire date</span>
                        <input
                          className="h-[66px] rounded-md peer pl-12 pr-2 py-2 border border-[#e0e0e0] placeholder-gray-300"
                          type="text"
                          name="expire_date"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="absolute bottom-0 right-2 mb-4"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0003 1.33337C10.7367 1.33337 11.3337 1.93033 11.3337 2.66671V4.00004H20.667V2.66671C20.667 1.93033 21.2639 1.33337 22.0003 1.33337C22.7367 1.33337 23.3337 1.93033 23.3337 2.66671V4.03296C26.7025 4.36744 29.3337 7.20981 29.3337 10.6667V22.6667C29.3337 26.3486 26.3489 29.3334 22.667 29.3334H9.33366C5.65176 29.3334 2.66699 26.3486 2.66699 22.6667V10.6667C2.66699 7.20981 5.29811 4.36744 8.66699 4.03296V2.66671C8.66699 1.93033 9.26395 1.33337 10.0003 1.33337ZM5.56127 9.33337H26.4394C25.8903 7.77978 24.4086 6.66671 22.667 6.66671H9.33366C7.59203 6.66671 6.11038 7.77978 5.56127 9.33337ZM26.667 12H5.33366V22.6667C5.33366 24.8758 7.12452 26.6667 9.33366 26.6667H22.667C24.8761 26.6667 26.667 24.8758 26.667 22.6667V12Z"
                            fill="black"
                          />
                        </svg>
                      </label>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-5">
                        <label
                          htmlFor="lName"
                          className="text-start font-inter mb-3 block text-base text-xl text-[#07074D]"
                        >
                          CVC
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          className="w-full h-[66px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="text-start font-inter mb-3 block text-base text-xl text-[#07074D]"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="number"
                      name="guest"
                      id="guest"
                      min="0"
                      className="w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <button className="font-inter h-[66px] w-full hover:shadow-form rounded-md bg-[#84BF3F] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Donate $25
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <img alt="" src="/2.png" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonateContent;
