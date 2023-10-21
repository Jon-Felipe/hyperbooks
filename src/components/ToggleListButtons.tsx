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
    <ToggleButtonGroup value={value} exclusive onChange={onChange}>
      <ToggleButton value='grid'>
        <GridViewRoundedIcon />
      </ToggleButton>
      <ToggleButton value='list'>
        <MenuIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleListButtons;
