/// <reference types="vite-plugin-svgr/client" />
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "src/app/providers/store/config/hooks";
import { NavLinks } from "src/entities/NavLinks";
import { logout } from "src/features/Auth/model";
import { getUser } from "src/features/Auth/model/selector/getUser";
import { setUserToLocalStorage } from "src/features/Auth/model/selector/setUserToLocalStorage";
import ReactLogo from "src/shared/assets/icons/Rick_and_Morty.svg?react";
import { Button } from "src/shared/ui/Button/Button";

interface Props {
  children?: ReactNode;
}

const getCurrentUser = (): string | null => {
  const userStr = localStorage.getItem("currentUser");
  try {
    return JSON.parse(userStr!).uid;
  } catch (error) {
    return null;
  }
};

const removeItem = (): void => {
  localStorage.removeItem("currentUser");
};

export const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  let user = getCurrentUser();

  useAppSelector(getUser);
  useAppSelector(setUserToLocalStorage);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      removeItem();
      user = null;
    } catch (err) {
      /* eslint-disable no-console*/
      console.log(err);
    }
  };

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
        <NavLinks isAuth={!!user!} />
        <div className="flex justify-end p-4 w-1/3 gap-4 text-2xl">
          {user! ? (
            <Button
              onClick={handleLogout}
              className={"bg-red-100 border-red-200"}
              text="Log Out"
            />
          ) : (
            <>
              <Link to="/login">
                <Button
                  className={"bg-blue-100 border-blue-200"}
                  text="Log In"
                />
              </Link>
              <Link to="/register">
                <Button
                  className={"bg-green-100 border-green-200"}
                  text="Sign Up"
                />
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto p-6 bg-gray-50">{children}</div>
    </div>
  );
};
