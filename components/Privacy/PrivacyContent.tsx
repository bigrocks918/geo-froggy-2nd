const items = [
  { content: 'Defenation' },
  { content: 'What personal informatio we collect' },
  { content: 'When we disclose personal information' },
  { content: 'Tracking Technologies and Cookies' },
  { content: 'Retention of Your Personal Data' },
  { content: 'Transfer of Your Personal Data' },
  { content: 'Security of Your Personal Data' },
  { content: "Children's Privacy" },
  { content: 'Links to Other Websites' },
  { content: 'Changes to this Privacy Policy' },
];
const PrivacyContent = () => {
  return (
    // <div className="pt-[74px] pl-[108px] pr-[102px] w-full bg-white">
    <div className="w-full bg-[#FFF] p-16">
      <div className="flex flex-wrap">
        <div className="md:w-3/5 sm:w-full">
          <h1 className="text-5xl font-inter">
            Privacy Policy will help you better understand
            <br />
            how we collect, use, an share your personal information.
          </h1>
          <div className="py-20">
            <h1 className="text-5xl font-inter">Privacy Policy</h1>
            <br />
            <span className="text-2xl font-inter text-[#737373]">
              This Privacy Policy describes Our policies and procedures on the collection, use and
              disclosure of Your information when You use the Service and tells You about Your
              privacy rights and how the law protects You.
              <br />
              <br />
              We use Your Personal data to provide and improve the Service. By using the Service,
              You agree to the collection and use of information in accordance with this Privacy
              Policy. This Privacy Policy has been created with the help of the Free Privacy Policy
              Generator.
            </span>
          </div>
        </div>
        <div className="md:w-2/5 sm:w-full">
          <div className="w-full flex flex-wrap">
            <div className="md:w-1/3 sm:w-full"></div>
            <div className="md:w-2/3 sm:w-full">
              <h1 className="text-5xl font-inter">Table of Contents</h1>
              <div className="mt-10"></div>
              {items.map((item, key) => (
                <li key={key} className="font-inter p-1.5 text-2xl">
                  <u>{item.content}</u>
                </li>
              ))}
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="md:w-3/5 sm:w-full">
        <h1 className="text-5xl font-inter">Defenations</h1>
        <br />
        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Account</b> means a unique account created for You to access
          our Service or parts of our Service.
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Affiliate</b>{' '}
          {`means an entity that controls, is controlled
          by or is under common control with a party, where "control" means ownership of 50% or more
          of the shares, equity interest or other securities entitled to vote for election of
          directors or other managing authority.`}
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Company</b>
          {`(referred to as either "the Company", "We", "Us"
          or "Our" in this Agreement) refers to Geofroggy LLC, 2164 Shingleton Road. Kentwood, MI,
          USA.`}
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Cookies</b>
          {`are small files that are placed on Your
          computer, mobile device or any other device by a website, containing the details of Your
          browsing history on that website among its many uses.`}
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Country</b> refers to: Maryland, United States
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Device</b> means any device that can access the Service such
          as a computer, a cellphone or a digital tablet.
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Personal Data</b> is any information that relates to an
          identified or identifiable individual.
        </li>
        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Service</b> refers to the Website.
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Service Provider</b>
          {`means any natural or legal person who
          processes the data on behalf of the Company. It refers to third-party companies or
          individuals employed by the Company to facilitate the Service, to provide the Service on
          behalf of the Company, to perform services related to the Service or to assist the Company
          in analyzing how the Service is used.`}
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Usage Data</b>
          {`refers to data collected automatically,
          either generated by the use of the Service or from the Service infrastructure itself (for
          example, the duration of a page visit).`}
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">Website</b> refers to Geofroggy, accessible from
          geofroggy.com
        </li>

        <li className="text-2xl font-inter text-[#737373]">
          <b className="text-[#111825]">You</b>
          {`means the individual accessing or using the Service,
          or the company, or other legal entity on behalf of which such individual is accessing or
          using the Service, as applicable.`}
        </li>
      </div>
      <div className="py-20 md:w-3/5 sm:w-full">
        <h1 className="text-5xl font-inter">Collecting and Using Your Personal Data</h1>
        <br />
        <span className="text-2xl font-inter text-[#737373]">
          Personal Data
          <br />
          {`While using Our Service, We may ask You to provide Us with certain personally identifiable
            information that can be used to contact or identify You. Personally identifiable
            information may include, but is not limited to:`}
          <li>Email address</li>
          <li>First name and Last name</li>
          <li>Usage Date</li>
          Usage Data
          <br />
          {`Usage Data is collected automatically when using the Service. Usage Data may include
            information such as Your Device's Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and other diagnostic data.`}
          <br />
          {`When You access the Service by or through a mobile device, We may collect certain
            information automatically, including, but not limited to, the type of mobile device You
            use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use, unique device identifiers
            and other diagnostic data.`}
          <br />
          {`We may also collect information that Your browser sends whenever You visit our Service or
            when You access the Service by or through a mobile device.`}
        </span>
      </div>
    </div>
  );
};
export default PrivacyContent;
