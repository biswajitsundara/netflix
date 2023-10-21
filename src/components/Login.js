import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="bg"
      />
      </div>
      
      <form action="" className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="email" className="p-2 my-4 w-full rounded-sm bg-zinc-700"/>
        <input type="text" placeholder="password" className="p-2 my-4 w-full rounded-sm bg-zinc-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-sm">Sign In</button>
      </form>
    </>
  );
};

export default Login;
