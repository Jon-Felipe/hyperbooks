import { Link as RouterLink } from 'react-router-dom';

// mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// extra
import { dummy_books } from '../utils/constants';
import bookImg from '../assets/book2.jpg';

function BookGridView() {
  return (
    <Grid container spacing={2}>
      {dummy_books.map((book) => (
        <Grid key={book.id} item xs={12} md={6}>
          <Card variant='outlined' sx={{ display: 'flex', height: 200 }}>
            <CardMedia
              component='img'
              image={bookImg}
              sx={{ width: 151 }}
              alt={book.title}
            />
            <CardContent>
              <Typography
                variant='h6'
                component='h3'
                gutterBottom
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                }}
              >
                {book.title}
              </Typography>
              <Typography
                variant='body2'
                component='p'
                gutterBottom
                sx={{
                  color: '#6c757d',
                  fontSize: '12px',
                }}
              >
                {book.category}
              </Typography>
              <Rating
                value={book.rating}
                size='small'
                precision={0.5}
                readOnly
              />
              <Typography
                variant='caption'
                component='p'
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#38b000',
                  margin: '5px 0',
                }}
              >
                ${book.price.toFixed(2)}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '15px',
                }}
              >
                <Button variant='outlined' size='small'>
                  Add To Cart
                </Button>
                <Link component={RouterLink} to={`/book/${book.id}`}>
                  View Book
                </Link>
                <IconButton size='small'>
                  <FavoriteBorderOutlinedIcon fontSize='small' />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BookGridView;
