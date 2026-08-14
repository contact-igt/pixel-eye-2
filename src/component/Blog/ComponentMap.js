import BlogHero from "./BlogHero";
import BlogKeyTakeaways from "./BlogKeyTakeaways";
import BlogRichHtml from "./BlogRichHtml";
import BlogDoctorQuote from "./BlogDoctorQuote";
import BlogImageCards from "./BlogImageCards";
import BlogTable from "./BlogTable";
import BlogNumberedList from "./BlogNumberedList";
import BlogEmergencyCta from "./BlogEmergencyCta";
import BlogFaq from "./BlogFaq";
import BlogDisclaimer from "./BlogDisclaimer";
import BlogArticleSidebar from "./BlogArticleSidebar";
import BlogAppointmentCta from "./BlogAppointmentCta";
import BlogNewsletter from "./BlogNewsletter";
import BlogFeedbackShare from "./BlogFeedbackShare";
import BlogFeedback from "./BlogFeedback";
import BlogShareControls from "./BlogShareControls";
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
  table: BlogTable,
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
  feedback: BlogFeedback,
  share: BlogShareControls,
  spacer: BlogSpacer,
  divider: BlogDivider,
};

const CONTENT_KEYS = new Set(["hero", "rich_article_content", "key_takeaways", "image_comparison", "numbered_list", "expert_quote", "medical_cta", "faq", "feedback", "share", "medical_disclaimer", "table"]);
const BLOG_EDITABLE_KEYS = new Set(["hero", "key_takeaways", "image_comparison", "numbered_list", "expert_quote", "medical_cta", "faq", "feedback", "share", "medical_disclaimer", "table"]);

export const COMPONENT_CAPABILITIES = Object.freeze(Object.fromEntries(
  Object.keys(COMPONENT_MAP).map((key) => [key, Object.freeze({
    editableInBlog: BLOG_EDITABLE_KEYS.has(key),
    requiresBlockId: CONTENT_KEYS.has(key),
    allowsMultiple: true,
    adminEditorKey: BLOG_EDITABLE_KEYS.has(key) ? key : null,
    adminPreviewKey: key,
    websiteRendererKey: key
  })])
));