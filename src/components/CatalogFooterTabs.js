import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import TuneIcon from "@mui/icons-material/Tune";
export default function CatalogFooterTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Grid marginTop={"10px"} container spacing={1}>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          
          
        </Tabs>
      </Grid>

    
    
    </Grid>
    <Grid container marginTop={"20px"} spacing={1}>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      <Grid padding={2} item xs={3}> 
          sadasd
      </Grid> <Grid padding={2} item xs={3}> 
          sadasd
      </Grid> <Grid padding={2} item xs={3}> 
          sadasd
      </Grid> <Grid padding={2} item xs={3}> 
          sadasd
      </Grid> <Grid padding={2} item xs={3}> 
          sadasd
      </Grid>
      
      
      

    </Grid>
 </>
  );
}
