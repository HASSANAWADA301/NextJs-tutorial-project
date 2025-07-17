import { getServicesConfig } from "@/src/services/servicesService";
import ServicesSectionClient from "./ServicesSectionClient";


const ServicesSection = async () => {
  const serviceConfig = await getServicesConfig();

  if (!serviceConfig) return null;

  return <ServicesSectionClient data={serviceConfig} />;
};

export default ServicesSection;
