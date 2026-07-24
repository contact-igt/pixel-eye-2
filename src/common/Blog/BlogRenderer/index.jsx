import TemplateOne from "@/pagecomponent/Blog/BlogDetailPage/TemplateOne";
import TemplateTwo from "@/pagecomponent/Blog/BlogDetailPage/TemplateTwo";
import CustomBuilderTemplate from "@/pagecomponent/Blog/BlogDetailPage/CustomBuilderTemplate";

const TEMPLATE_MAP = {
  "template-1": TemplateOne,
  "template-2": TemplateTwo,
  "custom-builder": CustomBuilderTemplate,
};

export default function BlogRenderer({ blog }) {
  if (!blog) return null;

  const Template = TEMPLATE_MAP[blog.template] || TemplateOne;
  return <Template blog={blog} />;
}
