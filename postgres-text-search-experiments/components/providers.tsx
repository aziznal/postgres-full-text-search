"use client";

import { SearchContextProvider } from "@/modules/search/context";
import { PropsWithChildren } from "react";

export const Providers: React.FC<PropsWithChildren> = (props) => {
  return <SearchContextProvider>{props.children}</SearchContextProvider>;
};
