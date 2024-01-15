import { Link } from "react-router-dom";
import {
  RiAddFill,
  RiArrowLeftSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiDiscussLine,
  RiFileTextLine,
  RiFilter2Fill,
  RiGithubLine,
  RiSearch2Line,
  RiTicketLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Disclosure, Tab, Transition } from "@headlessui/react";

export const Tickets = () => {
  return (
    <div>
      {/* title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
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
          <Tab.List className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2 gap-y-6 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
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
            <div className="flex justify-center">
              <button className="w-full bg-primary/90 text-black hover:bg-primary flex items-center justify-center gap-4 py-2 px-4 rounded-lg transition-colors duration-300">
                <RiAddFill /> Create
              </button>
            </div>
          </Tab.List>
        </div>

        <Tab.Panels className="mt-8">
          {/* overview */}
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-lg md:text-2xl">Popular Tickets</h1>
                  <Link className="flex items-center gap-2 text-primary">
                    Support <RiArrowRightLine />
                  </Link>
                </div>

                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      Is team pricing available?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How Extended Licese Work?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How to install on a local machine?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      What admin theme does?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                  <h1 className="text-white text-lg md:text-2xl">FAQ</h1>
                  <Link className="flex items-center gap-2 text-primary">
                    All FAQ <RiArrowRightLine />
                  </Link>
                </div>

                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex-wrap flex md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      Is team pricing available?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex-wrap flex md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How Extended Licese Work?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      How to install on a local machine?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                      What admin theme does?{" "}
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
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

          {/* tickets */}
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* section 1 */}
              <div className="col-span-3 p-8">
                <form>
                  <div className="relative">
                    <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                    <input
                      type="text"
                      className="bg-secondary-900 outline-none py-3 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                      placeholder="Search for anything"
                    />
                  </div>
                </form>
                <h2 className="text-white text-2xl py-8">Public Tickets</h2>
                {/* Tickets */}
                <div>
                  <div className="flex flex-col gap-2 mb-8">
                    {/* ticket */}
                    <div className="flex items-center gap-4">
                      <RiTicketLine className="text-2xl text-yellow-500" />
                      <Link
                        to=""
                        className="text-xl hover:text-yellow-500 transition-colors duration-300"
                      >
                        How to use Netronic whit Django Framework?
                      </Link>
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="px-10">
                      <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad ipsa nihil illo harum aut nisi recusandae, magni
                        eveniet. Perspiciatis beatae eum ullam. Odit tempora
                        minima, odio qui magnam debitis. Voluptatum.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-8">
                    {/* ticket */}
                    <div className="flex items-center gap-4">
                      <RiTicketLine className="text-2xl text-blue-500" />
                      <Link
                        to=""
                        className="text-xl hover:text-blue-500 transition-colors duration-300"
                      >
                        How to use Netronic whit Django Framework?
                      </Link>
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="px-10">
                      <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad ipsa nihil illo harum aut nisi recusandae, magni
                        eveniet. Perspiciatis beatae eum ullam. Odit tempora
                        minima, odio qui magnam debitis. Voluptatum.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-8">
                    {/* ticket */}
                    <div className="flex items-center gap-4">
                      <RiTicketLine className="text-2xl text-green-500" />
                      <Link
                        to=""
                        className="text-xl hover:text-green-500 transition-colors duration-300"
                      >
                        How to use Netronic whit Django Framework?
                      </Link>
                      <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="px-10">
                      <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad ipsa nihil illo harum aut nisi recusandae, magni
                        eveniet. Perspiciatis beatae eum ullam. Odit tempora
                        minima, odio qui magnam debitis. Voluptatum.
                      </p>
                    </div>
                  </div>
                </div>
                {/* pagination */}
                <div className="p-8 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100 duration-300">
                      <RiArrowLeftSLine />
                    </button>
                    <div className="flex items-center gap-1">
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100 duration-300">
                        1
                      </button>
                      <button className="py-2 px-4 bg-secondary-900 rounded-lg text-gray-100">
                        2
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100 duration-300">
                        3
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100 duration-300">
                        4
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100 duration-300">
                        5
                      </button>
                    </div>
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100 duration-300">
                      <RiArrowRightSLine />
                    </button>
                  </nav>
                </div>
              </div>

              {/* section 2 */}
              <div>
                <div className="bg-secondary-900 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl text-white mb-8">More Channels</h2>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiFileTextLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Project Briefing</h5>
                        <p className="text-xs">
                          Lorem ipsum dolor{" "}
                          <Link to="" className="text-primary">
                            Sit Amet
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <RiDiscussLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">More to discuss?</h5>
                        <p className="text-xs">
                          Lorem ipsum dolor{" "}
                          <Link to="" className="text-primary">
                            Sit Amet
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <RiTwitterLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Latest News</h5>
                        <p className="text-xs">
                          Lorem ipsum dolor{" "}
                          <Link to="" className="text-primary">
                            Sit Amet
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <RiGithubLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">GitHub Access</h5>
                        <p className="text-xs">
                          Lorem ipsum dolor{" "}
                          <Link to="" className="text-primary">
                            Sit Amet
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-900 p-8 rounded-lg">
                  <h2 className="text-2xl text-white mb-8">Documentation</h2>

                  <ul className="flex flex-col gap-y-4">
                    <li>
                      <Link
                        to=""
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Angular Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> React Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Vue Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Svelte Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Astro Admin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab.Panel>

          {/* FAQ */}
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg">
              <div className="mb-10">
                <h1 className="text-2xl text-white mb-2">
                  Frequenstly Asked Questions
                </h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat quasi nisi numquam error autem quod cum sunt mollitia
                  nam aut officiis, delectus optio dignissimos eos. Distinctio
                  veritatis asperiores magnam nostrum!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* section 1 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Buying Product</h1>

                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                  </div>
                </div>

                {/* section 2 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Installation</h1>

                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:transform ui-open:text-primary transition-all duration-300" />{" "}
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                        How does it work?{" "}
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
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
