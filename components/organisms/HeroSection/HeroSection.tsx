import { getHeroConfig } from "@/src/services/heroSectionService";
import HeroSectionClient from "./HeroSectionClient";


const HeroSection = async () => {
  const data = await getHeroConfig();
  return <HeroSectionClient data={data}/>;
};

export default HeroSection;