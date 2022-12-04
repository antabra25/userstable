import React from "react";
import {useState} from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {AppBar, Menu, MenuItem, Stack, Toolbar, Button, IconButton} from '@mui/material';


const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="static" sx={{
            display: 'flex',
            justifyContent: 'row',
            width: '100%',
        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                columnGap: '5px'
            }}>
                <PeopleAltIcon/>
                <Stack direction="row">
                    <Button sx={{
                        "&:hover": {
                            backgroundColor: 'secondary.main',
                        }
                    }} color="inherit">Users</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Gallery</Button>
                    <IconButton id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}><DehazeIcon color="secondary.main" fontSize="medium"/></IconButton>
                </Stack>

            </Toolbar>
            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                      'aria-labelledby': 'basic-button',
                  }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}
export default NavBar;