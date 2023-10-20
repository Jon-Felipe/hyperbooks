// components
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

type Props = {};

function Header({}: Props) {
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
              marginRight: { xs: 0, lg: 8 },
            }}
          >
            Hyper Books
          </Typography>
          <Box
            component='form'
            autoComplete='off'
            sx={{ display: { xs: 'none', lg: 'flex' }, flexGrow: 1 }}
          >
            <TextField
              id='search'
              placeholder='Search by title, author or name'
              type='search'
              variant='outlined'
              size='small'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ flexGrow: { xs: 0, lg: 2 } }} />
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
              <Badge badgeContent={0} showZero color='primary'>
                <ShoppingCartOutlinedIcon sx={{ color: '#0e1428' }} />
              </Badge>
            </IconButton>
          </Box>
          <Chip
            avatar={<Avatar>JF</Avatar>}
            label='Welcome JF'
            variant='outlined'
            clickable
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
