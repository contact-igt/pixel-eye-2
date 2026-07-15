import { Fragment } from "react";
import TreatmentBanner from "@/common/Treatment/TreatmentBanner";
import TreatmentSymptoms from "@/common/Treatment/TreatmentSymptoms";
import TreatmentCauses from "@/common/Treatment/TreatmentCauses";
import TreatmentTypes from "@/common/Treatment/TreatmentTypes";
import TreatmentTypesCards from "@/common/Treatment/TreatmentTypesCards";
import TreatmentDiagnosis from "@/common/Treatment/TreatmentDiagnosis";
import TreatmentClinicalExpertise from "@/common/Treatment/TreatmentClinicalExpertise";
import TreatmentClinicalExpertiseSingle from "@/common/Treatment/TreatmentClinicalExpertiseSingle";
import TreatmentGetStarted from "@/common/Treatment/TreatmentGetStarted";
import TreatmentFaq from "@/common/Treatment/TreatmentFaq";
import TreatmentSurgicalOptions from "@/common/Treatment/TreatmentSurgicalOptions";
import SuggestedReads from "@/component/About/SuggestedReads";
import CataractFaqFallback from "@/common/Treatment/serviceSpecific/CataractFaq";
import TreatmentApproach from "@/common/Treatment/serviceSpecific/CataractTreatmentApproach";
import CataractApproach from "@/common/Treatment/serviceSpecific/CataractApproach";
import { KeratoconusApproach } from "@/common/Treatment/serviceSpecific/KeratoconusApproach/index";
import styles from "./styles.module.css";

/**
 * Maps section keys to render functions.
 * Each function receives the full `treatment` config and returns JSX (or null).
 */
const SECTION_MAP = {
  banner: (t) => <TreatmentBanner key="banner" data={t.banner} slug={t.slug} />,
  symptoms: (t) => (
    <TreatmentSymptoms key="symptoms" data={t.symptoms} slug={t.slug} />
  ),
  causes: (t) =>
    t.causes ? <TreatmentCauses key="causes" data={t.causes} /> : null,
  types: (t) => {
    if (!t.types) return null;
    // Cataract & Lasik use the simple image-card carousel (no hero banner,
    // no per-slide description). All other pages use the hero-banner variant.
    const useCardsVariant = t.slug === "cataract" || t.slug === "lasik";
    const TypesComponent = useCardsVariant
      ? TreatmentTypesCards
      : TreatmentTypes;
    return <TypesComponent key="types" data={t.types} slug={t.slug} />;
  },
  diagnosis: (t) =>
    t.diagnosis ? (
      <TreatmentDiagnosis key="diagnosis" data={t.diagnosis} slug={t.slug} />
    ) : null,
  clinicalExpertise: (t) => {
    if (!t.clinicalExpertise) return null;
    // Single variant keeps the legacy desktop/tablet card and multi-doctor mobile view by default.
    const useSingleOnDesktop = t.clinicalExpertise.variant === "single";
    const useSingleOnMobile = t.clinicalExpertise.mobileVariant === "single";
    if (useSingleOnDesktop && useSingleOnMobile) {
      return (
        <TreatmentClinicalExpertiseSingle
          key="clinicalExpertise"
          data={t.clinicalExpertise}
          slug={t.slug}
        />
      );
    }
    if (useSingleOnDesktop) {
      return (
        <div key="clinicalExpertise">
          <div className={styles.desktopOnly}>
            <TreatmentClinicalExpertiseSingle
              data={t.clinicalExpertise}
              slug={t.slug}
            />
          </div>
          <div className={styles.mobileOnly}>
            <TreatmentClinicalExpertise
              data={t.clinicalExpertise}
              slug={t.slug}
            />
          </div>
        </div>
      );
    }
    return (
      <TreatmentClinicalExpertise
        key="clinicalExpertise"
        data={t.clinicalExpertise}
        slug={t.slug}
      />
    );
  },
  faq: (t) =>
    t.faq ? (
      <TreatmentFaq key="faq" data={t.faq} slug={t.slug} />
    ) : (
      <CataractFaqFallback key="faq" />
    ),
  suggestedReads: (_t) => <SuggestedReads key="suggestedReads" />,
  // Cataract-specific sections
  treatmentApproach: (t) =>
    t.treatmentApproach ? (
      <TreatmentApproach
        key="treatmentApproach"
        treatmentContent={t.treatmentApproach}
      />
    ) : null,
  surgicalOptions: (t) =>
    t.surgicalOptions ? (
      <TreatmentSurgicalOptions
        key="surgicalOptions"
        data={t.surgicalOptions}
        slug={t.slug}
      />
    ) : null,
  cataractApproach: (t) =>
    t.cataractApproach ? <CataractApproach key="cataractApproach" /> : null,

  // Lasik-specific sections
  laserVisionOptions: (t) =>
    t.laserVisionOptions ? (
      <TreatmentTypes
        key="laserVisionOptions"
        data={t.laserVisionOptions}
        slug={`${t.slug}-laser-options`}
      />
    ) : null,

  // Keratoconus-specific sections
  keratoconusApproach: (_t) => (
    <KeratoconusApproach key="keratoconusApproach" />
  ),
};

/**
 * TreatmentPage
 *
 * Renders a full treatment page by iterating over `treatment.sections`
 * and delegating to the appropriate component via SECTION_MAP.
 *
 * @param {{ treatment: object }} props
 */
const TreatmentPage = ({ treatment }) => {
  if (!treatment || !Array.isArray(treatment.sections)) return null;

  return (
    <>
      {treatment.sections.map((key) => {
        const render = SECTION_MAP[key];
        if (!render) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`TreatmentPage: unknown section key "${key}"`);
          }
          return null;
        }
        return (
          <Fragment key={key}>
            {render(treatment)}
            {key === "clinicalExpertise" && (
              <TreatmentGetStarted slug={treatment.slug} />
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default TreatmentPage;
