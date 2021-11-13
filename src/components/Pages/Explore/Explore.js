import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Shared/Product/Product';

const Explore = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://sheltered-shore-72007.herokuapp.com/products/explore`)
        .then(res=> res.json())
        .then(data => setProducts(data))
        .catch(error=> console.log("An Error"))
    },[])
    return (
        <Box sx={{mb:5}}>
            <h1 style={{color:'#01B1E7'}}>ALL Products</h1>
            <Container sx={{ m: '10px auto' }}>
                <Grid container spacing={2}>
                    { products.map(product=> <Product key={product._id}  product={product}/>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Explore;