import RangeSlider from '@/pages/RangeSlider';
import RangeSlider1 from '@/pages/RangeSlider1';
const continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Ocenia'];

const languages = [
  'English',
  'Japanese',
  'Spanish',
  'German',
  'Russian',
  'French',
  'Arabic',
  'Hindi',
  'Italian',
  'Korean',
];

export const Side = () => {
  return (
    <div>
      <div id="view" className="w-[300px] flex flex-row mr-5">
        <div
          id="sidebar"
          className="bg-white rounded-md h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-[400px] overflow-x-hidden transition-transform duration-300 ease-in-out"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <div className="flex border-2 border-[#acacac] rounded">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="menu" className="flex flex-col space-y-2">
              <div className="text-sm font-medium text-gray-700 py-2 px-2 rounded-md transition duration-150 ease-in-out">
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-xl text-center text-[#939397] font-inter">
                        {' '}
                        Continent
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <ul>
                      {continents.map((item, key) => (
                        <li key={key} className="p-3">
                          <span className="text-[16px] font-inter">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-xl text-center text-[#939397] font-inter">
                        Population
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="flex">
                      <div className="flex flex-wrap w-full">
                        <div className="w-1/2 flex-shrink-0">
                          <RangeSlider />
                        </div>
                        <div className="w-1/2 flex-shrink-0 -ml-1">
                          <RangeSlider1 />
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-xl text-center text-[#939397] font-inter">
                        {' '}
                        Language
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="grid grid-cols-3">
                      {languages.map((item, key) => (
                        <div
                          key={key}
                          className="font-inter col-span-1 mt-4 p-3 rounded-[20px] text-[#ACACAC] text-[16px] hover:text-white hover:bg-[#8CC63E] duration-[400ms,700ms] transition-[color,box-shadow]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-xl text-center text-[#939397] font-inter"> GDP</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="flex">
                      <div className="flex flex-wrap w-full">
                        <div className="w-1/2 flex-shrink-0">
                          <RangeSlider />
                        </div>
                        <div className="w-1/2 flex-shrink-0 -ml-1">
                          <RangeSlider1 />
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="border border-[#EBEBED]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
