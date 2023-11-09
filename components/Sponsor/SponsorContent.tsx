import Meet from '../Meet';
import Question from '../Question';
const SponsorContent = () => {
  return (
    <div>
      <div className="row-span-1">
        <div className="flex justify-center">
          <span className="font-inter text-[92px] max-w-[1000px] flex flex-wrap justify-center items-center text-center">
            Great Futures are built with a small charity
            <p className="font-inter text-[24px] text-[#646464] max-w-[550px] text-center">
              We’d love to ave you! Join our network of Travellers and geography geeks
            </p>
          </span>
          {/* <p className="font-inter text-[24px] text-[#646464] max-w-[1000px] text-center">
            We’d love to ave you! Join our network of Travellers and geography geeks
          </p> */}
        </div>
        <div className="flex flex-wrap justify-center items-center text-center mt-10">
          <div className="bg-[#195883] w-[211px] ml-15 h-[61px] text-center rounded-[50px] mr-20">
            <span className="text-white p-2 text-[24px] justify-center items-center flex font-inter">
              Donate Now
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 px-4 md:px-8 lg:px-10 py-10 rounded">
        <div className="flex flex-wrap">
          <div className="grid grid-rows-3 gap-3">
            <div className="row-span-2">
              <div className="bg-[#0D2F46] w-[340px] h-[530px] rounded-[50px] flex flex-wrap">
                <div className="grid grid-rows-4">
                  <div className="row-span-1 p-8">
                    <span className="font-inter text-white text-[96px]">2k +</span>
                  </div>
                  <div className="row-span-1 p-8">
                    <span className="font-inter text-xl text-[#5491BA]">
                      Join our community for donating and be a part of a positive change in the
                      world. With over :
                    </span>
                  </div>
                  <div className="row-span-1 p-2">
                    <div className="bg-[#134668] rounded-[50px] h-[100px] flex flex-wrap">
                      {/* <div className="grid grid-rows-3">
                      <div className="row-start-2 row-end-3">
                        <span className="text-xl text-white p-4 text-left font-inter">
                          Donate Now
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 sm:w-full p-6 ">
                      <div className="grid grid-cols-3">
                        <div className="col-start-3 col-end-4">
                          <div className="w-12 h-12 rounded-[100px] bg-[#0D2F46]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <path
                                d="M26.9393 17.0607C26.3536 16.4749 26.3536 15.5251 26.9393 14.9393C27.5251 14.3536 28.4749 14.3536 29.0607 14.9393L37.0607 22.9393C37.6464 23.5251 37.6464 24.4749 37.0607 25.0607L29.0607 33.0607C28.4749 33.6464 27.5251 33.6464 26.9393 33.0607C26.3536 32.4749 26.3536 31.5251 26.9393 30.9393L32.3787 25.5H13C12.1716 25.5 11.5 24.8284 11.5 24C11.5 23.1716 12.1716 22.5 13 22.5H32.3787L26.9393 17.0607Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      <div className="flex grow justify-center items-center">
                        <div className="container flex ml-10">
                          <div className="grow h-14">
                            <p className="text-white font-inter text-xl mt-3">Donate Now</p>
                          </div>
                          <div className="grow 0"></div>
                          <div className="grow h-14">
                            <div className="w-12 h-12 rounded-[100px] bg-[#0D2F46]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                              >
                                <path
                                  d="M26.9393 17.0607C26.3536 16.4749 26.3536 15.5251 26.9393 14.9393C27.5251 14.3536 28.4749 14.3536 29.0607 14.9393L37.0607 22.9393C37.6464 23.5251 37.6464 24.4749 37.0607 25.0607L29.0607 33.0607C28.4749 33.6464 27.5251 33.6464 26.9393 33.0607C26.3536 32.4749 26.3536 31.5251 26.9393 30.9393L32.3787 25.5H13C12.1716 25.5 11.5 24.8284 11.5 24C11.5 23.1716 12.1716 22.5 13 22.5H32.3787L26.9393 17.0607Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className="bg-[#0D2F46] w-[340px] h-[190px] rounded-[50px] flex flex-wrap">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 mt-10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48 19C31.9837 19 19 31.9837 19 48C19 64.0163 31.9837 77 48 77C64.0163 77 77 64.0163 77 48C77 31.9837 64.0163 19 48 19ZM13 48C13 28.67 28.67 13 48 13C67.33 13 83 28.67 83 48C83 67.33 67.33 83 48 83C28.67 83 13 67.33 13 48Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.3992 37.235C39.6649 40.3072 37.1701 44.6282 36.3767 49.3983L34.6249 59.9296C33.7153 65.3985 40.0742 69.0698 44.3556 65.5476L52.6001 58.7648C56.3343 55.6927 58.8291 51.3716 59.6225 46.6016L61.3743 36.0702C62.284 30.6014 55.925 26.93 51.6437 30.4523L43.3992 37.235ZM48 42C44.6863 42 42 44.6863 42 48C42 51.3137 44.6863 54 48 54C51.3137 54 54 51.3137 54 48C54 44.6863 51.3137 42 48 42Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="col-span-2 mt-10 p-3">
                    <span className="text-white text-[32px] font-inter">
                      Let Them be discovered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="grid md:grid-rows-3 sm:grid-rows-1">
            <div className="row-span-1"></div>
            <div className="row-span-2">
              <div className="bg-pic1 w-[340px] h-[530px] rounded-[50px] flex flex-wrap ml-3">
                <div className="grid grid-rows-3 gap-2">
                  <div className="row-start-3 row-end-4 p-4">
                    <span className="text-white text-[36px] p-4 font-inter">Join 5M+</span>
                    <br />
                    <span className="text-white text-[36px] font-inter">People Donate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="grid md:grid-rows-2 sm:grid-rows-1">
            <div className="row-span-1"></div>
            <div className="row-span-1">
              <div className="bg-[#D9D9D9] w-[340px] h-[380px] rounded-[50px] flex flex-wrap">
                <div className="grid grid-rows-4">
                  <div className="row-span-1 p-8">
                    <span className="text-[36px] text-[#5491BA] font-inter">
                      Join 5M+ People Donate
                    </span>
                  </div>
                  <div className="row-span-1 p-2">
                    <div className="bg-[#BAC1BF] rounded-[50px] h-[100px] flex flex-wrap mt-18">
                      {/* <div className="grid grid-rows-3">
                      <div className="row-start-2 row-end-3">
                        <span className="text-xl text-white p-4 text-left font-inter">
                          Donate Now
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 sm:w-full p-6 ">
                      <div className="grid grid-cols-3">
                        <div className="col-start-3 col-end-4">
                          <div className="w-12 h-12 rounded-[100px] bg-[#0D2F46]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <path
                                d="M26.9393 17.0607C26.3536 16.4749 26.3536 15.5251 26.9393 14.9393C27.5251 14.3536 28.4749 14.3536 29.0607 14.9393L37.0607 22.9393C37.6464 23.5251 37.6464 24.4749 37.0607 25.0607L29.0607 33.0607C28.4749 33.6464 27.5251 33.6464 26.9393 33.0607C26.3536 32.4749 26.3536 31.5251 26.9393 30.9393L32.3787 25.5H13C12.1716 25.5 11.5 24.8284 11.5 24C11.5 23.1716 12.1716 22.5 13 22.5H32.3787L26.9393 17.0607Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      <div className="flex grow justify-center items-center">
                        <div className="container flex ml-10">
                          <div className="grow h-14">
                            <p className="text-white font-inter text-xl mt-3">Donate Now</p>
                          </div>
                          <div className="grow 0"></div>
                          <div className="grow h-14">
                            <div className="w-12 h-12 rounded-[100px] bg-[#0D2F46]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                              >
                                <path
                                  d="M26.9393 17.0607C26.3536 16.4749 26.3536 15.5251 26.9393 14.9393C27.5251 14.3536 28.4749 14.3536 29.0607 14.9393L37.0607 22.9393C37.6464 23.5251 37.6464 24.4749 37.0607 25.0607L29.0607 33.0607C28.4749 33.6464 27.5251 33.6464 26.9393 33.0607C26.3536 32.4749 26.3536 31.5251 26.9393 30.9393L32.3787 25.5H13C12.1716 25.5 11.5 24.8284 11.5 24C11.5 23.1716 12.1716 22.5 13 22.5H32.3787L26.9393 17.0607Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="grid md:grid-rows-3 sm:grid-rows-1">
            <div className="row-span-1"></div>
            <div className="row-span-2">
              <div className="bg-pic2 w-[340px] h-[530px] rounded-[50px] flex flex-wrap">
                <div className="grid grid-rows-3 gap-2">
                  <div className="row-start-3 row-end-4 p-4">
                    <span className="text-white text-[36px] p-4 font-inter">Spnsor</span>
                    <br />
                    <span className="text-white text-[36px] font-inter">Information</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="grid grid-rows-3 gap-3">
            <div className="row-span-2">
              <div className="bg-pic3 w-[340px] h-[530px] rounded-[50px]">
                <div className="grid grid-rows-4 gap-3">
                  <div className="row-span-1"></div>
                  <div className="row-span-1"></div>
                  <div className="row-span-1"></div>
                  <div className="row-span-1 p-3">
                    <div className="bg-[#A7CB5B] rounded-[50px] h-[100px] flex flex-wrap">
                      <div className="flex grow justify-center items-center">
                        <div className="container flex ml-10">
                          <div className="grow h-14">
                            <p className="text-[#243023] font-inter text-xl mt-3">Explore More</p>
                          </div>
                          <div className="grow 0"></div>
                          <div className="grow h-14">
                            <div className="w-12 h-12 rounded-[100px] bg-[#0D2F46]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                              >
                                <path
                                  d="M26.9393 17.0607C26.3536 16.4749 26.3536 15.5251 26.9393 14.9393C27.5251 14.3536 28.4749 14.3536 29.0607 14.9393L37.0607 22.9393C37.6464 23.5251 37.6464 24.4749 37.0607 25.0607L29.0607 33.0607C28.4749 33.6464 27.5251 33.6464 26.9393 33.0607C26.3536 32.4749 26.3536 31.5251 26.9393 30.9393L32.3787 25.5H13C12.1716 25.5 11.5 24.8284 11.5 24C11.5 23.1716 12.1716 22.5 13 22.5H32.3787L26.9393 17.0607Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className="bg-[#0D2F46] w-[340px] h-[190px] rounded-[50px] flex flex-wrap">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 mt-10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 40.1192C13 29.3172 22.4766 21 33.6 21C39.3339 21 44.3794 23.6886 48 27.1673C51.6206 23.6886 56.6661 21 62.4 21C73.5234 21 83 29.3172 83 40.1192C83 47.5187 79.8445 54.0258 75.4727 59.5261C71.1085 65.017 65.3998 69.6772 59.9339 73.4639C57.8462 74.9102 55.7341 76.2444 53.8011 77.2289C51.986 78.1532 49.899 79 48 79C46.101 79 44.014 78.1532 42.1989 77.2289C40.2659 76.2444 38.1539 74.9102 36.0661 73.4639C30.6002 69.6772 24.8915 65.017 20.5273 59.5262C16.1555 54.0258 13 47.5187 13 40.1192ZM33.6 27C25.283 27 19 33.1164 19 40.1192C19 45.7332 21.3832 50.96 25.2244 55.7929C29.0731 60.6352 34.2517 64.9077 39.483 68.5318C41.4625 69.9032 43.327 71.0701 44.9218 71.8823C46.6346 72.7546 47.6267 73 48 73C48.3733 73 49.3654 72.7546 51.0782 71.8823C52.673 71.0701 54.5375 69.9032 56.517 68.5318C61.7483 64.9077 66.9269 60.6352 70.7756 55.7929C74.6169 50.96 77 45.7332 77 40.1192C77 33.1164 70.717 27 62.4 27C57.6234 27 53.1632 29.8537 50.3783 33.4757C49.8104 34.2142 48.9316 34.6471 48 34.6471C47.0684 34.6471 46.1896 34.2142 45.6217 33.4757C42.8368 29.8537 38.3766 27 33.6 27Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="col-span-2 mt-10 p-3">
                    <span className="text-white text-[32px] font-inter">Your Home for help!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow mt-20 bg-[#D9D9D9]">
        <div className="grow max-h-[1000px] flex flex-wrap max-w-[360px]">
          <div className="md:w-1/2 sm:w-full">
            <div className="grid grid-rows-4">
              <div className="row-span-1"></div>
              <div className="row-span-1 hidden sm:block">
                <img src="/sp1.png" alt="img" />
              </div>
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
            </div>
          </div>
          <div className="md:w-1/2 sm:w-full">
            <div className="grid grid-rows-5">
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
              <div className="row-span-1 hidden sm:block">
                <img src="/sp2.png" alt="img" />
              </div>
              <div className="row-span-1"></div>
            </div>
          </div>
        </div>
        <div className="grow 0 flex justify-center items-center">
          <div className="grid grid-rows-3">
            <div className="row-span-1">
              <p className="text-[48px] font-inter max-w-[1000px] text-center">
                Join our community for donating and be a part of a positive change in the world.
                With over :
              </p>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <p className="text-[84px] md:text-[7vw] font-inter">472,836+</p>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <span className="text-[24px] font-inter">People already donating</span>
                </div>
                <div className="row-span-1 flex justify-center">
                  <div className="bg-[#195883] w-[211px] h-[61px] rounded-[50px] flex justify-center items-center">
                    <span className="text-white p-2 text-[24px] font-inter">Donate Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow max-h-[1000px] flex flex-wrap max-w-[360px]">
          <div className="md:w-1/2 sm:w-full">
            <div className="grid grid-rows-5">
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
              <div className="row-span-1 hidden sm:block">
                <img src="/sp3.png" alt="img" />
              </div>
              <div className="row-span-1"></div>
              <div className="row-span-1"></div>
            </div>
          </div>
          <div className="md:w-1/2 sm:w-full">
            <div className="grid grid-rows-4">
              <div className="row-span-1"></div>
              <div className="row-span-1 hidden sm:block">
                <div className="row-span-1"></div>
                <img src="/sp4.png" alt="img" />
              </div>
              <div className="row-span-1"></div>
            </div>
          </div>
        </div>
      </div>
      <Meet />
      <Question />
    </div>
  );
};
export default SponsorContent;
