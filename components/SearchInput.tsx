export const SearchInput = () => {
  return (
    <div className="container">
      <div className="relative md:max-w-[640px] m-auto px-10">
        <input
          type="search"
          className=" bg-purple-white w-full shadow rounded pl-10 border-[3px] border-white/50 bg-white/10 text-white/50 p-3 outline-none border rounded-2"
          placeholder="Search by name..."
        />
      </div>
    </div>
  );
};
