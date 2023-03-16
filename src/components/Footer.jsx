import React from "react";
import { Typography, Paper, Box, Container, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { textAlign } from "@mui/system";

function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: 'sticky',
        bottom: 0,
        width: "100%",
      
      }}
      component='footer'
      square
      variant='outlined'
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            my: 2,
            
          }}
        ></Box>
        <Box sx={{ mb: 2, flexGrow: 1, textAlign: "center" }}>
          <Grid
            alignItems='center'
            justifyContent='center'
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 1, sm: 1, md: 12 }}
          >
            <Grid item xs={1}>
              <Typography>
                <FacebookIcon />
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>
              <Link sx={{color: 'black'}} href="https://github.com/gyulaidavid/country"target="_blank"><GitHubIcon /></Link>
                
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>
                
                <Link sx={{color: 'black'}} href="https://www.linkedin.com/in/gyulaidavid/" target="_blank"><LinkedInIcon /></Link>


              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant='caption' color='initial'>
            Copyright ©2023. All Right Reserved.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
