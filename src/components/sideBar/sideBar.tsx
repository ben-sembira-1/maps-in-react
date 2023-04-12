import React from "react";
import Header from "@/components/header";
import { Divider, Stack } from "@mui/material";

export default function Body() {
  return (
    <Stack gap="1rem" divider={<Divider />} alignItems="center">
      <Header variant="h2">Option 1</Header>
      <Header variant="h2">Option 2</Header>
      <Header variant="h2">Option 3</Header>
      <Header variant="h2">Option 4</Header>
      <Header variant="h2">Option 5</Header>
    </Stack>
  );
}
