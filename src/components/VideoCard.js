import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import ChannelName from "./ChannelName";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: "100%",
      boxShadow: "none",
      borderRadius: 0,
      backgroundColor: "transparent",
    }}
  >
    <Link
      href={videoId && `/video?id=${videoId}`}
      style={{ borderRadius: 8, overflow: "hidden", display: "block" }}
    >
      <CardMedia
        component="img"
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "100%" }, height: { xs: 170, sm: 140 } }}
        loading="lazy"
      />
    </Link>
    <CardContent sx={{ maxHeight: 65, p: 0, mt: 1, "&:last-child": { pb: 0 } }}>
      <Typography
        component="h2"
        variant="subtitle2"
        fontWeight="bold"
        color="#fff"
        maxHeight="44px"
        overflow="hidden"
      >
        <Link href={videoId && `/video?id=${videoId}`} title={snippet?.title}>
          {snippet?.title.slice(0, 60)}
          {snippet?.title.length > 60 && "..."}
        </Link>
      </Typography>
      <ChannelName component="p" variant="subtitle2">
        <Link
          className="ellipsis"
          href={snippet?.channelId && `/channel?id=${snippet?.channelId}`}
        >
          {snippet?.channelTitle}
        </Link>
      </ChannelName>
    </CardContent>
  </Card>
);

export default VideoCard;
