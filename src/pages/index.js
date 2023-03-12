import Head from "next/head";
import { Loader, VideosGrid } from "@/components";
import { customFetch } from "@/utils/customFetch";
import Layout from "@/layout/Index";
import { Typography } from "@mui/material";

export default function Index({ videos }) {
  if (!videos) return <Loader />;

  return (
    <>
      <Head>
        <title>Home videos - Yt-Premium</title>
        <meta name="description" content="Feed videos" />
      </Head>
      <Layout>
        <Typography component="h1" variant="h4" fontWeight="bold" mb={2}>
          <span className="cap red">Home</span> videos
        </Typography>
        <VideosGrid videos={videos} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ res }) {
  const videos = await customFetch(`search?part=snippet`).then(
    (data) => data.items
  );

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: { videos },
    revalidate: 10, // In seconds
  };
}
