import * as React from "react";
import Button from "@mui/material/Button";

export default function DarkButton() {
  return (
    <Button
      variant="contained"
      className="w-60"
      style={{
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      }}
    >
      Ring us on Skype
    </Button>
  );
}
