import { getWhoWEAreConfig } from "@/src/services/whoweareService";
import WhoWeAreSectionClient from "./WhoWeAreSectionClient";


const WhoWeAreSection = async () => {
  const whoweareConfig = await getWhoWEAreConfig();

  if (!whoweareConfig) return null;

  return <WhoWeAreSectionClient data={whoweareConfig} />;
};

export default WhoWeAreSection;
