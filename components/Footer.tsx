import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto grid grid-cols-4">
          <div className="col-span-4 md:col-span-1 sm:col-span-2">
            <div>
              <a className="flex justify-center md:justify-start">
                <Image src="/logo.png" alt="logo" height={66} width={186} />
              </a>
              <p className="mt-2 text-sm text-gray-500 font-inter">Design, Code and Ship!</p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start font-inter">
                  Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a. Donec rutrum
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 sm:col-span-2 flex flex-wrap px-4 mt-4">
            <div className="w-1/2 px-4 md:w-1/4 sm:w-1/2">
              <h2 className="mb-3 text-sm tracking-widest text-gray-900 uppercase title-font font-inter font-semibold">
                Product
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Tours
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Destination
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Food
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Accomodation
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-1/2 px-4 md:w-1/4 sm:w-1/2">
              <h2 className="mb-3 text-sm tracking-widest text-gray-900 uppercase title-font font-inter font-semibold">
                Company
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Safety
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Tour Guides
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    About US
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter2">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-1/2 px-4 md:w-1/4 sm:w-1/2">
              <h2 className="mb-3 text-sm tracking-widest text-gray-900 uppercase title-font font-inter font-semibold">
                Resources
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Community
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Offers
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Contact
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter">
                    Terms of service
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-1/2 px-4 md:w-1/4 sm:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font font-inter font-semibold">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3 hidden md:block">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900 font-inter"></a>
                </li>
                <div className="mt-4">
                  <span className="flex flex-wrap">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
