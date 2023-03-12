import { Stack, Box } from "@mui/material";
import { Loader, VideoCard } from ".";

const VideosGrid = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      }}
      gap={2}
    >
      {videos.map(
        (item, idx) =>
          item.id.videoId && (
            <Box className="video-item" key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
            </Box>
          )
      )}
    </Stack>
  );
};

export default VideosGrid;
