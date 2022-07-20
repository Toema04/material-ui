import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'


const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Article/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Group/>
              </ListItemIcon>
              <ListItemText primary="group" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Storefront/>
              </ListItemIcon>
              <ListItemText primary="marketplace" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Person/>
              </ListItemIcon>
              <ListItemText primary="Frinds" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
        </ListItem>
        </List>
      </Box>
  </Box>
  )
}

export default Sidebar