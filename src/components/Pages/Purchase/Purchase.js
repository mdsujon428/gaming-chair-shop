import { Grid, TextField, Container, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Shared/Product/Product';
import useAuth from '../../../hooks/useAuth'

const Purchase = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const [order, setOrder] = useState({})
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {
        const url = `https://sheltered-shore-72007.herokuapp.com/product/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then(data => setProduct(data))
    }, [])
   
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        newOrder['userName'] = displayName;
        newOrder['userEmail'] = email;
        newOrder['productName'] = product?.name;
        newOrder['productImg'] = product?.img;
        newOrder['productPrice'] = product?.price;
        setOrder(newOrder)
        e.preventDefault()
    }

    const handlePurchaseSubmit = (e) => {
        
        fetch('https://sheltered-shore-72007.herokuapp.com/myOrders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Order Placed Successfully')
            }
        })
        .catch(()=>{
            console.log("Something went wrong")
        })
        e.target.reset()
        e.preventDefault()
    }
   

    return (
        <Container sx={{ m: '10px auto' }}>
            <h1 style={{ textAlign: 'center', color: '#1976D2' }}>Purchase Now</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    {<Product key={product._id} product={product} purchase={'purchase'} />}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <form onSubmit={handlePurchaseSubmit} style={{ display: 'block', margin: '10px 0', height: '180px' }}>
                        <TextField
                            style={{ width: '80%', margin: '5px 0' }}
                            id="standard-basic"
                            required
                            type="text"
                            defaultValue={displayName}
                            disabled
                            label="user name"
                            variant="standard"
                        />
                        <TextField
                            style={{ width: '80%', margin: '5px 0' }}
                            id="standard-basic"
                            required
                            type="email"
                            defaultValue={email}
                            disabled
                            label="email"
                            variant="standard"
                        />
                        <TextField
                            style={{ width: '80%', margin: '5px 0' }}
                            id="standard-basic"
                            required
                            type="text"
                            name="P-number"
                            label="Phone number"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            style={{ width: '80%', margin: '5px 0' }}
                            id="outlined-multiline-static"
                            required
                            label="Your Address"
                            name="address"
                            multiline
                            rows={6}
                            onBlur={handleOnBlur}

                        />
                        <br />
                        <Button
                            style={{ width: '80%', margin: '5px 0',backgroundColor:'blue',color:'#fff'}}
                            type='submit'
                        >SUBMIT</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Purchase;