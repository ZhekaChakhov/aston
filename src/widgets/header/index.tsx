/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

import ReactLogo from "./Rick_and_Morty.svg?react";

const navlinks = [
  {
    id: 1,
    title: "Главная",
    link: "/",
  },
  {
    id: 2,
    title: "Поиск",
    link: "/",
  },
  {
    id: 3,
    title: "Избранное",
    link: "/",
  },
  {
    id: 4,
    title: "История",
    link: "/",
  },
];

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-gray-800 py-0 md:py-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link
            to="/"
            className="
							text-white font-bold
							text-xl md:text-2xl lg:text-3xl
							"
          >
            <div className="flex items-center m-0">
              <ReactLogo width={500} height={100} />
            </div>
          </Link>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link) => (
                <NavLink
                  className="
									text-gray-300 hover:bg-gray-600 hover:text-white
									transition-all duration-500
									px-3 py-2 rounded-md font-medium
									text-lg lg:text-xl
									"
                  key={link.id}
                  to={link.link}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="
							inline-flex items-center justify-center
							p-2 rounded-md text-gray-400
							hover:text-white hover:bg-gray-700
							focus:outline-none focus:ring-2 focus:ring-offset-2
							focus:ring-offset-gray-800 focus:ring-white
							"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? (
                <Icon icon="icomoon-free:cross" />
              ) : (
                <Icon icon="fa:bars" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link) => (
              <NavLink
                className="
								text-gray-300 hover:bg-gray-700 hover:text-white
								block text-base font-medium
								px-3 py-2 rounded-md
								"
                key={link.id}
                to={link.link}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
