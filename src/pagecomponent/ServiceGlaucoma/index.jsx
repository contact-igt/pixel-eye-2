import GlaucomaBanner from "@/component/Service-Glaucoma/banner";
import GlaucomaSymptoms from "@/component/Service-Glaucoma/symptomsyounotice";
import GlaucomaCauses from "@/component/Service-Glaucoma/whatCanLead";
import TypesOfGlaucoma from "@/component/Service-Glaucoma/typeofglaucoma";
import HowGlaucomaIsDiagnosed from "@/component/Service-Glaucoma/howglaucomaisDiagnosed";
import GlaucomaFaq from "@/component/Service-Cataract/cataractFaq";
import SuggestedReads from "@/component/About/SuggestedReads";
import PatientExperience from "@/component/Service-Cataract/patientsExperience";

const ServiceGlaucomaPageComponent = () => {
    return (
        <>
            <GlaucomaBanner />
            <GlaucomaSymptoms />
            <GlaucomaCauses />
            <TypesOfGlaucoma />
            <HowGlaucomaIsDiagnosed />
            <GlaucomaFaq />
            <SuggestedReads />
            <PatientExperience />
        </>
    );
};

export default ServiceGlaucomaPageComponent;
