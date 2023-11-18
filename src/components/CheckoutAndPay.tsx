// mui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';

function CheckoutAndPay() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
      <Grid item xs={12} md={6}>
        <Typography component='h3' variant='h4' fontWeight='bold'>
          Buyer Info
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          {/* first name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='firstName'>First Name</FormLabel>
              <OutlinedInput
                id='firstName'
                type='text'
                name='firstName'
                placeholder='First Name'
              />
            </FormControl>
          </Grid>
          {/* last name */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='lastName'>Last Name</FormLabel>
              <OutlinedInput
                id='lastName'
                type='text'
                name='lastName'
                placeholder='Last Name'
              />
            </FormControl>
          </Grid>
          {/* email address */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <OutlinedInput
                id='email'
                type='text'
                name='email'
                placeholder='Email Address'
              />
            </FormControl>
          </Grid>
          {/* phone number */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='phone'>Phone Number</FormLabel>
              <OutlinedInput
                id='phone'
                type='number'
                name='phone'
                placeholder='Phone Number'
              />
            </FormControl>
          </Grid>
          {/* adderss */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor='address'>Address</FormLabel>
              <OutlinedInput
                id='address'
                type='text'
                name='address'
                placeholder='Home/Work Address'
              />
            </FormControl>
          </Grid>
          {/* country */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='country'>Country</FormLabel>
              <OutlinedInput
                id='country'
                type='text'
                name='country'
                placeholder='Country'
              />
            </FormControl>
          </Grid>
          {/* postal code */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='postalcode'>Postal Code</FormLabel>
              <OutlinedInput
                id='postalcode'
                type='text'
                name='postalcode'
                placeholder='Postal Code'
              />
            </FormControl>
          </Grid>
          {/* city */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='city'>City</FormLabel>
              <OutlinedInput
                id='city'
                type='text'
                name='city'
                placeholder='City'
              />
            </FormControl>
          </Grid>
          {/* notes */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor='notes'>Notes</FormLabel>
              <OutlinedInput
                id='notes'
                type='text'
                name='notes'
                placeholder='Enter your notes here'
                multiline
                rows={4}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography component='h3' variant='h4' fontWeight='bold'>
          Payment
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          {/* name on card */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor='cardName'>Card Name</FormLabel>
              <OutlinedInput
                id='cardName'
                type='text'
                name='cardName'
                placeholder='Name on back of card'
              />
            </FormControl>
          </Grid>
          {/* card number */}
          <Grid item xs={12} md={7}>
            <FormControl fullWidth>
              <FormLabel htmlFor='cardNumber'>Card Number</FormLabel>
              <OutlinedInput
                id='cardNumber'
                type='number'
                name='cardNumber'
                placeholder='Card Number'
              />
            </FormControl>
          </Grid>
          {/* cvv */}
          <Grid item xs={12} md={5}>
            <FormControl fullWidth>
              <FormLabel htmlFor='cvv'>CVV</FormLabel>
              <OutlinedInput
                id='cvv'
                type='text'
                name='cvv'
                placeholder='Card CVV'
              />
            </FormControl>
          </Grid>
          {/* card month */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='cardMonth'>Card Month</FormLabel>
              <OutlinedInput
                id='cardMonth'
                type='text'
                name='cardMonth'
                placeholder='Card Month'
              />
            </FormControl>
          </Grid>
          {/* card year */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor='cardYear'>Card Year</FormLabel>
              <OutlinedInput
                id='cardYear'
                type='number'
                name='cardYear'
                placeholder='Card Year'
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CheckoutAndPay;
