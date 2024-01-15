import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from "react-icons/ri";
import { CardTicket } from "../../components";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white font-medium">
          Good morning, Rody Huancas
        </h1>
        <div className="flex items-center gap-2 text-xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors duration-300" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors duration-300" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* card */}
        <CardTicket
          ticket={"pending"}
          totalTickets={"140,000"}
          text={"Lorem ipsum dolor sit amet."}
        />
        <CardTicket
          ticket={"inProcess"}
          totalTickets={"40,000"}
          text={"Lorem ipsum dolor sit amet."}
        />
        <CardTicket
          ticket={"close"}
          totalTickets={"60,000"}
          text={"Lorem ipsum dolor sit amet."}
        />
        <CardTicket
          ticket={"total"}
          totalTickets={"100,000"}
          text={"Lorem ipsum dolor sit amet."}
        />
      </div>

      <div>
        <h2 className="text-2xl text-white my-10">Most recent tickets</h2>
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-5 mb-10 place-items-center font-medium uppercase">
          <h5>ID</h5>
          <h5>Description</h5>
          <h5>Status</h5>
          <h5>Date</h5>
          <h5>Actions</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-secondary-900 p-4 rounded-xl md:place-items-center mb-5">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID:</h5>
            <span>25654</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description:</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status:</h5>
            <span className="py-1.5 px-4 bg-yellow-500/10 text-yellow-500 rounded-full">
              Open
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date:</h5>
            <span>01/01/2024</span>
          </div>

          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones:</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
                  <RiMore2Fill className="hidden md:block" />{" "}
                  <span className="md:hidden">Acciones</span>
                </MenuButton>
              }
              align={"end"}
              gap={15}
              transition
              menuClassName="bg-secondary-900 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  View all tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-secondary-900 p-4 rounded-xl md:place-items-center mb-5">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID:</h5>
            <span>25654</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description:</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status:</h5>
            <span className="py-1.5 px-4 bg-green-500/10 text-green-500 rounded-full">
              Close
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date:</h5>
            <span>01/01/2024</span>
          </div>

          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones:</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
                  <RiMore2Fill className="hidden md:block" />{" "}
                  <span className="md:hidden">Acciones</span>
                </MenuButton>
              }
              align={"end"}
              gap={15}
              transition
              menuClassName="bg-secondary-900 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  View all tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-secondary-900 p-4 rounded-xl md:place-items-center mb-5">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID:</h5>
            <span>25654</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description:</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status:</h5>
            <span className="py-1.5 px-4 bg-blue-500/10 text-blue-500 rounded-full">
              In process
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date:</h5>
            <span>01/01/2024</span>
          </div>

          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones:</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
                  <RiMore2Fill className="hidden md:block" />{" "}
                  <span className="md:hidden">Acciones</span>
                </MenuButton>
              }
              align={"end"}
              gap={15}
              transition
              menuClassName="bg-secondary-900 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  View all tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-secondary-900 p-4 rounded-xl md:place-items-center">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID:</h5>
            <span>25654</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description:</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status:</h5>
            <span className="py-1.5 px-4 bg-pink-500/10 text-pink-500 rounded-full">
              Cancel
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date:</h5>
            <span>01/01/2024</span>
          </div>

          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones:</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors duration-300">
                  <RiMore2Fill className="hidden md:block" />{" "}
                  <span className="md:hidden">Acciones</span>
                </MenuButton>
              }
              align={"end"}
              gap={15}
              transition
              menuClassName="bg-secondary-900 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  View all tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};
