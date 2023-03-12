import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper
        sx={{ gridTemplateColumns: { xs: "52px auto", lg: "220px auto" } }}
      >
        <Header handleMenu={handleMenu} />
        <Sidebar
          handleMenu={handleMenu}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Main
          className="main"
          sx={{
            gridColumn: { xs: "1/3", sm: "2/3" },
          }}
        >
          {children}
        </Main>
      </Wrapper>
    </>
  );
}

const Main = styled(Box)({
  gridRow: "2/3",
  overflowY: "auto",
  overflowX: "hidden",
  height: "calc(100vh - 108px)",
  paddingRight: "10px",
  marginRight: -8,
});

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateRows: "60px auto",
  gap: 16,
});
