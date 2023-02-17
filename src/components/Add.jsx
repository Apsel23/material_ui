import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import {
  Add as AddIcon,
  CalendarMonth,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material'
import styled from '@emotion/styled'

const StyledModel = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
})

function Add() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        title='Delete'
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 }, //25px is the radius of the FAB
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModel
        // sx={{height:350, width:350}}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box height={280} width={400} bgcolor={'background.default'} color={'text.primary'}p={3} borderRadius={5}>
          <Typography variant='h6' color={'gray'} textAlign='center'>
            Create Post{' '}
          </Typography>
          <UserBox>
            <Avatar
              alt='Cindy Baker'
              src='https://material-ui.com/static/images/avatar/1.jpg'
            />
            <Typography variant='span' fontWeight={500}>
              Apsel
            </Typography>
          </UserBox>
          <TextField
            id='standard-multiline-static'
            sx={{ width: '100%' }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction={'row'} gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width:'100px'}}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </>
  )
}

export default Add
