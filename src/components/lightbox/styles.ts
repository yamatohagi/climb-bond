// @mui
import { useTheme, alpha } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function StyledLightbox() {
  const theme = useTheme();

  const inputGlobalStyles = (
    // @ts-expect-error TS(2749): 'GlobalStyles' refers to a value, but is being use... Remove this comment to see the full error message
    <GlobalStyles
      // @ts-expect-error TS(2304): Cannot find name 'styles'.
      styles={{
        '.yarl__root': {
          // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
          '--yarl__thumbnails_thumbnail_padding': 0,
          // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
          '--yarl__thumbnails_thumbnail_border': 'transparent',
          // @ts-expect-error TS(7031): Binding element 'alpha' implicitly has an 'any' ty... Remove this comment to see the full error message
          '--yarl__color_backdrop': alpha(theme.palette.grey[900], 0.9),
          '--yarl__slide_captions_container_background': alpha(theme.palette.grey[900], 0.48),
        },
        // Caption
        '.yarl__slide_title': {
          // @ts-expect-error TS(2304): Cannot find name 'theme'.
          fontSize: theme.typography.h5.fontSize,
          // @ts-expect-error TS(2304): Cannot find name 'fontWeight'.
          fontWeight: theme.typography.h5.fontWeight,
          // @ts-expect-error TS(2552): Cannot find name 'lineHeight'. Did you mean 'inner... Remove this comment to see the full error message
          lineHeight: theme.typography.h5.lineHeight,
        },
        '.yarl__slide_description': {
          // @ts-expect-error TS(2304): Cannot find name 'theme'.
          fontSize: theme.typography.body2.fontSize,
          // @ts-expect-error TS(2304): Cannot find name 'fontWeight'.
          fontWeight: theme.typography.body2.fontWeight,
          // @ts-expect-error TS(2552): Cannot find name 'lineHeight'. Did you mean 'inner... Remove this comment to see the full error message
          lineHeight: theme.typography.body2.lineHeight,
        },
        // Button
        '.yarl__button': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          filter: 'unset',
        },
        // Thumbnails
        '.yarl__thumbnails_thumbnail': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          opacity: 0.48,
          '&.yarl__thumbnails_thumbnail_active': {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            opacity: 1,
          },
        },
        '.yarl__thumbnails_vignette': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          '--yarl__thumbnails_vignette_size': 0,
        },
        // Video
        '.yarl__video_container': {
          // @ts-expect-error TS(2304): Cannot find name 'theme'.
          backgroundColor: theme.palette.common.black,
        },
      }}
    />
  );

  return inputGlobalStyles;
}
