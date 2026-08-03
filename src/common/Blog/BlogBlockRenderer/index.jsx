import BlogKeyTakeaways from "@/component/Blog/BlogKeyTakeaways";
import BlogRichText from "@/common/Blog/BlogRichText";
import BlogRichHtml from "@/component/Blog/BlogRichHtml";
import BlogNumberedList from "@/component/Blog/BlogNumberedList";
import BlogImageCards from "@/component/Blog/BlogImageCards";
import BlogSymptomsList from "@/component/Blog/BlogSymptomsList";
import BlogDoctorQuote from "@/component/Blog/BlogDoctorQuote";
import BlogDoctorInsight from "@/component/Blog/BlogDoctorInsight";
import BlogEmergencyCta from "@/component/Blog/BlogEmergencyCta";
import BlogFaq from "@/component/Blog/BlogFaq";
import BlogDisclaimer from "@/component/Blog/BlogDisclaimer";
import BlogSuggestedReads from "@/component/Blog/BlogSuggestedReads";
import BlogFeedbackShare from "@/component/Blog/BlogFeedbackShare";
import BlogUnknownBlock from "@/component/Blog/BlogUnknownBlock";
import BlogEmptyState from "@/component/Blog/BlogEmptyState";

const BLOCK_MAP = {
  keyTakeaways: BlogKeyTakeaways,
  richText: BlogRichText,
  richHtml: BlogRichHtml,
  numberedList: BlogNumberedList,
  imageCards: BlogImageCards,
  imageComparison: BlogImageCards,
  symptoms: BlogSymptomsList,
  doctorQuote: BlogDoctorQuote,
  doctorInsight: BlogDoctorInsight,
  emergencyCta: BlogEmergencyCta,
  faq: BlogFaq,
  disclaimer: BlogDisclaimer,
  suggestedReads: BlogSuggestedReads,
  feedbackShare: BlogFeedbackShare,
  doctorProfile: BlogDoctorInsight,
};

export default function BlogBlockRenderer({ blocks = [], variant = "template-1", suggestedBlogs = [], currentSlug }) {
  if (!blocks.length) {
    return process.env.NODE_ENV !== "production" ? <BlogEmptyState /> : null;
  }

  return blocks.map((block) => {
    const BlockComponent = BLOCK_MAP[block.type];

    if (!BlockComponent) {
      return process.env.NODE_ENV !== "production" ? (
        <BlogUnknownBlock key={block.id || block.type} data={block} />
      ) : null;
    }

    return <BlockComponent key={block.id} data={block} variant={variant} blogs={suggestedBlogs} currentSlug={currentSlug} />;
  });
}

