const Types = ['Country', 'Capital', 'GDP', 'Population', 'Area'];
const lists = [
  {
    Country: 'Afghanisthan',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: 'afghan.png',
  },
  {
    Country: 'Albania',
    Capital: 'Tirana',
    GDP: '$908M',
    Population: '3.07M',
    Area: '28,748 km²',
    Img: 'albania.png',
  },
  {
    Country: 'Algeria',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '/algeria.png',
  },
  {
    Country: 'American Samoa',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '/american.png',
  },
  {
    Country: 'Andorra',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '/andorra.png',
  },
  {
    Country: 'Angola',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '/angola.png',
  },
  {
    Country: 'Anguilla',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '/anguilla.png',
  },
];
const TableContent = () => {
  return (
    <div className="p-8 rounded-md w-full overflow-x-scroll">
      <table className="min-w-full overflow-x-scroll">
        <thead>
          <tr>
            {Types.map((item, key) => (
              <th key={key} className="font-inter text-[#ACACAC] text-[16px] text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lists.map((list, key) => (
            <tr key={key} className="">
              <td className="px-5 py-5 text-sm mb-5 bg-white">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src={list.Img} alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="font-inter text-gray-900 whitespace-no-wrap">{list.Country}</p>
                  </div>
                </div>
              </td>

              <td className="px-5 py-5 text-sm mb-5 bg-white">
                <p className="text-gray-900 whitespace-no-wrap font-inter">{list.Capital}</p>
              </td>
              <td className="px-5 py-5 text-sm mb-5 bg-white">
                <p className="font-inter text-gray-900 whitespace-no-wrap">{list.GDP}</p>
              </td>
              <td className="px-5 py-5 text-sm mb-5 bg-white">
                <p className="font-inter text-gray-900 whitespace-no-wrap">{list.Population}</p>
              </td>
              <td className="px-5 py-5 text-sm mb-5 bg-white">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span className="font-inter relative">{list.Area}</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableContent;
