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
                placeholder='Your First Name'
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
                placeholder='Your Last Name'
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
                placeholder='Your Email Address'
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
                placeholder='Your Phone Number'
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
                placeholder='Your Address'
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
                placeholder='Your Country'
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
                placeholder='Your Postal Code'
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
                placeholder='Your City'
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        Payment
      </Grid>
    </Grid>
  );
}

export default CheckoutAndPay;
