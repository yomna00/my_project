import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={4} direction="row">
      <Button variant="contained">
        Save Booking
      </Button>
    </Stack>
  );
}
