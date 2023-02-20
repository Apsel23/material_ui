import * as React from 'react'
import { Box } from '@mui/system'
import Post from './Post'
import { Skeleton, Stack } from '@mui/material'

export default function Feed() {
  const [loading, setLoading] = React.useState(true)

  setTimeout(() => {
    setLoading(false)
  }, [3000])
  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='circular' height={20} />
          <Skeleton variant='rectangular' height={300} />
        </Stack>
      ) : (
        <>
          <Post username='Apsel' />
          <Post username='Divne' />
          <Post username='Akash' />
          <Post username='Ashwin' />
          <Post username='Albin lijo' />
        </>
      )}
    </Box>
  )
}

// import { Box, Stack, Skeleton } from "@mui/material";
// import React, { useState } from "react";
// import Post from "./Post";

// const Feed = () => {
//   const [loading, setLoading] = useState(true);

//   setTimeout(() => {
//     setLoading(false);
//   }, [3000]);

//   return (
//     <Box flex={4} p={{ xs: 0, md: 2 }}>
//       {loading ? (
//         <Stack spacing={1}>
//           <Skeleton variant="text" height={100} />
//           <Skeleton variant="text" height={20} />
//           <Skeleton variant="text" height={20} />
//           <Skeleton variant="rectangular" height={300} />
//         </Stack>
//       ) : (
//         <>
//           <Post />
//           <Post />
//           <Post />
//           <Post />
//           <Post />
//           <Post />
//         </>
//       )}
//     </Box>
//   );
// };

// export default Feed;
