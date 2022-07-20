import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { React, useState } from 'react'


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#1976d2",
});

const StyledAvatar = styled(Avatar)({
  cursor:"pointer",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display:"flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display:"none",
  }
}));

const Navbar = () => {
  const [open, setOpenT] = useState(false);
  console.log(open)
  return (

    
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm: "block"} ,color:"white"}}>LAMA DEV</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
  <Mail />
</Badge>
        <Badge badgeContent={2} color="error">
  <Notifications />
          </Badge>
          <StyledAvatar onClick={() => setOpenT(true)}>
            <Avatar sx={{ width: "40px", height: "40px" }}
            src='https://images.pexels.com/photos/10831554/pexels-photo-10831554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            onClick={() => setOpenT(true)}
          /></StyledAvatar>
        </Icons>
        <UserBox onClick={ () => setOpenT(true)}>
          <Avatar sx={{ width: "30px", height: "30px" }}
            src='https://images.pexels.com/photos/10831554/pexels-photo-10831554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          />
          <Typography>Saif</Typography>
        </UserBox >
      </StyledToolbar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpenT(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  );
}

export default Navbar