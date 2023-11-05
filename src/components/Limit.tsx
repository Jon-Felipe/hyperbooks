import { useState } from 'react';

// mui
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Limit() {
  const [amount, setAmount] = useState<string>('10');

  const handleOnAmountChange = (e: SelectChangeEvent) => {
    setAmount(e.target.value as string);
  };

  return (
    <FormControl variant='standard' fullWidth>
      <Select value={amount} onChange={handleOnAmountChange}>
        <MenuItem value='10'>Show 10</MenuItem>
        <MenuItem value='20'>Show 20</MenuItem>
        <MenuItem value='30'>Show 30</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Limit;
