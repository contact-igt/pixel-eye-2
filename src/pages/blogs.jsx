export default function BlogsRedirect() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/blog",
      permanent: false,
    },
  };
}