const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex items-center">
      <button className="bg-white text-black p-2 md:h-12 py-1 px-5 md:px-10 text-md  rounded-lg m-2 hover:bg-opacity-50">
        <i className="fa mr-2">
          &#xf04b;
        </i>
        Play
      </button>
      <button className="bg-gray-500 text-white p-2 h-12 px-10 text-md bg-opacity-50 rounded-lg hidden md:block">
        <i className="fa fa-info-circle mr-2" aria-hidden="true"></i>More info
      </button>
      </div>
      
    </div>
  );
};

export default VideoTitle;
