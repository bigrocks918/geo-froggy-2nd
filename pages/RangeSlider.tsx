import { useEffect, useState } from 'react';

const RangeSlider = () => {
  const [minprice, setMinPrice] = useState(1000);
  const [maxprice, setMaxPrice] = useState(5500);
  const [minthumb, setMinThumb] = useState(0);
  const [maxthumb, setMaxThumb] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const mintrigger = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMinPrice(Math.min(value, maxprice - 500));
    setMinThumb(((value - 100) / (10000 - 100)) * 100);
  };

  const maxtrigger = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMaxPrice(Math.max(value, minprice + 500));
    setMaxThumb(100 - ((value - 100) / (10000 - 100)) * 100);
  };

  return (
    <div className="h-40 flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="100"
            min={1000}
            max={10000}
            onChange={mintrigger}
            value={minprice}
            className="absolute pointer-events-auto appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step="100"
            min={100}
            max={10000}
            onChange={maxtrigger}
            value={maxprice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-[#D3FAD9]"></div>

            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{ right: `${maxthumb}%`, left: `${minthumb}%` }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
              style={{ left: `${minthumb}%` }}
            ></div>

            {/* <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
              style={{ right: `${maxthumb}%` }}
            ></div> */}
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={mintrigger}
              value={minprice}
              className="px-3 py-2 font-inter border border-white rounded w-24 text-center"
            />
          </div>
          <div>
            {/* <input
              type="text"
              maxLength={5}
              onChange={maxtrigger}
              value={maxprice}
              className="px-3 py-2 font-inter border border-white rounded w-24 text-center"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
