import { Paper, Typography } from '@mui/material'
import React from 'react'
import CatalogFooterTabs from './CatalogFooterTabs'

export default function FooterCatalog() {
  return (
    <>
    <Paper sx={{ backgroundColor:"#F7F7F7",paddingX:{sm:3,md:40},paddingY:4 }} elevation={0} >
    <Typography variant="h6">Inspiration for future getaways</Typography>
    <CatalogFooterTabs/>
    
    </Paper>
    </>
    
  )
}
