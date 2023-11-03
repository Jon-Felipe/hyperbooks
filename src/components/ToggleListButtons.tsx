// mui
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  value: string;
  onChange: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) => void;
};

function ToggleListButtons({ value, onChange }: Props) {
  return (
    <ToggleButtonGroup value={value} exclusive size='small' onChange={onChange}>
      <ToggleButton value='grid' size='small'>
        <GridViewRoundedIcon fontSize='small' />
      </ToggleButton>
      <ToggleButton value='list' size='small'>
        <MenuIcon fontSize='small' />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleListButtons;
