import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function CatalogItems({ data }) {
  var items = [{}, {}, {}, {}];
  function Image() {
    return (
      <CardMedia
        sx={{ borderRadius: "32px" }}
        component="img"
        alt="green iguana"
        maxheight="373"
        image={
          "https://picsum.photos/" + Math.floor(Math.random() * (80 + 1) + 400)
        }
      />
    );
  }
  return (
    <>
      {data.map((value) => (
        <>
          <Grid xs={12} sm={6} md={3} lg={2} >
            <Card
              variant="none"
              style={{ boxShadow: 0, margin: 10 }}
              sx={{ maxHeight: "373", maxWidth: "100%" }}
            >
                <CardActionArea >
              <Carousel
                autoPlay={false}
                children={items.map((item, i) => (
                  <Image key={i} />
                ))}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.country},{value.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </>
      ))}
    </>
  );
}
