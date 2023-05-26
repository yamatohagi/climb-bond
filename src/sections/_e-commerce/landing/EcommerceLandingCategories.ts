// @mui
import { alpha } from '@mui/material/styles';
import { Box, Typography, Container, Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const CATEGORIES = [
  { label: 'Men Clothes', icon: '/assets/icons/e-commerce/ic_men_clothes.svg', path: '#' },
  {
    label: 'Women Clothes',
    icon: '/assets/icons/e-commerce/ic_women_clothes.svg',
    path: '#',
  },
  { label: 'Watches', icon: '/assets/icons/e-commerce/ic_watches.svg', path: '#' },
  {
    label: 'Home Appliances',
    icon: '/assets/icons/e-commerce/ic_home_appliances.svg',
    path: '#',
  },
  { label: 'Sport & Outdoor', icon: '/assets/icons/e-commerce/ic_sport.svg', path: '#' },
  { label: 'Books & Stationery', icon: '/assets/icons/e-commerce/ic_book.svg', path: '#' },
  { label: 'Home & Living', icon: '/assets/icons/e-commerce/ic_home_living.svg', path: '#' },
  { label: 'Health', icon: '/assets/icons/e-commerce/ic_health.svg', path: '#' },
  { label: 'Mobile', icon: '/assets/icons/e-commerce/ic_mobile.svg', path: '#' },
  { label: 'Laptop', icon: '/assets/icons/e-commerce/ic_laptop.svg', path: '#' },
  { label: 'Tablet', icon: '/assets/icons/e-commerce/ic_tablet.svg', path: '#' },
  { label: 'Headphones', icon: '/assets/icons/e-commerce/ic_headphones.svg', path: '#' },
];

// ----------------------------------------------------------------------

export default function EcommerceLandingCategories() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 8 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="h3"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mb: 8,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: { xs: 'center', md: 'unset' },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(2552): Cannot find name 'Categories'. Did you mean 'CATEG... Remove this comment to see the full error message
        Categories
      </Typography>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'gap'.
        gap={3}
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display="grid"
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(2, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'sm'.
          sm: 'repeat(4, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(6, 1fr)',
        }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        {CATEGORIES.map((category: any) => <Stack
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={category.label}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            px: 1,
            py: 3,
            borderRadius: 2,
            cursor: 'pointer',
            border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
            '&:hover': {
              boxShadow: (theme: any) => `0 0 0 2px ${theme.palette.text.primary}`,
            },
          }}
        >
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box sx={{ mb: 2, p: 1.5, bgcolor: 'background.neutral', borderRadius: '50%' }}>
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            <Image src={category.icon} sx={{ width: 40, height: 40 }} />
          </Box>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="subtitle2" line={1}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {category.label}
          </TextMaxLine>
        </Stack>)}
      </Box>
    </Container>
  );
}
