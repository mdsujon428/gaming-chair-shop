import { Container } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <Container style={{ textAlign: 'left' }}>
            <Banner />
            <Products />
            <Review />

        </Container>
    );
};

export default Home;