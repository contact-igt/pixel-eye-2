import CataractBanner from "@/component/Service-Cataract/banner";
import TreatmentPage from "@/pagecomponent/TreatmentPage";
import { CATARACT_TREATMENT } from "@/constant/treatments/cataract";

const ServiceCataractPageComponent = () => (
  <>
    <CataractBanner />
    <TreatmentPage treatment={CATARACT_TREATMENT} />
  </>
);

export default ServiceCataractPageComponent;