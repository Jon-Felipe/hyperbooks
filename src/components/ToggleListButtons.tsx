import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {};

function ToggleListButtons({}: Props) {
  return (
    <ToggleButtonGroup>
      <ToggleButton value={''}>
        <GridViewRoundedIcon />
      </ToggleButton>
      <ToggleButton value={''}>
        <MenuIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleListButtons;
