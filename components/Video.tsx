const Video = () => {
  return (
    <>
      <video className="max-h-[501px] w-full rounded-2xl" autoPlay muted controls>
        <source src="/5 - Important Message.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
export default Video;
