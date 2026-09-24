import Head from "next/head";
import DoctorProfile from "@/component/Doctors/DoctorProfile";
import {
  DOCTOR_PROFILES,
  getDoctorProfile,
} from "@/constant/doctorProfiles";

export default function DoctorProfilePage({ doctor }) {
  return (
    <>
      <Head>
        <title>{doctor.name} | Pixel Eye Hospital</title>
        <meta name="description" content={doctor.summary} />
        <link rel="canonical" href={`https://www.pixeleyehospitals.com/doctors/${doctor.id}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${doctor.name} | Pixel Eye Hospital`} />
        <meta property="og:description" content={doctor.summary} />
      </Head>
      <DoctorProfile doctor={doctor} />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: DOCTOR_PROFILES.map((doctor) => ({
      params: { slug: doctor.id },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const doctor = getDoctorProfile(params.slug);

  if (!doctor) {
    return { notFound: true };
  }

  return { props: { doctor } };
}
