import RetinaBanner from "@/component/Service-Retina/banner";
import RetinaSymptoms from "@/component/Service-Retina/symptomsYouNotice";
import RetinaCauses from "@/component/Service-Retina/WhatcanLead";
import RetinaTypes from "@/component/Service-Retina/typesofretina";
import RetinaHowIsDiagnosed from "@/component/Service-Retina/howretinaisDiagnosed";
import RetinaClinicalExpertise from "@/component/Service-Retina/clinicalExpertise";
import RetinaFaq from "@/component/Service-Retina/retinaFaq";
import PatientExperience from "@/component/Service-Retina/patientExperience";
import SuggestedReads from "@/component/About/SuggestedReads";

const ServiceRetinaPageComponent = () => {
    return (
        <>
            <RetinaBanner />
            <RetinaSymptoms />
            <RetinaCauses />
            <RetinaTypes />
            <RetinaHowIsDiagnosed />
            <RetinaClinicalExpertise />
            <RetinaFaq />
            <SuggestedReads />
            <PatientExperience />
        </>
    );
};

export default ServiceRetinaPageComponent;

