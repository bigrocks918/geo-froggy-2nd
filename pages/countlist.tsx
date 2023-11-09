import Image from 'next/image';
import { Side } from '@/components/Side';
import TableContent from '@/components/Table/TableContent';
import HH from './HH';
const CountList = () => {
  return (
    <div>
      <HH />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Side />
        </div>
        <div className="md:col-span-3 py-10">
          <div className="flex flex wrap md:w-1/2 sm:w-full">
            <div className="flex w-1/2">
              <Image
                src="/icons/list-dot.svg"
                alt="list-dot"
                className="rounded-md h-[30px]"
                width={40}
                height={16}
              />
              <Image
                src="/icons/list-dot.svg"
                className="bg-[#8CC63E] rounded-md h-[30px]"
                width={40}
                height={10}
                alt="list-dot"
              />
              <div className="ml-10">
                <span className="text-xl">Showing 1-40 / 237 Countries</span>
              </div>
            </div>
            <div className="flex md:w-1/2 sm:w-full">
              <div className="flex flex wrap w-full">
                <div className="w-1/2">
                  <button
                    id="dropdown-button"
                    className="bg-gray-100 inline-flex justify-center w-full text-xl font-medium text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="text-xl text-[#ACACAC] mr-10">View</span>
                    40
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="w-full">
                  <button
                    id="dropdown-button"
                    className="bg-gray-100 inline-flex justify-center w-full text-xl font-medium text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="text-xl text-[#ACACAC] mr-10">Sort by</span>
                    Name(A-Z)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <TableContent />
        </div>
      </div>
    </div>
  );
};
export default CountList;
