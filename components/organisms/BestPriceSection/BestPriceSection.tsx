import { getBestConfig } from "@/src/services/bestpriceService";
import BestPriceSectionClient from "./BestPriceSectionClient";


const BestPriceSection = async () => {
  const bestPriceConfig = await getBestConfig();

  if (!bestPriceConfig) return null;

  return <BestPriceSectionClient data={bestPriceConfig} />;
};

export default BestPriceSection;
