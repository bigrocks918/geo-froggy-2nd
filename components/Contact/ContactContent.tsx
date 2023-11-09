import Subscribe from '../Subscribe';

const ContactContent = () => {
  return (
    <div className="bg-white">
      <div className="w-full">
        <div className="flex flex-wrap text-center py-10">
          <div className="w-full md:w-1/2 flex justify-center">
            {/* <div className="grid grid-cols-4 gap-2"> */}
            {/* <div className="col-start-2 col-end-4"> */}
            <div className="">
              <span className="flex text-[64px] text-[#4F545E] font-inter">Leave us a note</span>
              <span className="flex text-[24px] text-[#4F545E] py-2 font-inter">
                We would love to hear from you!
              </span>
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="flex flex-wrap mt-20">
                  <div className="w-full px-1 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="fName"
                        className="text-start font-inter mb-3 block text-base font-medium text-[#07074D]"
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
                  <div className="w-full px-1 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="lName"
                        className="text-start font-inter mb-3 block text-base font-medium text-[#07074D]"
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
                <div className="mb-5 px-1">
                  <label
                    htmlFor="guest"
                    className="text-start font-inter mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="guest"
                    id="guest"
                    min="0"
                    className="font-inter w-full h-[66px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5 px-1">
                  <label
                    htmlFor="guest"
                    className="text-start font-inter mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="guest"
                    id="guest"
                    min="0"
                    className="w-full h-[160px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="px-1 py-2">
                  <button className="font-inter mt-8 w-full text-xl hover:shadow-form rounded-md bg-[#195883] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Send message
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-map w-full h-full min-h-[400px] bg-center bg-cover flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F9FF] w-full">
        <div className="flex flex-wrap justify-center">
          <div className=" py-20 flex justify-center">
            <div className="w-[300px]">
              <div className="mb-[54px]">
                <div className="bg-[#195883] rounded-[16px] p-3 w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.3611 6.82988C12.5394 6.00818 11.2992 5.77165 10.2327 6.23325C6.45192 7.86971 4.923 11.7448 6.8401 14.7964C8.31024 17.1365 10.377 19.8842 13.2464 22.7536C16.1158 25.623 18.8635 27.6898 21.2036 29.1599C24.2552 31.077 28.1303 29.5481 29.7668 25.7673C30.2284 24.7009 29.9918 23.4607 29.1701 22.639L28.6532 22.122C27.456 20.9248 25.6241 20.6346 24.1155 21.4032L22.1955 22.3813C20.4788 23.2558 18.3944 22.9256 17.0321 21.5633L14.4367 18.9679C13.0745 17.6057 12.7442 15.5212 13.6187 13.8046L14.5969 11.8846C15.3654 10.3759 15.0752 8.544 13.878 7.34679L13.3611 6.82988ZM15.4824 4.70856L15.9993 5.22547C18.1155 7.34164 18.6284 10.5797 17.27 13.2463L16.2919 15.1663C16.0073 15.725 16.1147 16.4033 16.5581 16.8466L19.1534 19.442C19.5967 19.8853 20.2751 19.9927 20.8337 19.7082L22.7537 18.7301C25.4203 17.3716 28.6584 17.8846 30.7745 20.0007L31.2915 20.5176C32.9834 22.2095 33.4704 24.7631 32.5199 26.959C30.3656 31.9363 24.6371 34.8598 19.6077 31.7002C17.0899 30.1184 14.1635 27.9133 11.1251 24.8749C8.08669 21.8365 5.88162 18.9101 4.29981 16.3923C1.14017 11.3629 4.06372 5.63444 9.04103 3.48008C11.2369 2.52964 13.7905 3.01665 15.4824 4.70856Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[26px]">Call Us</div>
              <div className="text-[24px] text-[#4F545E] font-inter">Mon-Fri 8am to 5pm</div>
              <div className="mt-8 text-[24px] text-[#4F545E] font-inter">+1 654 456 7899</div>
            </div>
          </div>
          <div className=" py-20 flex justify-center">
            <div className="w-[300px]">
              <div className="mb-[54px]">
                <div className="bg-[#195883] rounded-[16px] p-3 w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.3611 6.82988C12.5394 6.00818 11.2992 5.77165 10.2327 6.23325C6.45192 7.86971 4.923 11.7448 6.8401 14.7964C8.31024 17.1365 10.377 19.8842 13.2464 22.7536C16.1158 25.623 18.8635 27.6898 21.2036 29.1599C24.2552 31.077 28.1303 29.5481 29.7668 25.7673C30.2284 24.7009 29.9918 23.4607 29.1701 22.639L28.6532 22.122C27.456 20.9248 25.6241 20.6346 24.1155 21.4032L22.1955 22.3813C20.4788 23.2558 18.3944 22.9256 17.0321 21.5633L14.4367 18.9679C13.0745 17.6057 12.7442 15.5212 13.6187 13.8046L14.5969 11.8846C15.3654 10.3759 15.0752 8.544 13.878 7.34679L13.3611 6.82988ZM15.4824 4.70856L15.9993 5.22547C18.1155 7.34164 18.6284 10.5797 17.27 13.2463L16.2919 15.1663C16.0073 15.725 16.1147 16.4033 16.5581 16.8466L19.1534 19.442C19.5967 19.8853 20.2751 19.9927 20.8337 19.7082L22.7537 18.7301C25.4203 17.3716 28.6584 17.8846 30.7745 20.0007L31.2915 20.5176C32.9834 22.2095 33.4704 24.7631 32.5199 26.959C30.3656 31.9363 24.6371 34.8598 19.6077 31.7002C17.0899 30.1184 14.1635 27.9133 11.1251 24.8749C8.08669 21.8365 5.88162 18.9101 4.29981 16.3923C1.14017 11.3629 4.06372 5.63444 9.04103 3.48008C11.2369 2.52964 13.7905 3.01665 15.4824 4.70856Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[26px] font-inter">Send Message</div>
              <div className="text-[22px] text-[#4F545E] font-inter">
                Speak to our friendly Team
              </div>
              <div className="mt-8 text-[24px] text-[#4F545E] font-inter">
                contact@geofroggy.com
              </div>
            </div>
          </div>
          <div className=" py-20 flex justify-center">
            <div className="w-[300px]">
              <div className="mb-[54px]">
                <div className="bg-[#195883] rounded-[16px] p-3 w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.3611 6.82988C12.5394 6.00818 11.2992 5.77165 10.2327 6.23325C6.45192 7.86971 4.923 11.7448 6.8401 14.7964C8.31024 17.1365 10.377 19.8842 13.2464 22.7536C16.1158 25.623 18.8635 27.6898 21.2036 29.1599C24.2552 31.077 28.1303 29.5481 29.7668 25.7673C30.2284 24.7009 29.9918 23.4607 29.1701 22.639L28.6532 22.122C27.456 20.9248 25.6241 20.6346 24.1155 21.4032L22.1955 22.3813C20.4788 23.2558 18.3944 22.9256 17.0321 21.5633L14.4367 18.9679C13.0745 17.6057 12.7442 15.5212 13.6187 13.8046L14.5969 11.8846C15.3654 10.3759 15.0752 8.544 13.878 7.34679L13.3611 6.82988ZM15.4824 4.70856L15.9993 5.22547C18.1155 7.34164 18.6284 10.5797 17.27 13.2463L16.2919 15.1663C16.0073 15.725 16.1147 16.4033 16.5581 16.8466L19.1534 19.442C19.5967 19.8853 20.2751 19.9927 20.8337 19.7082L22.7537 18.7301C25.4203 17.3716 28.6584 17.8846 30.7745 20.0007L31.2915 20.5176C32.9834 22.2095 33.4704 24.7631 32.5199 26.959C30.3656 31.9363 24.6371 34.8598 19.6077 31.7002C17.0899 30.1184 14.1635 27.9133 11.1251 24.8749C8.08669 21.8365 5.88162 18.9101 4.29981 16.3923C1.14017 11.3629 4.06372 5.63444 9.04103 3.48008C11.2369 2.52964 13.7905 3.01665 15.4824 4.70856Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[26px] font-inter">Visit Us</div>
              <div className="text-[24px] text-[#4F545E] font-inter">Visit our Office HQ</div>
              <div className="mt-8 text-[24px] text-[#4F545E] font-inter">
                2164 Shingleton Road. Kentwood, MI, USA
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};
export default ContactContent;
