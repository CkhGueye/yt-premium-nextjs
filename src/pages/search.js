import { Loader, VideosGrid } from "@/components";
import { customFetch } from "@/utils/customFetch";
import { Typography } from "@mui/material";
import Layout from "@/layout/Index";
import Head from "next/head";

export default function Search({ videos, searchTerm }) {
  if (!videos) return <Loader />;

  const documentTitle = `Search for: ${searchTerm} - Yt-Premium`;
  const metaDescription = `Results for ${searchTerm} videos`;

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Layout>
        <Typography component="h1" variant="h4" fontWeight="bold" mb={3}>
          Results for <span className="red">{searchTerm}</span> videos
        </Typography>
        <VideosGrid videos={videos} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query, res }) {
  const searchTerm = query.q;
  const videos = await customFetch(`search?part=snippet&q=${searchTerm}`).then(
    (data) => data.items
  );

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: { videos, searchTerm },
  };
}
