import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Frinds</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp"
            src="https://images.pexels.com/photos/11362014/pexels-photo-11362014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Avatar alt="Travis Howard"
            src=":https://images.pexels.com/photos/11702247/pexels-photo-11702247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Avatar alt="Cindy Baker"
            src="" />
          <Avatar alt="Agnes Walker"
            src="https://images.pexels.com/photos/11110807/pexels-photo-11110807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Avatar alt="Remy Sharp"
            src="https://images.pexels.com/photos/10364392/pexels-photo-10364392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Avatar alt="Trevor Henderson"
            src="https://images.pexels.com/photos/11369434/pexels-photo-11369434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Avatar alt="Sara Deo"
            src="https://images.pexels.com/photos/10697870/pexels-photo-10697870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </AvatarGroup>



        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photes</Typography>
        <ImageList cols={3} rowHeight={100} >
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45' alt=''/>
          </ImageListItem>
        </ImageList>


        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Convesations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar