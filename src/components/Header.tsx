import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../utils/hooks';

// mui
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from '@mui/material/Link';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Header() {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <AppBar position='static' elevation={0} sx={{ bgcolor: '#fff' }}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant='h5'
            sx={{
              flexGrow: { xs: 1, lg: 0 },
              color: '#0e1428',
              fontWeight: 'bold',
              marginRight: { xs: 0, lg: 10 },
            }}
          >
            Hyper Books
          </Typography>
          <Box
            component='nav'
            sx={{ display: { xs: 'none', lg: 'flex' }, columnGap: 4 }}
          >
            <Link component={RouterLink} to='/' underline='none'>
              Book Store
            </Link>
            <Link component={RouterLink} to='/' underline='none'>
              Wishlist
            </Link>
            <Link component={RouterLink} to='/' underline='none'>
              My Collection
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              columnGap: 1,
              marginRight: 1,
            }}
          >
            <IconButton color='primary' sx={{ border: '1px solid #e8e9eb' }}>
              <DarkModeOutlined sx={{ color: '#0e1428' }} />
            </IconButton>
            <IconButton color='primary' sx={{ border: '1px solid #e8e9eb' }}>
              <Badge badgeContent={cartItems.length} showZero color='primary'>
                <ShoppingCartOutlinedIcon sx={{ color: '#0e1428' }} />
              </Badge>
            </IconButton>
          </Box>
          {/* <Chip
            avatar={<Avatar>JD</Avatar>}
            label='Hi John Doe'
            variant='outlined'
            clickable
          /> */}
          <Link component={RouterLink} to='/login' underline='none'>
            <Button
              startIcon={<PersonOutlineOutlinedIcon />}
              variant='outlined'
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
