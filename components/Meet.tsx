const avatar = [
  {
    name: 'Full Name Here',
    role: 'Product Manager',
    img: '/m23.png',
  },
  {
    name: 'Full Name Here',
    role: 'Marketer',
    img: '/m24.png',
  },
  {
    name: 'Full Name Here',
    role: 'CEO',
    img: '/m25.png',
  },
  {
    name: 'Full Name Here',
    role: 'Manager',
    img: '/m26.png',
  },
];
const Meet = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center">
          <p className="text-[64px] font-inter">Meet out team</p>
          <p className="text-[24px] text-[#646464] font-inter">
            We’d love to ave you! Join our network of Travellers and geography geeks
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {avatar.map((item, key) => (
          <div key={key} className="col-span-1 p-4">
            <img src={item.img} alt="meet" />
            <span className="font-inter text-[36px]">{item.name}</span>
            <p className="font-inter text-[24px] text-[#646464]">{item.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Meet;
