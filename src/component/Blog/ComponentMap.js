import BlogHero from "./BlogHero";
import BlogKeyTakeaways from "./BlogKeyTakeaways";
import BlogRichHtml from "./BlogRichHtml";
import BlogDoctorQuote from "./BlogDoctorQuote";
import BlogImageCards from "./BlogImageCards";
import BlogNumberedList from "./BlogNumberedList";
import BlogEmergencyCta from "./BlogEmergencyCta";
import BlogFaq from "./BlogFaq";
import BlogDisclaimer from "./BlogDisclaimer";
import BlogArticleSidebar from "./BlogArticleSidebar";
import BlogAppointmentCta from "./BlogAppointmentCta";
import BlogNewsletter from "./BlogNewsletter";
import BlogFeedbackShare from "./BlogFeedbackShare";
import BlogSpacer from "./BlogSpacer";
import BlogDivider from "./BlogDivider";

export const COMPONENT_MAP = {
  hero: BlogHero,
  key_takeaways: BlogKeyTakeaways,
  rich_article_content: BlogRichHtml,
  article_content: BlogRichHtml,
  expert_quote: BlogDoctorQuote,
  image_comparison: BlogImageCards,
  numbered_list: BlogNumberedList,
  medical_cta: BlogEmergencyCta,
  faq: BlogFaq,
  table_of_contents: BlogArticleSidebar,
  article_table_of_contents: BlogArticleSidebar,
  toc: BlogArticleSidebar,
  medical_disclaimer: BlogDisclaimer,
  disclaimer: BlogDisclaimer,
  appointment_cta: BlogAppointmentCta,
  appointment_card: BlogAppointmentCta,
  newsletter: BlogNewsletter,
  newsletter_card: BlogNewsletter,
  feedback_share: BlogFeedbackShare,
  feedback: BlogFeedbackShare,
  share: BlogFeedbackShare,
  spacer: BlogSpacer,
  divider: BlogDivider,
};
