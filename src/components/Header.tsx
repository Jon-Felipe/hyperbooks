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
            sx={{ color: '#0e1428', fontWeight: 'bold', mr: 8 }}
          >
            Hyper Books
          </Typography>
          <Box component='form' autoComplete='off' sx={{ flexGrow: 1 }}>
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
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
            <IconButton color='primary' sx={{ border: '1px solid #e8e9eb' }}>
              <DarkModeOutlined sx={{ color: '#0e1428' }} />
            </IconButton>
            <IconButton color='primary' sx={{ border: '1px solid #e8e9eb' }}>
              <Badge badgeContent={0} showZero color='primary'>
                <ShoppingCartOutlinedIcon sx={{ color: '#0e1428' }} />
              </Badge>
            </IconButton>
            <Chip
              avatar={<Avatar>JF</Avatar>}
              label='Welcome JF'
              variant='outlined'
              clickable
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
