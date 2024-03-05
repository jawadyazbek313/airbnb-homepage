import { Divider, Grid, IconButton, Paper, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
  return (
    <>
      <Grid marginTop={"10px"} container spacing={2}>
        <Grid xs={2}> </Grid>
        <Grid xs={8} sx={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', }}>
          <Paper
          
            elevation={0}
            sx={{
              maxWidth:'850px',
              boxShadow: "6",
              height: "66px",
              border: 1,
              borderColor: "transparent",
              borderStyle: "solid",
              borderRadius: "32px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Grid maxWidth={'850px'} container>
              <Grid marginLeft={4} xs={3}>
                <TextField
                  margin="dense"
                  focused
                  placeholder="Search Destinations"
                  id="outlined-basic"
                  label="Where"
                  fullWidth
                  sx={{ borderStyle: "none" }}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid marginLeft={2} xs={2}>
                <TextField
                  focused
                  margin="dense"
                  placeholder="Add dates"
                  id="outlined-basic"
                  label="Check in"
                  fullWidth
                  sx={{ borderStyle: "none" }}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid marginLeft={2} xs={2}>
                <TextField
                  focused
                  margin="dense"
                  placeholder="Add dates"
                  id="outlined-basic"
                  label="Check out"
                  fullWidth
                  sx={{ borderStyle: "none" }}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid marginLeft={2} xs={3}>
                <TextField
                  margin="dense"
                  focused
                  placeholder="Search Destinations"
                  id="outlined-basic"
                  label="Where"
                  fullWidth
                  sx={{ borderStyle: "none" }}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>
              <IconButton size="large" sx={{ marginTop:1, alignItems:'center',justifyContent:'center', height:'100%' }}>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={2}> </Grid>
      </Grid>
      <Divider sx={{ marginTop:"32px" }}  />
    </>
  );
}
