import { useState } from 'react';

import Image from 'next/image';
import { Side } from '@/components/Side';
import ContriesContent from '@/components/Table/ContriesContent';
import TableContent from '@/components/Table/TableContent';
import HH from './HH';
const Countries = () => {
  const [showType, setShowType] = useState(1);

  return (
    <div>
      <HH />
      <div className="w-full flex justify-center">
        <div className="mt-5 container flex">
          <div className="hidden sm:block">
            <Side />
          </div>
          <div className="w-full lg:w-full md:w-1/2">
            <div className="flex justify-between mb-1 font-inter">
              <div className="flex">
                <Image
                  src="/icons/more-3.svg"
                  alt="more-3"
                  className={`rounded-md h-[30px] cursor-pointer ${
                    showType === 0 ? 'bg-[#8CC63E]' : ''
                  }`}
                  width={40}
                  height={16}
                  onClick={() => {
                    setShowType(0);
                  }}
                />
                <Image
                  src="/icons/list-dot.svg"
                  className={`rounded-md h-[30px] cursor-pointer ${
                    showType === 1 ? 'bg-[#8CC63E]' : ''
                  }`}
                  width={40}
                  height={10}
                  alt="list-dot"
                  onClick={() => {
                    setShowType(1);
                  }}
                />
              </div>
              <div className="ml-3 flex-grow">
                <div className="flex flex-wrap justify-between">
                  <div className="">
                    <span className="text-xl text-[#ACACAC] p-2">
                      Showing <span className="text-[#727272]">1-40 / 237</span> Countries
                    </span>
                  </div>
                  <div className="flex">
                    <div className="">
                      <span className="text-xl text-[#ACACAC] p-2">View</span>
                      <select className="bg-transparent text-[#727272]">
                        <option value="">40</option>
                      </select>
                    </div>
                    <div className="">
                      <span className="text-xl text-[#ACACAC]">Sort by</span>
                      <select name="" id="" className="bg-transparent text-[#727272]">
                        <option value="">Name(A-Z)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showType === 0 && <ContriesContent />}
            {showType === 1 && <TableContent />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Countries;
