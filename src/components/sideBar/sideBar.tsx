import React from "react";
import Header from "@/components/header";
import { Divider, Stack } from "@mui/material";

type SideBarOptionProps = {
  title: string;
};

const SideBarOption: React.FC<SideBarOptionProps> = ({ title }) => (
  <Header variant="h4">{title}</Header>
);

const SIDEBAR_STACK_GAP = "1rem";

export default function SideBar() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      spacing={SIDEBAR_STACK_GAP}
      mt={SIDEBAR_STACK_GAP}
    >
      <Header variant="h3">Options</Header>
      <Stack
        divider={<Divider orientation="horizontal" variant="middle" flexItem />}
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={SIDEBAR_STACK_GAP}
      >
        <SideBarOption title="Option 1" />
        <SideBarOption title="Option 2" />
        <SideBarOption title="Option 3" />
        <SideBarOption title="Option 4" />
        <SideBarOption title="Option 5" />
      </Stack>
    </Stack>
  );
}
