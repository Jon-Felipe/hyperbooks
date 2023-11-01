import { useAppSelector } from '../utils/hooks';
import { Link as RouterLink } from 'react-router-dom';

// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// extra
import bookImg from '../assets/book2.jpg';
import { CartItemType } from '../utils/types';

type Props = {};

function CartSummary({}: Props) {
  const { cartItems } = useAppSelector((state) => state.cart);

  if (cartItems.length == 0) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
      >
        <Typography>
          No products found in your cart.{' '}
          <Link to='/' component={RouterLink}>
            Browse products
          </Link>
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={4} sx={{ marginTop: '20px' }}>
      {/* cart items */}
      <Grid item md={9}>
        <CartItemsTable cartItems={cartItems} />
      </Grid>
      {/* cart total summary */}
      <Grid item md={3}>
        {/* cart totals */}
        <Box sx={{ borderBottom: '1px solid #efefef', padding: '10px' }}>
          <Typography component='h3' variant='h6'>
            Cart Totals
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              component='h6'
              variant='body2'
              sx={{ marginTop: '10px' }}
            >
              Subtotal
            </Typography>
            <Typography component='p' variant='body2'>
              $74.00
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              component='h6'
              variant='body2'
              sx={{ marginTop: '10px' }}
            >
              Shipping
            </Typography>
            <Typography component='p' variant='body2'>
              Free Shipping
            </Typography>
          </Box>
        </Box>
        {/* shipping */}
        <Box sx={{ borderBottom: '1px solid #efefef', padding: '10px' }}>
          <Typography component='h3' variant='h6'>
            Shipping
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked size='small' />}
              label='Free Shipping'
            />
            <FormControlLabel
              control={<Checkbox size='small' />}
              label='Flat rate: $15'
            />
            <FormControlLabel
              control={<Checkbox size='small' />}
              label='Local Pickup: $8'
            />
          </FormGroup>
        </Box>
        {/* total */}
        <Box sx={{ borderBottom: '1px solid #efefef', padding: '10px' }}>
          <Typography component='h3' variant='h6'>
            Total
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              component='h6'
              variant='body2'
              sx={{ marginTop: '10px' }}
            >
              Total
            </Typography>
            <Typography component='p' variant='body2'>
              $74.00
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CartSummary;

type CartItemsProps = {
  cartItems: CartItemType[];
};

function CartItemsTable({ cartItems }: CartItemsProps) {
  return (
    <TableContainer>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell
              sx={{ fontSize: '12px', fontWeight: 'bold', color: '#b4b4b4' }}
            >
              Product
            </TableCell>
            <TableCell
              sx={{ fontSize: '12px', fontWeight: 'bold', color: '#b4b4b4' }}
            >
              Language
            </TableCell>
            <TableCell
              sx={{ fontSize: '12px', fontWeight: 'bold', color: '#b4b4b4' }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{ fontSize: '12px', fontWeight: 'bold', color: '#b4b4b4' }}
            >
              Quantity
            </TableCell>
            <TableCell
              sx={{ fontSize: '12px', fontWeight: 'bold', color: '#b4b4b4' }}
            >
              Subtotal
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map(({ book, quantity, language }) => (
            <TableRow key={book.id}>
              <TableCell component='th' scope='row'>
                <Box
                  component='img'
                  src={bookImg}
                  sx={{ width: '50px', height: '80px', objectFit: 'cover' }}
                />
              </TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>{book.title}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>{language}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>${book.price}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>{quantity}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>
                ${book.price * quantity}
              </TableCell>
              <TableCell>
                <IconButton size='small'>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
