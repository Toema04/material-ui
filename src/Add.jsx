import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"

const FebButton = styled(Fab)({
  color: "white",
  backgroundColor: "#1976d2",
  "&:hover":{
    color: "white",
    backgroundColor: "#1976d2",
  },
})

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: " center",
  justifyContent:"center",
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: " center",
  gap: "20px",
  marginBottom: "10px"
})

const ButtonBo = styled(Button)({
  backgroundColor: "#1976d2",
  // width:"100px",
  "&:hover": {
    backgroundColor: "#1976d2",
  }
})
const ButtonBotton = styled(Button)({
  backgroundColor: "#1976d2",
  width:"100px",
  "&:hover": {
    backgroundColor: "#1976d2",
  }
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)}
        title="Delete"
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
      <FebButton  aria-label="add">
  <AddIcon />
</FebButton>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={2} borderRadius={5} >
          <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar src='https://images.pexels.com/photos/11565646/pexels-photo-11565646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=""
            sx={{width:"30" , height:"30"}}
            />
            <Typography fontWeight={500} variant="span">Sara Deo</Typography>
          </UserBox>
          <TextField
            fullWidth
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3} >
            <EmojiEmotions color='primary'/>
            <Image color="secondary"/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <ButtonBo >Post</ButtonBo>
            <ButtonBotton >
              <DateRange />
            </ButtonBotton>
</ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add