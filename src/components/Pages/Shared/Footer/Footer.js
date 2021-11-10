import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


const Footer = () => {
    // // const Demo = styled('div')(({ theme }) => ({
    //     backgroundColor: theme.palette.background.paper,
    // }));
    // // const [dense, setDense] = React.useState(false);
    // // const [secondary, setSecondary] = React.useState(false);

    return (
        <Box style={{ height: '250px', width: '100%', backgroundColor: '#111111', color: '#878787' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{ textAlign: 'left' }} variant='h5' component='h2'>
                            description
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
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                    
                                />
                            </ListItem>
                        </List>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;