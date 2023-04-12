import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";

const Logo = () => (
  <Image
    src="/mapicon.png"
    alt="Website icon of a map"
    width="50"
    height="50"
  />
);

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Logo />
      <h1>Smart Map</h1>
    </Stack>
  );
}
