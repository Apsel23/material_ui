import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import styled from '@emotion/styled'

const StyledModel = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
        <Box height={280} width={400} bgcolor={'white'} p={3} borderRadius={5}>
          <Typography variant='h6' color={'gray'} textAlign='center'>
            Create Post{' '}
          </Typography>
        </Box>
      </StyledModel>
    </>
  )
}

export default Add
