import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ChannelName from "./ChannelName";

const CardWrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  translate: "0 -50%",
  display: "flex",
  boxShadow: "none",
  borderRadius: "20px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "auto",
  zIndex: 10,
});

const ChannelCard = ({ channelDetails }) => (
  <CardWrapper sx={{ translate: "0 -50%" }}>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={channelDetails?.snippet?.thumbnails?.high?.url}
        alt={channelDetails?.snippet?.title}
        sx={{
          borderRadius: "50%",
          height: { xs: "150px", sm: "200px" },
          width: { xs: "150px", sm: "200px" },
          margin: "0 auto 8px",
          border: "1px solid #e3e3e3",
        }}
      />
      <ChannelName
        component="h1"
        variant="h6"
        justifyContent="center"
        color="#fff"
        fontWeight="500"
      >
        {channelDetails?.snippet?.title}
      </ChannelName>
      {channelDetails?.statistics?.subscriberCount && (
        <Typography fontSize="15px" fontWeight="600" color="gray">
          {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString(
            "en-US"
          )}{" "}
          Subscribers
        </Typography>
      )}
    </CardContent>
  </CardWrapper>
);

export default ChannelCard;
