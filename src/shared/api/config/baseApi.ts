import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "src/app/providers/store/config/store";

const rawBaseQuery = fetchBaseQuery({
  baseUrl:
    "https://aston-react-f06d7-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const {
    auth: {
      user: { uid },
    },
  } = api.getState() as RootState;

  if (!uid) {
    return {
      error: {
        status: 400,
        statusText: "Bad Request",
        data: "UID NOT FOUND",
      },
    };
  }

  const urlEnd = typeof args === "string" ? args : args.url;
  const adjustedUrl = `${uid}/${urlEnd}`;
  const adjustedArgs =
    typeof args === "string" ? adjustedUrl : { ...args, url: adjustedUrl };

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};
