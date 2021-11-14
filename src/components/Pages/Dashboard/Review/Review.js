import { Button, Grid } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useAuth from '../../../../hooks/useAuth';


const Review = () => {
    const { user } = useAuth()
    const [review, setReview] = React.useState({});

    const { displayName, email } = user;
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        newReview['userName'] = displayName;
        newReview['userEmail'] = email;
        setReview(newReview)

    }
    const handReviewSubmit = (e) => {

        fetch(`https://sheltered-shore-72007.herokuapp.com/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Your message commit.")
            })
            .catch(() => {
                alert("Something went wrong")
            })
        e.target.reset()

        e.preventDefault()
    }
    return (
        <Box
            style={{ textAlign: 'center' }}
            sx={{
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <div>
                <h2>Leave your Review</h2>
            </div>
            <form onSubmit={handReviewSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            defaultValue={user?.displayName}
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            defaultValue={user?.email}
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            required
                            type="text"
                            name='message'
                            label="Your Message"
                            onBlur={handleOnBlur}
                            multiline
                            rows={4}
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button style={{ width: '100%', backgroundColor: '#1976D2', color: 'white' }} type='submit'> SUBMIT </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default Review;