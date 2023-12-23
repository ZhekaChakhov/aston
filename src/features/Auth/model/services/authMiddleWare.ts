/*eslint-disable*/
import { Middleware } from "redux";

import { login, logout, signup } from "../actions/authThunk";
import { authActions } from "../slices/authSlice";

export const authMiddleware: Middleware =
  (store: any) => (next: any) => (action: any) => {
    const actionPending = [
      login.pending.type,
      signup.pending.type,
      logout.pending.type,
    ].includes(action.type);

    const actionFulfilled = [
      login.fulfilled.type,
      signup.fulfilled.type,
      logout.fulfilled.type,
    ].includes(action.type);

    const actionRejected = [
      login.rejected.type,
      signup.rejected.type,
      logout.rejected.type,
    ].includes(action.type);

    if (actionPending) {
      store.dispatch(authActions.setUser({ uid: null }));
    } else if (actionFulfilled) {
      if (action.payload) {
        store.dispatch(authActions.setUser({ uid: action.payload.uid }));
      } else {
        store.dispatch(authActions.setUser({ uid: null }));
      }
    } else if (actionRejected) {
      console.error("An error occurred during authentication:", action.error);
    }

    // console.log("Action dispatched:ACTION", action);

    return next(action);
  };
