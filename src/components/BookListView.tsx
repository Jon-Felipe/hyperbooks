import { Link as RouterLink } from 'react-router-dom';

// mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// extra
import { dummy_books } from '../utils/constants';
import bookImg from '../assets/book2.jpg';

type Props = {};

function BookListView({}: Props) {
  return (
    <Grid container spacing={2}>
      {dummy_books.map((book) => (
        <Grid item key={book.id} xs={12}>
          <Card
            variant='outlined'
            sx={{
              display: { sm: 'flex' },
              padding: '20px',
            }}
          >
            <CardMedia
              component='img'
              image={bookImg}
              title={book.title}
              alt={book.title}
              sx={{
                display: { xs: 'none', sm: 'block' },
                width: 200,
              }}
            />
            <CardContent>
              <Typography
                component='h3'
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                }}
              >
                {book.title}
              </Typography>
              <Typography
                component='p'
                sx={{ color: '#a9a9a9', fontSize: '12px', fontWeight: 'bold' }}
              >
                {book.author}
              </Typography>
              <Typography component='p' variant='body2'>
                {book.description.slice(0, 300)}...
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px',
                  margin: '10px 0',
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
              <Typography
                component='p'
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
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
                <Link component={RouterLink} to={`/book/${book.id}`}>
                  View Book
                </Link>
                <IconButton color='error'>
                  <FavoriteBorderOutlinedIcon color='error' />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BookListView;
