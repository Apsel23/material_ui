import * as React from 'react'
import { Box } from '@mui/system'
import Post from './Post'

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post username="Apsel"/>
      <Post username="Divne"/>
      <Post username="Akash"/>
      <Post username="Ashwin"/>
      <Post username="Albin lijo"/>
    </Box>
  )
}
