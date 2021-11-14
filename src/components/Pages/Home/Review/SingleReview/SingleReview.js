import { Paper, Typography } from '@mui/material';
import React from 'react';

const SingleReview = ({ review }) => {
    return (
        <div>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography varian='h3' gutterBottom component='div' sx={{ color: '#10D0E5', fontWeight: 600 }}>
                    {review.userName}
                </Typography>
                <Typography varian='p' gutterBottom component='div' sx={{ color: '#000' }}>
                    {review.message}
                </Typography>
            </Paper>
        </div>
    );
};

export default SingleReview;