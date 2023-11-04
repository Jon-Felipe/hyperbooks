import { useState } from 'react';

// mui
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type Props = {};

function Sort({}: Props) {
  const [amount, setAmount] = useState<string>('latest');

  const handleOnAmountChange = (e: SelectChangeEvent) => {
    setAmount(e.target.value as string);
  };

  return (
    <FormControl variant='standard' fullWidth>
      <Select value={amount} onChange={handleOnAmountChange}>
        <MenuItem value='latest'>Sort: Latest</MenuItem>
        <MenuItem value='oldest'>Sort: Oldest</MenuItem>
        <MenuItem value='a-z'>Sort: A-Z</MenuItem>
        <MenuItem value='z-a'>Sort: Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
