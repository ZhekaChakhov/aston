/// <reference types="vite-plugin-svgr/client" />
import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  useAppDispatch,
  useAppSelector,
} from "src/app/providers/store/config/hooks";
import { ThemeContext } from "src/app/providers/theme/context/Context";
import { NavLinks } from "src/entities/NavLinks";
import { logout } from "src/features/Auth/model";
import { getUser } from "src/features/Auth/model/selector/getUser";
import { setUser } from "src/features/Auth/model/selector/setUser";
import ReactLogo from "src/shared/assets/icons/Rick_and_Morty.svg?react";
import { getCurrentUser } from "src/shared/helpers/getCurrentUser";
import { removeItem } from "src/shared/helpers/removeItem";
import { useChekTheme } from "src/shared/lib/useCheckTheme";
import { Button } from "src/shared/ui/Button/Button";
interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  let user = getCurrentUser();
  useAppSelector(getUser);
  useAppSelector(setUser);

  const { isLight, setIsLight } = useContext(ThemeContext);
  const theme = useChekTheme();

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
    <div className={theme}>
      <div className="shadow-sm">
        <nav className="container p-7 text-center">
          <Link to="/">
            <ReactLogo className="w-1/4 h-1/3 mx-auto" />
          </Link>
        </nav>
      </div>

      <div className="flex justify-between">
        <NavLinks isAuth={!!user!} />

        <div className="flex justify-start lg:justify-end p-4 w-1/3 gap-4 text-md md:text-lg lg:text-2xl">
          <button onClick={() => setIsLight(!isLight)}>
            <Icon icon="mdi:theme-light-dark" width={50} height={50} />
          </button>
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
              <Link to="/register" id="signup-btn">
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
