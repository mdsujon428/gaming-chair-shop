import { Container } from '@mui/material';
import React from 'react';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <Container style={{textAlign:'left'}}>
           <Products/>
           <Review/>
        </Container>
    );
};

export default Home;