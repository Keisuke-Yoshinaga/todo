import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-blue-500 px-2 py-3 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link
              className="mr-4 inline-block whitespace-nowrap py-2 text-lg font-bold uppercase leading-relaxed text-white"
              to="/"
            >
              技術学習
            </Link>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="">menu</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex w-full list-none flex-col divide-y lg:ml-auto lg:w-auto lg:flex-row lg:divide-none">
              <li className="">
                <Link
                  className="flex justify-center px-3 py-2 font-bold uppercase leading-snug text-white hover:opacity-75 lg:w-auto"
                  to="/"
                >
                  <div className="lg:mx-2">TOP</div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-center px-3 py-2 font-bold uppercase leading-snug text-white hover:opacity-75 lg:w-auto"
                  to="/todo"
                >
                  <span className="lg:mx-2">TODO</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
