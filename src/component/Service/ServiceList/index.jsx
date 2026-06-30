import { SERVICE_CONTENT } from "@/constant/serviceContent";
import ServiceCard from "@/component/Service/ServiceCard";

const ServiceList = () => {
  return (
    <>
      {SERVICE_CONTENT.sections.map((section, index) => (
        <ServiceCard key={section.id} section={section} index={index} />
      ))}
    </>
  );
};

export default ServiceList;
