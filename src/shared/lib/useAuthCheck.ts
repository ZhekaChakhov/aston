import { useEffect } from "react";
import { useAppDispatch } from "src/app/providers/store/config/hooks";
import { authCheck } from "src/features/Auth/model/actions/authThunk";

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);
};
