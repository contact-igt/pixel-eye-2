import BlogFirstBanner from "@/component/Blog/BlogFirstBanner";
import BlogRenderer from "@/common/Blog/BlogRenderer";
import BlogSeo from "@/common/Blog/BlogSeo";

export default function BlogDetailPage({ blog }) {
  return (
    <>
      <BlogSeo blog={blog} />
      <BlogFirstBanner data={blog.banner} />
      <BlogRenderer blog={blog} />
    </>
  );
}
