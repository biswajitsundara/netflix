import { useSelector } from "react-redux";
import lang from "../utils/langConstrants";

const SearchBar = () => {

    const langKey = useSelector(store => store.config.lang);

    console.log(lang[langKey]);

    return (
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[langKey].searchPlaceHolder}
          />
          <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-md">{lang[langKey].search}</button>
        </form>
      </div>
    );
  };
  
  export default SearchBar;
  