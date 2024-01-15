import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import {
  RiArrowRightSLine,
  RiBarChart2Line,
  RiCalendarTodoLine,
  RiCloseLine,
  RiCustomerService2Line,
  RiEarthLine,
  RiLogoutCircleLine,
  RiMenu3Line,
  RiMessage3Line,
} from "react-icons/ri";

export const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <Link to="/" className="flex justify-center items-end text-2xl font-bold text-white mb-10">
            Admin<span className="text-primary text-4xl">.</span>
          </Link>

          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors duration-300"
              >
                <RiBarChart2Line className="text-primary" /> Analytic
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors duration-300"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" /> Social Media
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul className={`${showSubmenu ? "h-[120px]" : "h-0"} overflow-hidden transition-all`}>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors duration-300"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors duration-300"
                  >
                    Social media statistic
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors duration-300"
                  >
                    Social media profile
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors duration-300"
              >
                <RiMessage3Line className="text-primary" /> Messages
              </Link>
            </li>
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors duration-300"
              >
                <RiCustomerService2Line className="text-primary" /> Technical Support
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors duration-300"
              >
                <RiCalendarTodoLine className="text-primary" /> Calendar
              </Link>
            </li>
          </ul>
        </div>

        <nav>
          <Link
            to="/login"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors duration-300"
          >
            <RiLogoutCircleLine className="text-primary" /> Logout
          </Link>
        </nav>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};
