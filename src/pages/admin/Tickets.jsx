import { Link } from "react-router-dom";
import {
  RiAddFill,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiFilter2Fill,
  RiSearch2Line,
} from "react-icons/ri";
import { Disclosure, Tab, Transition } from "@headlessui/react";

export const Tickets = () => {
  return (
    <div>
      {/* title */}
      <div className="flex items-center justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Overview</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <span>-</span>
            <span>Suppotr Center</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-4 py-2 px-4 rounded-lg hover:text-primary transition-colors duration-300">
            <RiFilter2Fill /> Filter
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-4 py-2 px-4 rounded-lg transition-colors duration-300">
            <RiAddFill /> Create
          </button>
        </div>
      </div>

      {/* front page */}
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">How Can We Help You?</h1>
          <form>
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Search for anything"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <img
            src="portada.svg"
            alt="portada"
            className="w-72 h-72 object-cover"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tab.Group>
        <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
          <Tab.List className="flex items-center justify-between gap-2 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300 outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Overview
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300 outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Tickets
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300 outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                FAQ
              </Tab>
            </div>
            <div>
              <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-4 py-2 px-4 rounded-lg transition-colors duration-300">
                <RiAddFill /> Create
              </button>
            </div>
          </Tab.List>
        </div>

        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-2xl">Popular Tickets</h1>
                  <Link className="flex items-center gap-2 text-primary">
                    Support <RiArrowRightLine />
                  </Link>
                </div>

                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      Is team pricing available?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        React
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>

                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How Extended Licese Work?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        Angular
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>

                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How to install on a local machine?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        Vue.js
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>

                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      What admin theme does?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        Laravel
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>

              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* title card */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-white text-2xl">FAQ</h1>
                  <Link className="flex items-center gap-2 text-primary">
                    All FAQ <RiArrowRightLine />
                  </Link>
                </div>

                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      Is team pricing available?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        React
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>

                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How Extended Licese Work?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        Angular
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>

                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How to install on a local machine?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        Vue.js
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>

                  <Disclosure>
                    <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      What admin theme does?{" "}
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        Laravel
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Libero, molestiae iste! Quia recusandae maiores
                        animi, veniam exercitationem ab perferendis odio{" "}
                        <Link to="" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
