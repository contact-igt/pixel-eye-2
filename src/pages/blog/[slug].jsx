import { useEffect, useState } from "react";
import BlogDetailPage from "@/pagecomponent/Blog/BlogDetailPage";
import { fetchBlogBySlug, fetchPublishedBlogSlugs } from "@/lib/apiService";
import { adaptApiBlogToLocal } from "@/lib/blogAdapter";

export default function BlogDetailRoute({ blog: initialBlog }) {
  const [blog, setBlog] = useState(initialBlog);

  useEffect(() => {
    if (!initialBlog?.slug) return;
    async function loadBlogClientSide() {
      console.log(`[Client Fetch] Fetching single blog detail for slug: ${initialBlog.slug}...`);
      const apiData = await fetchBlogBySlug(initialBlog.slug);
      console.log("[Client Fetch Single Blog Raw Payload]:", apiData);
      const adapted = adaptApiBlogToLocal(apiData);
      console.log("[Client Fetch Single Blog Adapted]:", adapted);
      if (adapted) {
        setBlog(adapted);
      }
    }

    loadBlogClientSide();
  }, [initialBlog?.slug]);

  if (!blog) return null;

  return <BlogDetailPage blog={blog} />;
}

export async function getStaticPaths() {
  const slugs = await fetchPublishedBlogSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const apiData = await fetchBlogBySlug(params.slug);
  const blog = adaptApiBlogToLocal(apiData);

  if (!blog || blog.status !== "published") {
    return { notFound: true };
  }

  return {
    props: { blog },
    revalidate: 60,
  };
}
