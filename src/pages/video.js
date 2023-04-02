import { ChannelName, Loader, VideosGrid } from "@/components";
import Layout from "@/layout/Index";
import { customFetch } from "@/utils/customFetch";
import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function Video({ videoId, videoDetails, videos }) {
  if (!videoDetails) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  const documentTitle = `${title} - Yt-Premium`;

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Box flex="1">
            <Box
              sx={{
                position: "sticky",
                top: "0",
                display: "flex",
                flexDirection: "column",
                height: { xs: "380px", sm: "calc(100vh - 108px)" },
                borderBottom: { xs: "2px solid #757d8b", md: "unset" },
                marginBottom: { xs: 2, md: "0" },
                paddingBottom: { xs: 2, md: "0" },
              }}
            >
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
              />
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                mt={2}
                fontSize={{ xs: 18, sm: 24 }}
              >
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
                sx={{ color: "#aaa", mt: 1, gap: 0.5 }}
              >
                <ChannelName color="rgb(255 255 255 / 80%)" maxWidth="100%">
                  <Link className="ellipsis" href={`/channel?id=${channelId}`}>
                    {channelTitle}
                  </Link>
                </ChannelName>
                <Stack
                  direction="row"
                  gap={2}
                  alignItems="center"
                  justifyContent="space-between"
                  flex={{ xs: "100%", sm: "unset" }}
                >
                  <Typography
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                  >
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                  >
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{ flex: "0 0 260px" }}
            justifyContent="center"
            alignItems="center"
          >
            <VideosGrid videos={videos} />
          </Box>
        </Stack>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query, res }) {
  const videoId = query.id;
  const videoDetails = await customFetch(
    `videos?part=snippet,statistics&id=${videoId}`
  ).then((data) => data.items[0]);

  const videos = await customFetch(
    `search?part=snippet&relatedToVideoId=${videoId}&type=video`
  ).then((data) => data.items);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: { videoDetails, videos, videoId },
  };
}
