const focus = ['Capital', 'GDP', 'Population', 'km² Area'];
const items = [
  {
    Country: 'Afghanisthan',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '11.png',
  },
  {
    Country: 'Albania',
    Capital: 'Tirana',
    GDP: '$908M',
    Population: '3.07M',
    Area: '652,748 km²',
    Img: '22.png',
  },
  {
    Country: 'Algeria',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '33.png',
  },
  {
    Country: 'American Samoa',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '44.png',
  },
  {
    Country: 'Andorra',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '55.png',
  },
  {
    Country: 'Angola',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '66.png',
  },
  {
    Country: 'Anguilla',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '77.png',
  },
  {
    Country: 'Antigua and Barbuda',
    Capital: 'Kabul',
    GDP: '$1.01B',
    Population: '36.64M',
    Area: '652,230 km²',
    Img: '88.png',
  },
  {
    Country: 'Argentina',
    Img: '99.png',
  },
  {
    Country: 'Armenia',
    Img: '1010.png',
  },
  {
    Country: 'Aruba',
    Img: '1111.png',
  },
  {
    Country: 'Australia',
    Img: '1212.png',
  },
];
const ContriesContent = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {items.map((item, key) => (
        <div key={key} className="rounded-[5px] w-full p-2">
          <img className="w-full" src={item.Img} alt="" />
          <div className="grid grid-rows-3 bg-white">
            <div className="row-span-1">
              <span className="text-xl p-4 font-inter">{item.Country}</span>
            </div>
            <div className="row-span-1 p-2">
              <div className="flex flex-wrap">
                <div className="md:w-1/2 sm:w-full">
                  <span className="text-xl flex justify-center text-[#727272] font-inter">
                    {item.Capital}
                  </span>
                  {item.Country === 'Argentina' ||
                  item.Country === 'Armenia' ||
                  item.Country === 'Australia' ||
                  item.Country === 'Aruba' ? null : (
                    <p className="text-[12px] flex justify-center text-[#727272] font-inter">
                      Capital
                    </p>
                  )}
                </div>
                <div className="md:w-1/2 sm:w-full">
                  <span className="text-xl flex justify-center text-[#727272]">{item.GDP}</span>
                  {item.Country === 'Argentina' ||
                  item.Country === 'Armenia' ||
                  item.Country === 'Australia' ||
                  item.Country === 'Aruba' ? null : (
                    <p className="text-[12px] flex justify-center text-[#727272] font-inter">GDP</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row-span-1 p-2">
              <div className="flex flex-wrap">
                <div className="md:w-1/2 sm:w-full">
                  <span className="text-xl flex justify-center text-[#727272] font-inter">
                    {item.Population}
                  </span>
                  {item.Country === 'Argentina' ||
                  item.Country === 'Armenia' ||
                  item.Country === 'Australia' ||
                  item.Country === 'Aruba' ? null : (
                    <p className="text-[12px] flex justify-center text-[#727272] font-inter">
                      Population
                    </p>
                  )}
                </div>
                <div className="md:w-1/2 sm:w-full">
                  <span className="text-xl flex justify-center text-[#727272] font-inter">
                    {item.Area}
                  </span>
                  {item.Country === 'Argentina' ||
                  item.Country === 'Armenia' ||
                  item.Country === 'Australia' ||
                  item.Country === 'Aruba' ? null : (
                    <p className="text-[12px] flex justify-center text-[#727272] font-inter">
                      km² Area
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContriesContent;
