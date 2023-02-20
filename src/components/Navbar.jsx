import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material'
import { Mail, Notifications, Psychology } from '@mui/icons-material'
import avatar_pic from '../images/avatar_pic.jpg'
import { Sidebar } from './Sidebar'

export default function Navbar({ setMode, mode }) {
  const [drawOpen, setDrawOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawOpen(open)
  }

  const drawerMenu = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onKeyDown={toggleDrawer(false)}
    >
      <StyledToolBar>
        <Typography variant='h6' textAlign={'center'}>
          OPINION
        </Typography>
      </StyledToolBar>
      <Sidebar displayForMobile={true} setMode={setMode} mode={mode} />
    </Box>
  )

  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  })
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }))
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }))
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  }))

  const [open, setOpen] = React.useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          OPINION
        </Typography>
        <Psychology
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        />
        <Search>
          <InputBase placeholder='search...' />{' '}
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={avatar_pic}
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: 24, height: 24 }} src={avatar_pic} />
          <Typography variant='span'>Apsel</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        // anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
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
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <Drawer open={drawOpen} onClose={toggleDrawer(false)}>
        {drawerMenu()}
      </Drawer>
    </AppBar>
  )
}
