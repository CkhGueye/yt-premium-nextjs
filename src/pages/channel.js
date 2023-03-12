import { ChannelCard, Loader, VideosGrid } from "@/components";
import { customFetch } from "@/utils/customFetch";
import { Box } from "@mui/material";
import Layout from "@/layout/Index";
import Head from "next/head";

export default function Channel({ channelDetails, channelVideos }) {
  if (!channelDetails) return <Loader />;

  const documentTitle = `${channelDetails?.snippet?.title} - Yt-Premium`;

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content={channelDetails?.snippet?.description}
        />
      </Head>
      <Layout>
        <Box
          sx={{ position: "relative", height: { xs: "300px", sm: "320px" } }}
        >
          <Box
            className="channel-header"
            sx={{ height: { xs: "110px", sm: "150px" } }}
          />
          <ChannelCard channelDetails={channelDetails} />
        </Box>
        <VideosGrid videos={channelVideos} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query, res }) {
  const channelId = query.id;

  const channelDetails = await customFetch(
    `channels?part=snippet&id=${channelId}`
  ).then((data) => data.items[0]);

  const channelVideos = await customFetch(
    `search?channelId=${channelId}&part=snippet%2Cid&order=date`
  ).then((data) => data.items);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: { channelDetails, channelVideos },
  };
}
