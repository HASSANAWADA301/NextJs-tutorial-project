"use client";

import { useHeaderConfig } from "@/src/hooks/useHeaderConfig";
import HeaderClient from "./HeaderClient";


const Header = () => {
  const {data: headerConfig,isLoading, isError} = useHeaderConfig();

  if (isLoading) return <p>Loading...</p>;
  if(isError || !headerConfig) return <p>Header Config not Found</p>;

  return (
   
      <HeaderClient headerConfig={headerConfig} />
   
  );
};

export default Header;
