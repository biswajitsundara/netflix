import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleSearchView } from "../utils/searchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const searchDisplayed = useSelector((store) => store.search);

  console.log(searchDisplayed);


  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-56 " src={LOGO} alt="" />
      {user && (
        <div className="pt-3 flex">
          {searchDisplayed.showSearch && (
            <select
              name=""
              id=""
              className="h-10 rounded mr-2 bg-gray-700 text-white px-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 bg-gray-700 text-white rounded-md h-10 mr-2 font-bold"
            onClick={handleSearch}
          >
            {searchDisplayed.showSearch ? 'Home' : 'Search'}
          </button>
          <img src={user.photoURL} alt="" className="w-15 h-10 rounded mr-2" />
          <button
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded h-10"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
