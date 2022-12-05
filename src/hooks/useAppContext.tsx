// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AppContext, Context } from "../components";

//TODO use gatsby default helmet component
export const useAppContext = (): Context => {
  const context = useContext(AppContext);
  return context;
};
