import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelName = (props) => {
  return (
    <Typography
      color="gray"
      display="flex"
      alignItems="center"
      fontWeight="600"
      whiteSpace={props.component === "h1" ? "initial" : "nowrap"}
      gap={0.75}
      {...props}
    >
      {props.children}
      <CheckCircleIcon
        sx={{
          fontSize: props.component === "h1" ? "14px" : "12px",
          color: "gray",
          marginTop: "-1px",
        }}
      />
    </Typography>
  );
};

export default ChannelName;
