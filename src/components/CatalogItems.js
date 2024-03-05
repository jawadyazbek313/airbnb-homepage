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
import StarIcon from '@mui/icons-material/Star';
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
              sx={{borderRadius:12, maxHeight: "373", maxWidth: "100%" }}
            >
                <CardActionArea  >
              <Carousel
                autoPlay={false}
                children={items.map((item, i) => (
                  <Image key={i} />
                ))}
              />

              <CardContent>
                <Grid container>
                  <Grid item xs={10}> <Typography sx={{ fontWeight:'bold' }} gutterBottom variant="body1" margin={0} component="div">
                  {value.country},{value.city} 
                </Typography></Grid>
                <Grid item xs={2}   justifyContent={'center'}>
                 <Typography display={'flex'}> <StarIcon sx={{ width:'25px',height:'25px' }}/> {value.stars}</Typography>
                </Grid>
                </Grid>
               
                <Typography gutterBottom variant="body1"  margin={0} component="div">
                {value.rental_name}
                </Typography>
               
                
                <Typography variant="body2" color="text.secondary">
                {value.date_available} Nights 
                </Typography>
                
                <Typography sx={{ fontWeight:'bold',textDecoration:'underline' }} variant="body2" color="text.secondary">
                {value.price_per_night}$ total before taxes
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
