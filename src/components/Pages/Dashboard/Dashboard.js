import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import Pay from './Pay/Pay';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import AddProduct from './Admin/AddProduct/AddProduct';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './Admin/AdminRoute/AdminRoute'


const drawerWidth = 240;


function Dashboard(props) {
    const { user, Logout,isAdmin} = useAuth();
    let { path, url, } = useRouteMatch();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!isAdmin ? (<List>
                <NavLink to={`${url}/myOrders`} style={{ textDecoration: 'none', color: '#000000' }} >
                    <ListItem button >
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'My Orders'} />
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/review`} style={{ textDecoration: 'none', color: '#000000' }} >
                    <ListItem button>
                        <ListItemIcon>
                            <VisibilityOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Review'} />
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/pay`} style={{ textDecoration: 'none', color: '#000000' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <PaymentOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Pay'} />
                    </ListItem>
                </NavLink>
                <ListItem button onClick={Logout}>
                    <ListItemIcon>
                        <LoginOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </ListItem>
            </List>)
                :
                (<List>
                    <NavLink to={`${url}/manageAllOrders`} style={{ textDecoration: 'none', color: '#000000' }} >
                        <ListItem button >
                            <ListItemIcon>
                                <PersonOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Manage All Orders'} />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/addProducts`} style={{ textDecoration: 'none', color: '#000000' }} >
                        <ListItem button>
                            <ListItemIcon>
                                <VisibilityOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Add Products'} />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: '#000000' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <PaymentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Manage Products'} />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '#000000' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <PaymentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Make Admin'} />
                        </ListItem>
                    </NavLink>
                    <ListItem button onClick={Logout}>
                        <ListItemIcon>
                            <LoginOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItem>
                </List>)
            }

            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{ color: "red", fontWeight: 'bold' }}>
                        {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={`${path}/`}>
                        <Dashboard/>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders email={user.email} />
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}



export default Dashboard;