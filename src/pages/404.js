import Layout from "@/layout/Index";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Page not found - Yt-Premium</title>
        <meta name="description" content="Page not found" />
      </Head>
      <Layout>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" fontSize={40}>
            Page not found
          </Typography>
          <Link href="/">
            <Typography sx={{ textDecoration: "underline" }}>
              Go home
            </Typography>
          </Link>
        </Box>
      </Layout>
    </>
  );
}
