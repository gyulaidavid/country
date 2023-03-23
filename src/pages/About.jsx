import React from "react";
import { Box,  Typography, Link } from "@mui/material";


function About() {
  return (
    <>
    <Box p={5} textAlign={'justify'} sx={{backgroundColor: '#A7C7E7', color: 'white', borderRadius: 10, margin: 2, boxShadow: 10}}>
      <Box>
        <Typography variant= 'body1' >
          While studying geography with my son, I realized that an app with
          various data could enhance his interest in countries. The project's
          name emphasizes that behind the name of a country, there are many
          aspects to explore. Throughout this application, you can arrange and
          filter countries by population. You can also search for a country's
          official name and filter countries by region to get closer to your
          neighbors. Clicking on the 'Show more' button provides more details,
          and clicking on the name of a country allows you to dive deeper into
          the data.
        </Typography>
      </Box>
      <Box>
        <Typography variant= 'body1' marginTop={3}>
          My future plan is to add, read, and delete favorite countries on a
          personal page using Firebase. The first steps are available in the
          auth branch. I arrived in the IT field after a career change (as seen
          on LinkedIn). This is my first pet project, which I am constantly
          developing. The project contains HTML, CSS, JS, and React. I am
          learning to structure my components while focusing on clean coding. My
          intention is to implement the most popular approaches and best
          practices.
        </Typography>
      </Box>
      <Box>
        <Typography variant= 'body1' marginTop={3}>
          <Link href="https://www.linkedin.com/in/gyulaidavid/" underline="hover" target="_blank">{'Please, visit my LinkedIn profile for further information.'}</Link>
        </Typography>
      </Box>

      </Box>
    </>
  );
}

export default About;
