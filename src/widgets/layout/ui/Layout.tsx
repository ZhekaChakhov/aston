/// <reference types="vite-plugin-svgr/client" />

import type { ReactNode } from "react";
// import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "src/entities/NavLinks";
import ReactLogo from "src/shared/assets/icons/Rick_and_Morty.svg?react";
import { Button } from "src/shared/ui/Button/Button";

interface Props {
  isAuth: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Layout = ({ isAuth, onClick, children }: Props) => {
  const buttonStyle =
    "p-3 inline-block font-semibold border-4 border-[#12b488]";
  return (
    <div>
      <div className="shadow-sm bg-white">
        <nav className="container p-7 text-center">
          <Link to="/">
            <ReactLogo className="w-1/4 h-1/3 mx-auto" />
          </Link>
        </nav>
      </div>
      <div className="flex justify-between border-t-2">
        <NavLinks isAuth={isAuth} />
        <div className="flex justify-end p-4 w-1/3 gap-4 text-2xl">
          {isAuth ? (
            <Button onClick={onClick} className={buttonStyle} text="Выйти" />
          ) : (
            <>
              <Link to="/login">
                <Button className={buttonStyle} text="Логин" />
              </Link>
              <Link to="/register">
                <Button className={buttonStyle} text="Регистрация" />
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto p-6 bg-gray-50">{children}</div>
    </div>
  );
};
