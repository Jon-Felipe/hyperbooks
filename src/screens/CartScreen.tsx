import { useState } from 'react';

// components
import CartStepper from '../components/CartStepper';
import CartSummary from '../components/CartSummary';
import CheckoutAndPay from '../components/CheckoutAndPay';

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
        {activeStep == 0 ? (
          <CartSummary setActiveStep={setActiveStep} />
        ) : (
          activeStep == 1 && <CheckoutAndPay />
        )}
      </Box>
    </>
  );
}

export default CartScreen;
