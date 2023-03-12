import Head from "next/head";
import { Loader, VideosGrid } from "@/components";
import { customFetch } from "@/utils/customFetch";
import Layout from "@/layout/Index";
import { categories } from "@/utils/categoriesList";
import { Typography } from "@mui/material";

export default function Index({ videos, category }) {
  if (!videos) return <Loader />;

  function capitalized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const documentTitle = `${capitalized(category)} videos - Yt-Premium`;
  const metaDescription = `List of ${category} videos`;

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Layout home>
        <Typography component="h1" variant="h4" fontWeight="bold" mb={2}>
          <span className="cap red">{category}</span> videos
        </Typography>
        <VideosGrid videos={videos} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = categories.map((item) => {
    return { params: { id: item.name.toLowerCase() } };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const category = params.id;
  const videos = await customFetch(
    `search?part=snippet&q=${category === "home" ? "" : category}`
  ).then((data) => data.items);

  return {
    props: { videos: videos ? videos : null, category },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
