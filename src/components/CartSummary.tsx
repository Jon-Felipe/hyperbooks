import { useAppSelector } from '../utils/hooks';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch } from '../utils/hooks';
import { removeFromCart } from '../slices/cartSlice';

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
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

// extra
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
    <Grid container spacing={4} sx={{ marginTop: '20px' }} component='article'>
      {/* cart items */}
      <Grid item md={9} component='section'>
        <CartItemsTable cartItems={cartItems} />
      </Grid>
      {/* cart total summary */}
      <Grid item md={3} component='section'>
        <CartTotalsSummary />
      </Grid>
    </Grid>
  );
}

export default CartSummary;

type CartItemsProps = {
  cartItems: CartItemType[];
};

function CartItemsTable({ cartItems }: CartItemsProps) {
  const dispatch = useAppDispatch();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
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
              <TableCell
                component='th'
                scope='row'
                sx={{
                  letterSpacing: '1px',
                  fontSize: '16px',
                }}
              >
                {book.title}
              </TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>{language}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>${book.price}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>{quantity}</TableCell>
              <TableCell sx={{ letterSpacing: '1px' }}>
                ${(book.price * quantity).toFixed(2)}
              </TableCell>
              <TableCell>
                <IconButton
                  size='small'
                  color='error'
                  onClick={() => dispatch(removeFromCart({ id: book.id }))}
                >
                  <DeleteIcon fontSize='small' color='error' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CartTotalsSummary() {
  return (
    <>
      <Typography component='h3' variant='h5'>
        Cart Totals
      </Typography>
      <Box
        sx={{
          margin: '10px 0',
          paddingBottom: '10px',
          borderBottom: '1px solid #efefef',
        }}
      >
        {/* subtotals */}
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <Typography component='h6' sx={{ fontWeight: 'bold' }}>
            Subtotal
          </Typography>
          <Typography>$130.00</Typography>
        </Box>
        {/* shipping */}
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography component='h6' sx={{ fontWeight: 'bold' }}>
            Shipping
          </Typography>
          <Typography>Free Shipping</Typography>
        </Box>
      </Box>
      {/* shipping */}
      <Box
        component='div'
        sx={{
          marginBottom: '10px',
          paddingBottom: '10px',
          borderBottom: '1px solid #efefef',
        }}
      >
        <FormControl>
          <FormLabel id='shipping'>Shipping</FormLabel>
          <RadioGroup aria-labelledby='shipping'>
            <FormControlLabel
              value='stadard-rates'
              control={<Radio size='small' />}
              label='Standard Rates $3.00'
            />
            <FormControlLabel
              value='pickup'
              control={<Radio size='small' />}
              label='Pickup'
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/* total */}
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
          paddingBottom: '10px',
          borderBottom: '1px solid #efefef',
        }}
      >
        <Typography component='h6' sx={{ fontWeight: 'bold' }}>
          Total
        </Typography>
        <Typography>$145.00</Typography>
      </Box>
      <Button variant='contained' fullWidth>
        Proceed to checkout
      </Button>
    </>
  );
}
