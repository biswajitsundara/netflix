const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <button className="bg-gray-500 text-white p-2 px-10 text-md bg-opacity-50 rounded-lg m-2">Play</button>
      <button className="bg-gray-500 text-white p-2 px-10 text-md bg-opacity-50 rounded-lg">More info</button>
    </div>
  );
};

export default VideoTitle;
