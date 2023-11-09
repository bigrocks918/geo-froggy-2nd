const navigation = [
  { label: 'Home', path: 'home' },
  { label: 'Countries', path: 'countries' },
  { label: 'About', path: 'about' },
  { label: 'Donate', path: 'donate' },
  { label: 'Blog & News', path: 'blog' },
  { label: 'Contact', path: 'contact' },
];

const HeaderNav = () => {
  return (
    <ul className="flex justify-between gap-6 flex-1 grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1">
      {navigation.map((item, key) => (
        <li key={key} className="">
          <a className="text-[#ACACAC] hover:text-blue-800" href={item.path}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
