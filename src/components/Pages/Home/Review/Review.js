import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from "@mui/material"
import SingleReview from './SingleReview/SingleReview';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://sheltered-shore-72007.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Box sx={{my:5}}>
            <Container>
                <h1 style={{color:'#1976D2'}}>Customer Review</h1>
            </Container>
            <Container>
                <Grid container spacing={2} sx={{textAlign:'center'}}>
                    {reviews.map(review => <Grid item xs={12} sm={6} md={4} key={review._id}>
                        <SingleReview review={review} />
                    </Grid>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Review;