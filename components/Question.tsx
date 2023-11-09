const items = [
  {
    title: 'How do donate?',
    content:
      "Populations tend to cluster in the foothills and periphery of the rugged Hindu Kush range; smaller groups are found in many of the country's interior valleys; in general, the east is more densely settled, while the south is sparsely populated",
  },
  {
    title: 'Is my donation tax-deductable? How do I claim it on my taxes?',
    content: 'hello world',
  },
  {
    title: 'Can I donate anonymously?',
    content: 'hello world',
  },
  {
    title: 'Can I donate goods instead of money?',
    content: 'hello world',
  },
  {
    title: 'What percentage of my donation actually goes to the charity?',
    content: 'hello world',
  },
  {
    title: 'Another FAQ Question about donation?',
    content: 'hello world',
  },
];
const Question = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="m-auto">
          <p className="text-[64px] font-inter text-center">Frequently asked questions</p>
          <p className="text-[24px] font-inter text-center text-[#646464]">
            Have another questions? Email at ask@geofroggy.com
          </p>
        </div>
      </div>
      <div className="px-20 lg:px-80 py-20 justify-center">
        {items.map((item, key) => (
          <ConItem key={key} con={item} _open={key === 0} />
        ))}
        <div className="border border-[#EBEBED]"></div>
      </div>
    </>
  );
};
const ConItem = ({ con = { title: '', content: '' }, _open = false }) => {
  return (
    <div className="py-5">
      <div className="border border-[#EBEBED]"></div>
      <details className="group" open={_open}>
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="font-inter text-xl"> {con.title}</span>
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
        <p className="font-inter text-neutral-600 mt-3 group-open:animate-fadeIn">{con.content}</p>
      </details>
    </div>
  );
};
export default Question;
