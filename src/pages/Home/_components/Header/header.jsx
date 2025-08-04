import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const authState = useSelector((state) => state.authSlice);
  const user = authState?.user || null;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <div className="w-24 h-16 flex items-center justify-center">
            <img
              src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
              alt="Galaxy Cinema Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </NavLink>
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="list-movie"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Mua Vé</span>
          </NavLink>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 focus:outline-none transition-colors duration-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-200 bg-gray-50 md:bg-transparent">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 block py-2 px-3 rounded-sm md:border-0 md:p-0 font-bold"
                    : "block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 block py-2 px-3 rounded-sm md:border-0 md:p-0 font-bold"
                    : "block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="list-movie"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 block py-2 px-3 rounded-sm md:border-0 md:p-0 font-bold"
                    : "block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600"
                }
              >
                List Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="news"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 block py-2 px-3 rounded-sm md:border-0 md:p-0 font-bold"
                    : "block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600"
                }
              >
                News
              </NavLink>
            </li>
            {user ? (
              <li>
                <button className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 block py-2 px-3 rounded-sm md:border-0 md:p-0 font-bold"
                        : "block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="register"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 block py-2 px-3 rounded-sm md:border-0 md:p-0 font-bold"
                        : "block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 transition-colors duration-200 text-gray-700 md:hover:text-red-600"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
