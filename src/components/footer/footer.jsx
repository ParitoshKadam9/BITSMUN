import React from 'react'
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Link } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
function Footer() {
    return (

      <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#e5f2f3"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>About Bitsmun</Box>
              <Box>
                insert some text about bitsmun hyderabad
              </Box>
              <Box>
                Et minim consequat nisi occaecat adipisicing consequat amet ex. Do id eu esse non duis labore. Veniam non nulla Lorem eu. In enim sunt sint tempor voluptate Lorem. Ad eu id enim deserunt culpa.
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Links</Box>
              <Box>
                <Link href="/" color="inherit">
                  Team
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Theme
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact Us!</Box>
              <Box>
              <form>
      <TextField label="Full Name" fullWidth autocomplete="none"/>
      <TextField label="Email" fullWidth autocomplete="none"/>
      <TextField label="Message" fullWidth multiline rows={5} autocomplete="none"/>
      <Button type="submit">Submit</Button>
    </form>
              </Box>
      
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            BITSMUN Hyderabad&reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
    );
}

export default Footer


