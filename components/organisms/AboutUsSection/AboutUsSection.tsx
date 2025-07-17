import { getAboutUsConfig } from "@/src/services/aboutUsService";
import AboutUsSectionClient from "./AboutUsSectionClient";


const AboutUsSection = async () => {
  const aboutUsConfig = await getAboutUsConfig();

  if (!aboutUsConfig) return null;

  return <AboutUsSectionClient data={aboutUsConfig} />;
};

export default AboutUsSection;
