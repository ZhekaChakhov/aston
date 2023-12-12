/// <reference types="vite-plugin-svgr/client" />

// import React from "react";
import type { PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";

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
    link: "/search",
  },
  {
    id: 3,
    title: "Избранное",
    link: "/favorites",
  },
  {
    id: 4,
    title: "История",
    link: "/history",
  },
];

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header className="shadow-sm bg-white">
        <nav className="container p-7 text-center">
          <Link to="/">
            <ReactLogo className="w-1/4 h-1/3 mx-auto" />
          </Link>
        </nav>
      </header>
      <div className="container mx-auto p-4 flex justify-between border-t-2">
        <ul className="flex gap-4 text-2xl">
          {navlinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  [
                    isActive
                      ? "active p-3 rounded-md inline-block font-bold"
                      : "p-3 rounded-md inline-block font-bold",
                  ].join(" ")
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto p-6 bg-gray-50">{children}</div>
    </div>
  );
};
