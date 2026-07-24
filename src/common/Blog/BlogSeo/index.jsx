import Head from "next/head";

export default function BlogSeo({ blog }) {
  const seo = blog?.seo || {};
  const hero = blog?.hero || {};
  const title = seo.title || hero.title || "Pixel Eye Blog";
  const description = seo.description || hero.excerpt || "Eye care insights from Pixel Eye Hospitals.";
  const ogImage = seo.ogImage || hero.coverImage;
  const canonicalUrl = seo.canonicalUrl || (blog?.slug ? `/blog/${blog.slug}` : undefined);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: hero.title,
    description,
    image: ogImage,
    datePublished: hero.publishedAt,
    author: hero.author?.name ? { "@type": "Organization", name: hero.author.name } : undefined,
    reviewedBy: hero.reviewer?.name ? { "@type": "Person", name: hero.reviewer.name } : undefined,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {seo.noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
