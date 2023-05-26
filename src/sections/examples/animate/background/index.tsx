import { useState } from 'react';
// @mui
import { Grid, Card } from '@mui/material';
//
import Toolbar from './Toolbar';
import ControlPanel from '../ControlPanel';
import ContainerView from './ContainerView';

// ----------------------------------------------------------------------

export default function BackgroundView() {
  const [count, setCount] = useState(0);

  const [selectVariant, setSelectVariant] = useState('kenburnsTop');

  const handleChangeVariant = (event: any) => {
    setCount(count + 1);
    setSelectVariant(event.target.value);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card sx={{ p: 3 }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Grid container sx={{ mb: 3 }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item xs={9}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Toolbar onRefresh={() => setCount(count + 1)} />
        </Grid>
      </Grid>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Grid container spacing={3}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item xs={9}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContainerView key={count} selectVariant={selectVariant} />
        </Grid>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item xs={3}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ControlPanel
            variantKey={variantKey}
            selectVariant={selectVariant}
            onChangeVariant={handleChangeVariant}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

// ----------------------------------------------------------------------

const variantKey = [
  {
    type: 'kenburns',
    values: ['kenburnsTop', 'kenburnsBottom', 'kenburnsLeft', 'kenburnsRight'],
  },
  {
    type: 'pan',
    values: ['panTop', 'panBottom', 'panLeft', 'panRight'],
  },
  {
    type: 'color change',
    values: ['color2x', 'color3x', 'color4x', 'color5x'],
  },
];
