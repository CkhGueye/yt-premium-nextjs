import { Avatar, Stack, Tooltip } from "@mui/material";
import avatar from "@/assets/avatar.jpg";
import Searchbar from "@/components/Searchbar";

const Header = ({ handleMenu }) => (
  <Stack
    className="header"
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      gridColumn: { xs: "1/3", sm: "2/3" },
      columnGap: 3,
    }}
  >
    <Searchbar handleMenu={handleMenu} />
    <Tooltip title="My linkedin" placement="left" arrow>
      <a
        href="https://www.linkedin.com/in/cheikhouwgueye/"
        target="_blank"
        rel="noreferrer"
      >
        <Avatar
          src={avatar.src}
          alt="Ckh"
          sx={{ boxShadow: "0px 0px 10px 0px rgb(71, 200, 242)" }}
        >
          Ckh
        </Avatar>
      </a>
    </Tooltip>
  </Stack>
);

export default Header;
