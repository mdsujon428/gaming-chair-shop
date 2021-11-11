import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';

const Footer = () => {
   
    return (
        <Box style={{ height: 'auto', width: '100%', backgroundColor: '#111111', color: '#878787' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{ textAlign: 'left' }} variant='h5' component='h2'>
                            Description
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }} variant='body2' component='div'>
                            In our shop we sale various gaming chair.These chairs are vary comfortable.
                            One can sit in this chair hour after hour.
                            These chairs are also suitable for office.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <h1>Some is there</h1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{ textAlign: 'left' }} variant='h5' component='h2'>
                            Contact Us
                        </Typography>
                        <List >
                            <a style={{ textDecoration: 'none', color: '#878787' }} href='https://www.facebook.com/mohammad.sumon.399041'> <ListItem>
                                <ListItemIcon style={{ color: '#878787' }}>
                                    <FacebookIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Gaming Chair"
                                />
                            </ListItem>
                            </a>
                            <ListItem>
                                <ListItemIcon style={{ color: '#878787' }}>
                                    <AddIcCallOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="01700000000"
                                />
                            </ListItem>
                            <a style={{ textDecoration: 'none', color: '#878787' }} href='https://www.facebook.com/mohammad.sumon.399041'> <ListItem>
                                <ListItemIcon style={{ color: '#878787' }}>
                                    <AddLocationAltRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Motalab Plaza"
                                />
                            </ListItem>
                            </a>
                        </List>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;