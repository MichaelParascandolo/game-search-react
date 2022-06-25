import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const GameCard = ({
  game: { name, background_image, metacritic, released, platforms },
}) => {
  return (
    <div className="card">
      <Card
        sx={{
          maxWidth: 500,
          minWidth: 500,
          borderRadius: 10,
          backgroundColor: "#66B2FF",
          border: "2px solid white",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            alt={name}
            src={
              background_image !== null
                ? background_image
                : "https://via.placeholder.com/640x360"
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <span>
                {metacritic !== null ? "Metacritic Score: " + metacritic : ""}
                <br />
              </span>
              <span>{released !== null ? "Released: " + released : ""}</span>
              <br />
              <span>{platforms[0].platform.name || ""} </span>
              <br />
              <span>
                {platforms.map((platform) => {
                  return <span>{platform.name}</span>;
                })}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GameCard;
