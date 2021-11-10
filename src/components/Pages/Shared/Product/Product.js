import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Product = ({ product }) => {
    const {name,img,description,price} = product;
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Card sx={{ maxWidth: 345 ,m:'4px,0'}}>
                <CardMedia
                    sx={{height:'auto',width:'200px',m:'0 auto'}}
                    component="img"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography sx={{textAlign:'left' ,fontWeight:'bold',color:'#2C2400'}} gutterBottom variant="p" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{textAlign:'left' ,fontWeight:'bold',color:'#F7D000'}} gutterBottom variant="h6" component="div">
                       Price :$ {price}
                    </Typography>
                    <Typography style={{color:'#261F00'}} sx={{textAlign:'left'}} variant="body2" color="text.secondary">
                       {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    
                    <Button size="small">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;