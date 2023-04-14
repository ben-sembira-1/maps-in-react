import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import SideBar from "@/components/sideBar/sideBar";
import SmartMap from "@/components/smartMap/smartMap";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";

const NAV_BAR_HEIGHT_PERCENTAGE = 5;

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Map</title>
        <meta name="description" content="A map with interactive SVGs on it" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid2 container height="100dvh" width="100dvw">
          <Grid2 xs={12} height={`${NAV_BAR_HEIGHT_PERCENTAGE}dvh`}>
            <Navbar />
          </Grid2>
          <Grid2 xs={12}>
            <Divider orientation="horizontal" />
          </Grid2>
          <Grid2
            xs={12}
            height={`${100 - NAV_BAR_HEIGHT_PERCENTAGE}dvh`}
            container
          >
            <Grid2 xs={2}>
              <SideBar />
            </Grid2>
            <Divider orientation="vertical" />
            <Grid2 xs={10} alignItems="center" justifyContent="center">
              <SmartMap />
            </Grid2>
          </Grid2>
        </Grid2>
      </main>
    </>
  );
}
