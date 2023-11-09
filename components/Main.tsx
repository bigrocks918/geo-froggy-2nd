import { SearchInput } from '@/components/SearchInput';

const Main = () => {
  return (
    <div className="bg-frame h-100 bg-bottom bg-cover flex justify-center items-center">
      <div>
        <div className="text-[50px] sm:flex justify-center text-white leading-[130%] mb-[50px] font-semibold font-inter text-center">
          Support and Documentation
        </div>
        <div className="w-full">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Main;
