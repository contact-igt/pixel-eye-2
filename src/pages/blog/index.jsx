import { useEffect, useState } from "react";
import BlogListingPage from "@/pagecomponent/Blog/BlogListingPage";
import { fetchPublishedBlogs } from "@/lib/apiService";
import { adaptApiBlogListToLocal } from "@/lib/blogAdapter";

export default function BlogIndexPage({ initialBlogs = [] }) {
  const [blogs, setBlogs] = useState(initialBlogs);

  useEffect(() => {
    async function loadBlogsClientSide() {
      console.log("[Client Fetch] Fetching published blogs from API...");
      const apiBlogs = await fetchPublishedBlogs(1, 50);
      console.log("[Client Fetch API Response Raw]:", apiBlogs);
      const adapted = adaptApiBlogListToLocal(apiBlogs);
      console.log("[Client Fetch Adapted Blogs]:", adapted);
      setBlogs(adapted);
    }

    loadBlogsClientSide();
  }, []);

  return <BlogListingPage blogs={blogs} />;
}

export async function getStaticProps() {
  const apiBlogs = await fetchPublishedBlogs(1, 50);
  const blogs = adaptApiBlogListToLocal(apiBlogs);

  return {
    props: {
      initialBlogs: blogs,
    },
    revalidate: 60,
  };
}