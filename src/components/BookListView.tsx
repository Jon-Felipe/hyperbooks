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
            sx={{ display: 'flex', height: { xs: 200, lg: 220 } }}
          >
            <CardMedia
              component='img'
              image={bookImg}
              sx={{ width: { xs: 150, lg: 250 } }}
              alt={book.title}
            />
            <CardContent>
              <Typography
                variant='h4'
                component='h3'
                gutterBottom
                sx={{
                  fontSize: { xs: '14px', lg: '24px' },
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
                  fontSize: { xs: '10px', lg: '14px' },
                }}
              >
                {book.category}
              </Typography>
              <Rating
                value={book.rating}
                size='medium'
                precision={0.5}
                readOnly
              />
              <Typography
                variant='caption'
                component='p'
                sx={{
                  fontSize: { xs: '12px', lg: '16px' },
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
                <Link component={RouterLink} to={`/book/${book.id}`}>
                  View Book
                </Link>
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
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
