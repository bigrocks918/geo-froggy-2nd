import MapContent from './MapContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const BodyContent = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[74px] pl-[108px] pr-[102px] w-ful">
        <div className="flex flex-wrap">
          <div className="md:w-3/4 sm:w-1/2 xs: w-full">
            <MapContent />
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Languages</p>
              <p className="text-[#737373] font-inter">
                Afghan Persian or Dari (official) 77% (Dari functions as the lingua franca), Pashto
                (official) 48%, Uzbek 11%, English 6%, Turkmen 3%, Urdu 3%, Pashayi 1%, Nuristani
                1%, Arabic 1%, Balochi 1% (2017 est.)
              </p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Ethnic Groups</p>
              <p className="text-[#737373] font-inter">
                Pashtun, Tajik, Hazara, Uzbek, other (includes smaller numbers of Baloch, Turkmen,
                Nuristani, Pamiri, Arab, Gujar, Brahui, Qizilbash, Aimaq, Pashai, and Kyrghyz)
                (2015)%
              </p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Population Distribution</p>
              <p className="text-[#737373] font-inter">
                {`Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush
                  range; smaller groups are found in many of the country's interior valleys; in
                  general, the east is more densely settled, while the south is sparsely populated`}
              </p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Urbanization</p>
              <p className="text-[#737373] font-inter">
                Urban population: 26% of total population (2020)
              </p>
              <p className="text-[#737373] font-inter">
                Rate of urbanization: 3.37% annual rate of change (2015-20 est.)
              </p>
              <p className="text-[#737373] font-inter">
                Total population growth rate v. urban population growth rate, 2000-2030: PDF
              </p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Age Structure</p>
              <p className="text-[#737373] font-inter">
                0-14 - years : 40.62% (male 7,562,703/female 7,321,646)
              </p>
              <p className="text-[#737373] font-inter">
                15-24 - years : 21.26% (male 3,960,044/female 3,828,670)
              </p>
              <p className="text-[#737373] font-inter">
                25-54 - years : 31.44% (male 5,858,675/female 5,661,887)
              </p>
              <p className="text-[#737373] font-inter">
                55-64 - years : 4.01% (male 724,597/female 744,910)
              </p>
              <p className="text-[#737373] font-inter">
                65 - years and over : 2.68% (male 451,852/female 528,831) (2020 est.)
              </p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Dependency Ratios</p>
              <p className="text-[#737373] font-inter">Total dependency ratio: 88.8</p>
              <p className="text-[#737373] font-inter">Youth dependency ratio: 75.3</p>
              <p className="text-[#737373] font-inter">Elderly dependency ratio: 4.8</p>
              <p className="text-[#737373] font-inter">Potential support ratio: 21 (2020 est.)</p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Median Age</p>
              <p className="text-[#737373] font-inter">Total: 19.5 years</p>
              <p className="text-[#737373] font-inter">Male: 19.4 years</p>
              <p className="text-[#737373] font-inter">Female: 19.5 years (2020 est.)</p>
            </div>
            <div className="w-full bg-white mt-1 p-6">
              <p className="text-[36px] font-inter">Sex Ratio</p>
            </div>
          </div>
          <div className="md:w-1/4 md:pl-6 sm:w-1/2 xs: w-full">
            <Sidebar />
          </div>
          ---
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
