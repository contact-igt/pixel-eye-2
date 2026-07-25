import BlogArticleSidebar from "@/component/Blog/BlogArticleSidebar";
import BlogAppointmentCta from "@/component/Blog/BlogAppointmentCta";
import BlogNewsletter from "@/component/Blog/BlogNewsletter";
import BlogDoctorInsight from "@/component/Blog/BlogDoctorInsight";

const SIDEBAR_BLOCK_MAP = {
  toc: BlogArticleSidebar,
  appointmentCta: BlogAppointmentCta,
  newsletter: BlogNewsletter,
  doctorProfile: BlogDoctorInsight,
};

export default function BlogSidebarBlockRenderer({ blocks = [], articleBlocks = [] }) {
  if (!blocks.length) return null;

  return blocks.map((block) => {
    const SidebarBlock = SIDEBAR_BLOCK_MAP[block.type];
    if (!SidebarBlock) return null;

    return (
      <SidebarBlock
        key={block.id}
        data={block}
        articleBlocks={articleBlocks}
      />
    );
  });
}
