import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../../Shared/Product/Product';
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://sheltered-shore-72007.herokuapp.com/products/home`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container sx={{ m: '10px auto' }}>
            <Box>
                <Grid container spacing={2}>
                    {products.map(product => <Grid key={product._id} item xs={12} sm={12} md={4}>
                        <Product  product={product} purchase={''}/>
                    </Grid>)}
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;