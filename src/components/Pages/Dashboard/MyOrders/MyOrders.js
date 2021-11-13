import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



const MyOrders = ({ email }) => {
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        fetch(`https://sheltered-shore-72007.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
            .catch(() => console.log('Something went wrong'))
    }, [])
    const handleDeleteProduct = (id) => {
        const confirm = window.confirm("Are You sure,You want to cancel this order");
        if (confirm) {
            fetch(`https://sheltered-shore-72007.herokuapp.com/myOrders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        //    const remainingOrders = myOrders.filter=(Order => Order._id !==id);
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        alert('Cancel this order')
                        setMyOrders(remainingOrders)
                    }
                })
                .catch(() => console.log('Something went wrong'))

        }
    }

    return (
        <>
            <h2>Your Orders</h2>
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
                        {myOrders.map((myOrder) => (
                            <TableRow
                                key={myOrder._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, textAlign: 'left' }}
                            >
                                <TableCell component="th" scope="row">
                                    <img
                                        style={{ height: '90px', width: 'auto' }}
                                        src={myOrder.productImg}
                                        alt={myOrder.productName} />
                                </TableCell>
                                <TableCell >{myOrder.productName.slice(0, 20)}</TableCell>
                                <TableCell >$ {myOrder.productPrice}</TableCell>
                                <TableCell > <DeleteOutlineOutlinedIcon onClick={() => handleDeleteProduct(myOrder._id)} title="Cancel this order"/> </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyOrders;