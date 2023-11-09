import Image from 'next/image';

const items = [
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'flag',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'flash',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'graph',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'globe',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'sun',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'moon',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'People',
  },
  {
    title: 'What is Geo Froggy',
    content: 'Geofroggy is an organisation providing county infos.',
    icon: 'calendar-empty',
  },
];
const generalFAQItems = [
  {
    title: 'What is Geo Froggy?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
  {
    title: 'What is Geo Froggy?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
  {
    title: 'What is Geo Froggy?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
  {
    title: 'What is Geo Froggy?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
  {
    title: 'What is Geo Froggy?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
  {
    title: 'What is Geo Froggy?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
];
const geographyFAQItems = [
  {
    title: 'What is a Geo platform?',
    content:
      'Geo platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
  },
  {
    title: 'What is a Geo platform?',
    content:
      'Geo platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
  },
  {
    title: 'What is a Geo platform?',
    content:
      'Geo platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
  },
  {
    title: 'What is a Geo platform?',
    content:
      'Geo platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
  },
  {
    title: 'What is a Geo platform?',
    content:
      'Geo platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
  },
  {
    title: 'What is a Geo platform?',
    content:
      'Geo platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
  },
];
export const FaqContent = () => {
  return (
    <div className="p-3 md:pt-[74px] md:pl-[108px] md:pr-[102px] sm:pt-[20px] sm:pl-[20px] w-full bg-white">
      <p className="text-[48px] font-inter">Advice and answers</p>
      <p className="text-[24px] text-[#4F545E] mt-3 font-inter">
        Pay With Debit Card or Credit Card
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 py-15">
        {items.map((item, key) => (
          <div key={key} className="rounded-[5px] border-[3px] border-[#EBEBED] w-full p-6">
            <div className="border rounded-[5px] border-[#EBEBED] w-fit p-4 m-auto">
              <Image
                src={`/icons/${item.icon}.svg`}
                alt="icon"
                width={32}
                height={32}
                className="m-auto"
              />
            </div>
            <div className="text-xl text-center font-inter">{item.title}</div>
            <div className="text-xl text-[#646464] text-center font-inter">{item.content}</div>
          </div>
        ))}
      </div>
      <div className="py-4"></div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/3">
          <p className="text-4xl mt-5 font-inter">General FAQs</p>
        </div>
        <div className="w-full md:w-2/3">
          {generalFAQItems.map((item, key) => (
            <FaqItem key={key} faq={item} _open={key === 0} />
          ))}
          <div className="border border-[#EBEBED]"></div>
        </div>
      </div>
      <div className="py-8"></div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/3">
          <p className="text-4xl mt-5 font-inter">Geography FAQs</p>
        </div>
        <div className="w-full md:w-2/3">
          {geographyFAQItems.map((item, key) => (
            <FaqItem key={key} faq={item} />
          ))}
          <div className="border border-[#EBEBED]"></div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ faq = { title: '', content: '' }, _open = false }) => {
  return (
    <>
      <div className="border border-[#EBEBED]"></div>
      <div className="py-5">
        <details className="group" open={_open}>
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-xl text-center font-inter"> {faq.title}</span>
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
          <p className="font-inter text-neutral-600 mt-3 group-open:animate-fadeIn">
            {faq.content}
          </p>
        </details>
      </div>
    </>
  );
};
