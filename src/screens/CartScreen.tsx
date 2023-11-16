import { useState } from 'react';

// components
import CartStepper from '../components/CartStepper';
import CartSummary from '../components/CartSummary';

// mui
import Box from '@mui/material/Box';

const steps = ['Cart Summary', 'Checkout & Pay', 'Order Summary'];

type Props = {};

function CartScreen({}: Props) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        {/* stepper */}
        <CartStepper activeStep={activeStep} steps={steps} />
        {/* cart summary */}
        <CartSummary setActiveStep={setActiveStep} />
      </Box>
    </>
  );
}

export default CartScreen;
