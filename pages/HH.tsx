import Image from 'next/image';
import { useState } from 'react';
const HH = () => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const select = () => {
    setAuth(true);
  };
  return (
    <>
      <header>
        <nav className="relative bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] z-10 flex justify-center ">
          <div className="container">
            <div className="flex justify-between items-center mx-auto">
              <Image src="/logo.png" alt="logo" height={66} width={186} />
              <div className="flex items-center lg:order-2">
                <div className="flex items-center">
                  {auth ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C12.5523 2 13 2.44772 13 3V4.08296C15.8377 4.55904 18 7.027 18 10V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H15C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V10C6 7.027 8.16229 4.55904 11 4.08296V3C11 2.44772 11.4477 2 12 2ZM8 16H16V10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10V16ZM11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18H11Z"
                          fill="black"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none p-2"
                        className=""
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                          fill="#1E1E1E"
                        />
                      </svg>
                      <span className="text-xl ml-1">Kyle Keenan</span>
                      <Image src="/f.png" alt="logo" height={49} width={49} />
                    </>
                  ) : (
                    <button
                      className="font-inter rounded-[30px] px-5 py-2 md:px-10 md:py-4 bg-[#195883] text-white text-base md:text-xl w-full md:w-auto md:w-[150px]"
                      onClick={select}
                    >
                      Join Us
                    </button>
                  )}
                </div>
              </div>
              <div
                className={`navLinks duration-500 absolute md:static md:w-auto gap-[4vw] bg-white top-[100%] left-[-100%] justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                  open ? 'left-[0%]' : 'hidden'
                }`}
              >
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw]">
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="#" className="text-xl font-inter text-[#ACACAC]">
                      Home
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="/countries" className="text-xl font-inter text-[#ACACAC]">
                      Countries
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="/about" className="text-xl font-inter text-[#ACACAC]">
                      About
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="/donate" className="text-xl font-inter text-[#ACACAC]">
                      Donate
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 md:py-0">
                    <a href="#" className="text-xl font-inter text-[#ACACAC] whitespace-nowrap">
                      Blog & News
                    </a>
                  </li>
                  <li className="relative md:mr-4 max-w-fit pr-3 md:pr-0 py-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="/contact" className="text-xl font-inter text-[#ACACAC]">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:hidden flex items-center mr-10">
                <span className="cursor-pointer" onClick={() => setOpen(!open)}>
                  <svg
                    className="fill-current text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script> */}
    </>
  );
};
export default HH;
