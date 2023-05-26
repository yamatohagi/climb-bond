// @mui
import { useTheme } from '@mui/material/styles';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import { useWidth } from 'src/hooks/useResponsive';
// theme
// @ts-expect-error TS(2307): Cannot find module 'src/theme/typography' or its c... Remove this comment to see the full error message
import { remToPx } from 'src/theme/typography';

// ----------------------------------------------------------------------

export default function useTypography(variant: any) {
  const theme = useTheme();

  const breakpoints = useWidth();

  const key = theme.breakpoints.up(breakpoints === 'xl' ? 'lg' : breakpoints);

  const hasResponsive =
    variant === 'h1' ||
    variant === 'h2' ||
    variant === 'h3' ||
    variant === 'h4' ||
    variant === 'h5' ||
    variant === 'h6';

  const getFont =
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    hasResponsive && theme.typography[variant][key]
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      ? theme.typography[variant][key]
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      : theme.typography[variant];

  const fontSize = remToPx(getFont.fontSize);

  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;

  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const { fontWeight, letterSpacing } = theme.typography[variant];

  return { fontSize, lineHeight, fontWeight, letterSpacing };
}
