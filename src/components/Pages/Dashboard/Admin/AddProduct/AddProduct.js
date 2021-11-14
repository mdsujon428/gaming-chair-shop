import { Button, Container, Grid, TextField } from '@mui/material';
import { Box, width } from '@mui/system';
import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({})
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...addProduct }
        newProduct[field] = value;
        setAddProduct(newProduct)
    }
    const handleAddedProduct = (e) => {
        fetch(`https://sheltered-shore-72007.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("This Product is added successfully")
            }
            )
            .catch(() => {
                alert("Something went wrong")
            })
        e.target.reset()
        e.preventDefault()
    }
    return (
        <Box>
            <Container>
                <h1 style={{ color: '#1976D2' }}>Add Product</h1>
            </Container>
            <Container>
                <form onSubmit={handleAddedProduct}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                sx={{ width: '100%' }}
                                id="outlined-basic"
                                name="price"
                                placeholder="Product Price"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                sx={{ width: '100%' }}
                                id="outlined-basic"
                                name="img"
                                placeholder="Product Image URL"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                id="outlined-basic"
                                name="name"
                                placeholder="Product Name"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                id="outlined-basic"
                                required
                                type="text"
                                name='description'
                                label="Product Description"
                                onBlur={handleOnBlur}
                                multiline
                                rows={4}
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} style={{ textAlign: 'center' }}>
                            <Button type='submit' style={{ backgroundColor: '#1976d2', height: '35px', color: '#fff', width: '100%', padding: "10px" }}> SUBMIT</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default AddProduct;