import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.pixeleyehospitals.com").replace(/\/$/, "");
const BRAND = "Pixel Eye Hospital";

const PAGE_META = {
  "/": { title: "Best Eye Hospital in Hyderabad | Pixel Eye Hospital", description: "Pixel Eye Hospital provides cataract, LASIK, retina, glaucoma, cornea, dry eye, squint and paediatric eye care in Hyderabad." },
  "/about": { title: "About Pixel Eye Hospital | Expert Eye Care in Hyderabad", description: "Learn about Pixel Eye Hospital, our patient-first approach, experienced ophthalmologists, and comprehensive eye care in Hyderabad." },
  "/appointment": { title: "Book an Eye Care Appointment | Pixel Eye Hospital", description: "Book an appointment with Pixel Eye Hospital for a comprehensive eye examination, consultation, or treatment in Hyderabad." },
  "/doctors": { title: "Eye Specialists in Hyderabad | Pixel Eye Hospital Doctors", description: "Meet the ophthalmologists at Pixel Eye Hospital, offering specialist cataract, refractive, cornea, glaucoma, retina, and paediatric eye care." },
  "/service": { title: "Eye Care Treatments in Hyderabad | Pixel Eye Hospital", description: "Explore comprehensive eye care treatments at Pixel Eye Hospital, including cataract, LASIK, glaucoma, retina, keratoconus, dry eye, squint, and paediatric care." },
  "/service/cataract": { title: "Cataract Surgery in Hyderabad | Pixel Eye Hospital", description: "Explore advanced cataract evaluation, lens planning, surgery, and recovery support at Pixel Eye Hospital in Hyderabad." },
  "/service/dryeye": { title: "Dry Eye Treatment in Hyderabad | Pixel Eye Hospital", description: "Get a detailed dry eye evaluation and personalised treatment plan at Pixel Eye Hospital in Hyderabad." },
  "/service/glaucoma": { title: "Glaucoma Treatment in Hyderabad | Pixel Eye Hospital", description: "Diagnosis, monitoring, laser treatment, and glaucoma surgery are available at Pixel Eye Hospital in Hyderabad." },
  "/service/keratoconus": { title: "Keratoconus Treatment in Hyderabad | Pixel Eye Hospital", description: "Specialist keratoconus diagnosis and corneal care at Pixel Eye Hospital in Hyderabad." },
  "/service/lasik": { title: "LASIK Eye Surgery in Hyderabad | Pixel Eye Hospital", description: "Learn about LASIK and refractive surgery options, suitability assessment, and personalised vision correction at Pixel Eye Hospital." },
  "/service/pediatric": { title: "Paediatric Eye Care in Hyderabad | Pixel Eye Hospital", description: "Specialist eye care for children, including vision assessment, squint management, and paediatric ophthalmology services." },
  "/service/retina": { title: "Retina Treatment in Hyderabad | Pixel Eye Hospital", description: "Advanced retinal evaluation and treatment for retinal conditions at Pixel Eye Hospital in Hyderabad." },
  "/service/squint": { title: "Squint Treatment in Hyderabad | Pixel Eye Hospital", description: "Specialist squint and strabismus evaluation, treatment, and surgery at Pixel Eye Hospital in Hyderabad." },
  "/privacy-policy": { title: "Privacy Policy | Pixel Eye Hospital", description: "Read the Pixel Eye Hospital privacy policy." },
  "/terms-and-conditions": { title: "Terms and Conditions | Pixel Eye Hospital", description: "Read the Pixel Eye Hospital terms and conditions." },
};

const NO_INDEX = new Set(["/thank-you", "/blogs", "/newsletter/resubscribe", "/newsletter/unsubscribe", "/newsletter/verify"]);

export default function Seo() {
  const router = useRouter();
  const path = router.pathname;

  if (path === "/blog" || path === "/blog/[slug]" || path === "/doctors/[slug]") return null;

  const meta = PAGE_META[path] || { title: BRAND, description: "Comprehensive eye care from Pixel Eye Hospital in Hyderabad." };
  const canonicalPath = (router.asPath || path).split(/[?#]/)[0];
  const canonical = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const noIndex = NO_INDEX.has(path);

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
