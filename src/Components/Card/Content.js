import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Content({ text, image }) {
  return (
    <Card
      sx={{ maxWidth: 200, maxHeight: 550, background: "none", color: "white" }}
    >
      <CardActionArea
        sx={{
          maxWidth: 200,
          maxHeight: 550,
        }}
      >
        <CardMedia component="img" maxWidth="200" image={image} />
        <CardContent>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
