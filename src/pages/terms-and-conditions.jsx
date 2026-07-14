import LegalPage from "@/pagecomponent/Legal";
import { LEGAL_CONTENT } from "@/constant/legalContent";

export default function TermsAndConditionsPage() {
  return <LegalPage content={LEGAL_CONTENT.terms} />;
}
