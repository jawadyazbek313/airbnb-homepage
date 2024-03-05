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
export default function CatalogTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid marginTop={"10px"} container spacing={1}>
      <Grid item xs={12} md={9}>
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
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />{" "}
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Grid>

      <Box component={Grid} display={{ sm: "none", md: "flex" }} xs={1}>
        <Button
          fullWidth
          style={{
            padding: 10,
            marginTop: 10,
            borderRadius: "12px",
            color: "ButtonText",
            borderColor: "lightgray",
          }}
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          startIcon={<TuneIcon />}
        >
          Filters
        </Button>
      </Box>
      <Box component={Grid} item xs={2} display={{ sm: "none", md: "flex" }}>
        <FormControlLabel
      
          style={{
            display:'flex',
            fontSize: "12px",
            padding: 3,
            borderRadius: "12px",
            color: "ButtonText",
            borderColor: "lightgray",
            border: "1px",
            borderStyle: "solid",
          }}
          value="start"
          control={<Switch sx={{ borderColor: "lightgray" }} color="primary" />}
          label="Display total before taxes"
          labelPlacement="start"
        />
      </Box>
    </Grid>
  );
}
