import React, { useState } from 'react';
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Pets, Home, Message } from "@mui/icons-material";
import GroupIcon from '@mui/icons-material/Group';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { AppBar, Toolbar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem, Icon } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { orange } from '@mui/material/colors';

export default function Navbar ({setCurrentUser, currentUser}) {

// Material UI
const [open, setOpen] = useState(false)

const navigate = useNavigate();

// logout button
const handleLogOut = () => {
  // DELETE `/logout`
  fetch('/logout', {
    method: 'DELETE'
  })
  setCurrentUser(false)
  localStorage.clear();
  navigate("/")
};
  
// Material UI 
  const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
  })

  const Icons = styled(Box)(({ theme }) => ({
    display:"flex" , alignItems:"center" , gap:"13px"
  }))

  return (
    <>
    <AppBar position="sticky" sx={{backgroundColor:"#33691e"}}>
        <StyledToolbar>
          <Typography variant="h5" sx={{ display: {xs: "flex", sm:"flex" }, ml: 1 }}>
            <Icon sx={{ mr: 1, color: orange[50], display: {xs: "flex", sm:"flex" } }} color='primary' component={RouterLink} to="/newsfeed">
                  <Pets />
            </Icon>
            Whiskker
          </Typography>
          <Icons>
            <Tooltip title="My Profile">
              <IconButton sx={{ color: orange[500] }} component={RouterLink} to="/me">
                <Home fontSize="large"/>
              </IconButton>
            </Tooltip>

            <Tooltip title="My Catpanions">
              <IconButton sx={{ color: orange[500] }} component={RouterLink} to="/mycatpanions"> 
                <GroupIcon fontSize="large"/>
              </IconButton>
            </Tooltip>

            <Tooltip title="My Catmails">
              <IconButton sx={{ color: orange[500] }} component={RouterLink} to="/messaging">
                <TextsmsIcon fontSize="large"/>
              </IconButton>
            </Tooltip>

            <Avatar src="https://i.imgur.com/AevJugc.jpg"
            onClick={e=>setOpen(true)}
            />
          </Icons>


        </StyledToolbar>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem component={RouterLink} to="/myaccount" onClick={e=>setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
    </>
  )
}