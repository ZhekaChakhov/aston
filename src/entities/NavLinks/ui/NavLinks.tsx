/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";

import { privateLinks, publicLinks } from "../utils/consts";

interface Props {
  isAuth: boolean;
}

export const NavLinks = ({ isAuth }: Props) => {
  return (
    <div className="flex justify-between p-1 lg:p-4 w-1/2">
      <ul className="flex gap-1 md:gap-4 lg:gap-8 text-sm md:text-md lg:text-2xl">
        {isAuth
          ? privateLinks.map((link) => (
              <li key={link.id} id={link.title}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "active py-3 inline-block font-bold"
                        : "py-3 inline-block font-bold",
                    ].join(" ")
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))
          : publicLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "active p-3 inline-block font-bold"
                        : "p-3 inline-block font-bold",
                    ].join(" ")
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
      </ul>
    </div>
  );
};
