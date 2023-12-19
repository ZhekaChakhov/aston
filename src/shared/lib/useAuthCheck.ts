import React from "react";
import { useAppDispatch } from "src/app/providers/store/config/hooks";
import { authCheck } from "src/features/Auth/model/actions/authThunk";

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();

  React.useLayoutEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);
};
