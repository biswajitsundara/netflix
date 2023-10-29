const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <button className="bg-white text-black p-2 px-10 text-md  rounded-lg m-2 hover:bg-opacity-50">
        <i className="fa mr-2">
          &#xf04b;
        </i>
        Play
      </button>
      <button className="bg-gray-500 text-white p-2 px-10 text-md bg-opacity-50 rounded-lg">
        <i className="fa fa-info-circle mr-2" aria-hidden="true"></i>More info
      </button>
    </div>
  );
};

export default VideoTitle;
