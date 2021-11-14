import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [allProduct, setProduct] = useState([])


    useEffect(() => {
        fetch(`https://sheltered-shore-72007.herokuapp.com/products/explore`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(() => {
                alert("Something went wrong")
            })
    }, [])

    const handleDeleteProduct = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product");
        if (confirm) {
            fetch(`https://sheltered-shore-72007.herokuapp.com/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        //    const remainingOrders = myOrders.filter=(Order => Order._id !==id);
                        const remainingOrders = allProduct.filter(order => order._id !== id);
                        alert('Cancel this order')
                        setProduct(remainingOrders)
                    }
                })
                .catch(() => {
                    alert("Something went wrong")
                })
        }
    }
    return (
        <Box>
            <Container>
                <h2>Manage Products</h2>
            </Container>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, fontSize: '30px' }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ textAlign: 'left' }}>
                                <TableCell>Product Image</TableCell>
                                <TableCell >Product Name</TableCell>
                                <TableCell >Product Price $ </TableCell>
                                <TableCell >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allProduct.map((product) => (
                                <TableRow
                                    key={product._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, textAlign: 'left' }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img
                                            style={{ height: '90px', width: 'auto' }}
                                            src={product.img}
                                            alt={product.name} />
                                    </TableCell>
                                    <TableCell >{product.name.slice(0, 20)}</TableCell>
                                    <TableCell >$ {product.price}</TableCell>
                                    <TableCell > <DeleteOutlineOutlinedIcon onClick={() => handleDeleteProduct(product._id)} title="Cancel this order" /> </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

export default ManageProducts;