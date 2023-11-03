import { Link as RouterLink } from 'react-router-dom';

// mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
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
        <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
          <Card variant='outlined'>
            <CardMedia
              sx={{ height: 280 }}
              image={bookImg}
              title={book.title}
            />
            <CardContent>
              <Typography
                component='h3'
                noWrap
                sx={{
                  fontSize: '15px',
                  letterSpacing: '1px',
                }}
              >
                {book.title}
              </Typography>
              <Typography
                component='p'
                sx={{
                  color: '#a9a9a9',
                  letterSpacing: '1px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {book.author}
              </Typography>
              <Typography
                component='p'
                sx={{ fontWeight: 'bold', margin: '5px 0' }}
              >
                ${book.price}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px',
                }}
              >
                <Rating
                  value={book.rating}
                  size='small'
                  precision={0.5}
                  readOnly
                />
                <Typography component='p' variant='body2'>
                  ({book.numOfReviews})
                </Typography>
              </Box>
              <CardActions sx={{ columnGap: '5px' }}>
                <Link
                  component={RouterLink}
                  to={`/book/${book.id}`}
                  variant='button'
                >
                  View Book
                </Link>
                <IconButton size='small' color='error'>
                  <FavoriteBorderOutlinedIcon fontSize='small' color='error' />
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BookGridView;
