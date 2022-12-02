import {useState} from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {AppBar, Menu, MenuItem, MenuList, Toolbar, Typography} from '@mui/material';


const NavBar = () => {

    const [open, setOpen] = useState(false)

    return (
        <AppBar position="static" sx={{
            display: 'flex',
            justifyContent: 'row'
        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'row',
                columnGap: '5px'
            }}>
                <PeopleAltIcon/>
                <Typography variant='h6' component="a">Users</Typography>
                <Typography variant='h6' component="a">Users</Typography>

            </Toolbar>

            <Menu id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  open={open}
                  onClose={(e) => setOpen(false)}
                  anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                  }}
                  transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                  }}>
                <MenuList variant="menu">
                    <MenuItem component="li">Users</MenuItem>
                    <MenuItem component="li">Config</MenuItem>
                    <MenuItem component="li">LogOut</MenuItem>
                </MenuList>
            </Menu>
        </AppBar>
    );
}
export default NavBar;