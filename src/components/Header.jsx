import {
  RiArrowDownSLine,
  RiLogoutCircleLine,
  RiNotification3Line,
  RiSettings3Line,
  RiThumbUpLine,
} from "react-icons/ri";
// React menu
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        {/* Notifications */}
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
              <RiNotification3Line />
              <span className="absolute -top-0.5 -right-0 bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          transition
          align={"center"}
          gap={15}
          menuClassName="bg-secondary-100 p-4"
        >
          <h3 className="text-gray-300 text-center font-medium">
            Notifications (2)
          </h3>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg flex-1"
            >
              <img
                src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=740&t=st=1704902695~exp=1704903295~hmac=8125212a2042ebefed0d5fcf5fd108253a64150a6a4c93ca91482adbc03c5c6e"
                alt="user"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Rody Huancas</span>{" "}
                  <span className="text-[8px]">10/01/2024</span>
                </div>
                <p className="text-gray-500 text-xs">Lorem ipsum dolor sit.</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg flex-1"
            >
              <RiThumbUpLine className="p-2 box-content rounded-full bg-blue-200 text-blue-700" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>New Like</span>{" "}
                  <span className="text-[8px]">10/01/2024</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Juan Perez likes your photo.
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Read all notifications.</Link>
          </MenuItem>
        </Menu>
        {/* End notifications */}

        {/* Profile */}
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
              <img
                src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=740&t=st=1704902695~exp=1704903295~hmac=8125212a2042ebefed0d5fcf5fd108253a64150a6a4c93ca91482adbc03c5c6e"
                alt="user"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Rody Huancas</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align={"end"}
          gap={15}
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/profile"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-4 flex-1"
            >
              <img
                src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=740&t=st=1704902695~exp=1704903295~hmac=8125212a2042ebefed0d5fcf5fd108253a64150a6a4c93ca91482adbc03c5c6e"
                alt="user"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-sm">Rody Huancas</span>
                <span className="text-xs">rodyhuancas.04@gmail.com</span>
              </div>
            </Link>
          </MenuItem>

          <hr className="my-4 border-gray-500" />

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuration"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-4 flex-1"
            >
              <RiSettings3Line /> Configuration
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/login"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-4 flex-1"
            >
              <RiLogoutCircleLine /> Logout
            </Link>
          </MenuItem>
        </Menu>
        {/* End profile */}
      </nav>
    </header>
  );
};
