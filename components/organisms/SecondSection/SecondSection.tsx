import { getSecondSectionConfig } from "@/src/services/secondSection";
import SecondSectionClient from "./SecondSectionClient";


const Header = async () => {
  const SecondSectionConfig = await getSecondSectionConfig();

  if (!SecondSectionConfig) return null;

  return <SecondSectionClient data={SecondSectionConfig} />;
};

export default Header;
