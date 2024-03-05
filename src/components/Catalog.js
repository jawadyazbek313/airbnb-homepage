import React from "react";
import CatalogItems from "../components/CatalogItems";
import { Grid } from "@mui/material";
import data from "../assests/fake_data"
export default function Catalog() {
 
  return (
    <>
      <Grid px={5}  marginTop={2} container>
     
        
        <CatalogItems data={data} />
    
        
      </Grid>
    </>
  );
}
