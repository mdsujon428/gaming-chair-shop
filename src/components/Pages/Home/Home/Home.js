import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <Box style={{ textAlign: 'left' }}>
            <Banner />
            <Products />
            <Container>
                <Review />
            </Container>
            <Footer />
        </Box>
    );
};

export default Home;