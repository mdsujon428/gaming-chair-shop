import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../../Shared/Product/Product';
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:7000/products/home`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container sx={{m:'5px auto'}}>
            <Box>
                <Grid container spacing={2}>
                    {
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;