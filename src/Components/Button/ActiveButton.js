import * as React from "react";
import Button from "@mui/material/Button";

export default function ActiveButton({ text }) {
  return (
    <Button
      variant="contained"
      className="w-60"
      style={{ backgroundColor: "white", color: "black" }}
    >
      {text}
    </Button>
  );
}
