import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import merge from 'lodash.merge';
import { useMemo } from 'react';
// @mui
import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
//
// @ts-expect-error TS(6142): Module './SettingsContext' was resolved to '/Users... Remove this comment to see the full error message
import { useSettingsContext } from './SettingsContext';

// ----------------------------------------------------------------------

ThemeColorPresets.propTypes = {
  children: PropTypes.node,
};

export default function ThemeColorPresets({ children }: any) {
  const outerTheme = useTheme();

  const { presetsColor } = useSettingsContext();

  const themeOptions = useMemo(
    () => ({
      palette: {
        primary: presetsColor.primary,
        secondary: presetsColor.secondary,
      },
      customShadows: {
        primary: `0 8px 16px 0 ${alpha(presetsColor.primary.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${alpha(presetsColor.secondary.main, 0.24)}`,
      },
    }),
    [presetsColor]
  );

  const theme = createTheme(merge(outerTheme, themeOptions));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
