import {
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function HelpLinks() {
  return (
    <Paper
      sx={{
        backgroundColor: "#F7F7F7",
        paddingX: { sm: 3, md: 40 },
        paddingY: 4,
      }}
      elevation={0}
    >
      <Grid container>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: "bold" }}>Support</Typography>
          <List sx={{ padding: 0, margin: 0, marginTop: 1 }}>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: "bold" }}>Hosting</Typography>
          <List sx={{ padding: 0, margin: 0, marginTop: 1 }}>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: "bold" }}>Airbnb</Typography>
          <List sx={{ padding: 0, margin: 0, marginTop: 1 }}>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                marginTop: 1,
              }}
            >
              asdasd
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 10, marginBottom: 3 }} />© 2024 Airbnb, Inc.
      Terms Sitemap Privacy Your Privacy Choices
      <Link
        sx={{
          position: "absolute",
          left: "71%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        href="#"
      >
        <LanguageIcon /> English (US)
      </Link>
      <Link
        sx={{
          position: "absolute",
          left: "76%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        href="#"
      >
        <LanguageIcon /> $USD (US)
      </Link>
      <Link
        sx={{
          position: "absolute",
          left: "82%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        href="#"
      >
        <FacebookIcon />
      </Link>
      <Link
        sx={{
          position: "absolute",
          left: "84%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        href="#"
      >
        <FacebookIcon />
      </Link>
      <Link
        sx={{
          position: "absolute",
          left: "86%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        href="#"
      >
        <LanguageIcon />
      </Link>
    </Paper>
  );
}
