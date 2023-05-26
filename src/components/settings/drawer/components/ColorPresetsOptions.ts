import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  CardActionArea,
  FormControlLabel,
} from '@mui/material';
//
// @ts-expect-error TS(6142): Module '../../SettingsContext' was resolved to '/U... Remove this comment to see the full error message
import { useSettingsContext } from '../../SettingsContext';

// ----------------------------------------------------------------------

const BOX_BORDER_RADIUS = 1.5;

const StyledBoxWrap = styled('div')(() => ({
  height: 104,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledBoxPrimary = styled('div')(() => ({
  width: 64,
  height: 64,
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
}));

const StyledBoxSecondary = styled('div')(({ theme }) => ({
  top: 0,
  bottom: 0,
  right: 0,
  margin: 'auto',
  width: '50%',
  height: '120%',
  position: 'absolute',
  borderRadius: '50%',
  [theme.breakpoints.up('md')]: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.sharp,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function ColorPresetsOptions() {
  const { themeColorPresets, onChangeColorPresets, presetsOption } = useSettingsContext();

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ px: 3 }}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="subtitle2" sx={{ py: 3 }}>
        // @ts-expect-error TS(2304): Cannot find name 'Presets'.
        Presets
      </Typography>

      <RadioGroup
        // @ts-expect-error TS(2304): Cannot find name 'dir'.
        dir="ltr"
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={themeColorPresets}
        // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
        onChange={onChangeColorPresets}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ gap: 3, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {presetsOption.map((color: any) => <PresetsOptions
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={color.name}
          // @ts-expect-error TS(2304): Cannot find name 'colorName'.
          colorName={color.name}
          // @ts-expect-error TS(2304): Cannot find name 'primaryColor'.
          primaryColor={color.primary}
          // @ts-expect-error TS(2304): Cannot find name 'secondaryColor'.
          secondaryColor={color.secondary}
          // @ts-expect-error TS(2304): Cannot find name 'selected'.
          selected={color.name === themeColorPresets}
        />)}
      </RadioGroup>
    </Box>
  );
}

// ----------------------------------------------------------------------

function PresetsOptions({
  colorName,
  selected,
  primaryColor,
  secondaryColor
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      variant={selected ? 'elevation' : 'outlined'}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderRadius: BOX_BORDER_RADIUS,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(selected && {
          bgcolor: alpha(primaryColor, 0.08),
          border: `solid 1px ${primaryColor}`,
          boxShadow: `inset 0 4px 12px 0 ${alpha(primaryColor, 0.32)}`,
        }),
      }}
    >
      // @ts-expect-error TS(2749): 'CardActionArea' refers to a value, but is being u... Remove this comment to see the full error message
      <CardActionArea sx={{ borderRadius: BOX_BORDER_RADIUS, color: primaryColor }}>
        // @ts-expect-error TS(2749): 'StyledBoxWrap' refers to a value, but is being us... Remove this comment to see the full error message
        <StyledBoxWrap>
          // @ts-expect-error TS(2749): 'StyledBoxPrimary' refers to a value, but is being... Remove this comment to see the full error message
          <StyledBoxPrimary sx={{ bgcolor: primaryColor }}>
            // @ts-expect-error TS(2749): 'StyledBoxSecondary' refers to a value, but is bei... Remove this comment to see the full error message
            <StyledBoxSecondary
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2304): Cannot find name 'secondaryColor'.
                bgcolor: secondaryColor,
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(selected && {
                  transformOrigin: 'left',
                  transform: 'rotate(25deg)',
                }),
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </StyledBoxPrimary>
        </StyledBoxWrap>

        <FormControlLabel
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label=""
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={colorName}
          // @ts-expect-error TS(2304): Cannot find name 'control'.
          control={<Radio sx={{ display: 'none' }} />}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            top: 0,
            // @ts-expect-error TS(2304): Cannot find name 'margin'.
            margin: 0,
            // @ts-expect-error TS(2304): Cannot find name 'width'.
            width: 1,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: 1,
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            position: 'absolute',
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </CardActionArea>
    </Paper>
  );
}

PresetsOptions.propTypes = {
  colorName: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  selected: PropTypes.bool,
};
