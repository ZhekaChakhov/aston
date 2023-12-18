/*eslint-disable*/
import { Middleware } from "redux";

import { login, logout, signup } from "../actions/authThunk";
import { authActions } from "../slices/authSlice";

export const authMiddleware: Middleware =
  (store: any) => (next: any) => (action: any) => {
    const actonPending =
      action.type === login.pending.type ||
      action.type === signup.pending.type ||
      action.type === logout.pending.type;

    const actionFulfilled =
      action.type === login.fulfilled.type ||
      action.type === signup.fulfilled.type ||
      action.type === logout.fulfilled.type;

    const actionRejected =
      action.type === login.rejected.type ||
      action.type === signup.rejected.type ||
      action.type === logout.rejected.type;

    if (actonPending) {
      store.dispatch(authActions.setUser({ uid: null }));
    } else if (actionFulfilled) {
      store.dispatch(authActions.setUser({ uid: action.payload.uid }));
    } else if (actionRejected) {
      console.error("An error occurred during authentication:", action.error);
    }

    // console.log("Action dispatched:ACTION", action);

    return next(action);
  };
