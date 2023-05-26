import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Button, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { filterStyles } from 'src/utils/cssStyles';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function EcommerceProductItemHero({
  product
}: any) {
  const theme = useTheme();

  const { label, title, caption, coverImg } = product;

  return (
    // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Grid
      // @ts-expect-error TS(2304): Cannot find name 'container'.
      container
      // @ts-expect-error TS(2304): Cannot find name 'rowSpacing'.
      rowSpacing={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        xs: 5,
        // @ts-expect-error TS(2304): Cannot find name 'md'.
        md: 0,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: 10,
        // @ts-expect-error TS(2304): Cannot find name 'px'.
        px: { xs: 3, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid xs={12} md={6}>
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            maxWidth: { md: 440 },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          <Label color="warning" sx={{ mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {label}
          </Label>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="h3" sx={{ mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </TextMaxLine>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="body2" sx={{ mb: 5, color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {caption}
          </TextMaxLine>

          <Button
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component={NextLink}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.eCommerce.product}
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="contained"
            // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Shop'.
            Shop Now
          </Button>
        </Box>
      </Grid>

      // @ts-expect-error TS(2304): Cannot find name 'xs'.
      <Grid xs={12} md={6}>
        <Image
          // @ts-expect-error TS(2304): Cannot find name 'src'.
          src={coverImg}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            ...filterStyles(
              // @ts-expect-error TS(2304): Cannot find name 'theme'.
              `drop-shadow(20px 20px 24px ${alpha(theme.palette.common.black, 0.16)})`
            ),
            // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
            maxWidth: 400,
            // @ts-expect-error TS(2304): Cannot find name 'ml'.
            ml: 'auto',
            // @ts-expect-error TS(2304): Cannot find name 'mr'.
            mr: { xs: 'auto', md: 'unset' },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Grid>
    </Grid>
  );
}

EcommerceProductItemHero.propTypes = {
  product: PropTypes.shape({
    caption: PropTypes.string,
    coverImg: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
  }),
};
