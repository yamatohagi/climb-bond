// @mui
import {
  Stack,
  Container,
  Typography,
  Button,
  Divider,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projects',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'Happy clients',
    total: 32000,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        alt="landing about"
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src="/assets/images/marketing/marketing_post_hero.jpg"
        // @ts-expect-error TS(2304): Cannot find name 'ratio'.
        ratio="16/9"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          borderRadius: 1.5,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 5, md: 10 },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      <Grid
        // @ts-expect-error TS(2552): Cannot find name 'container'. Did you mean 'Contai... Remove this comment to see the full error message
        container
        // @ts-expect-error TS(2304): Cannot find name 'columnSpacing'.
        columnSpacing={{ xs: 0, md: 3 }}
        // @ts-expect-error TS(2304): Cannot find name 'rowSpacing'.
        rowSpacing={{ xs: 5, md: 0 }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="space-between"
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid
          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          xs={12}
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md={5}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'About'.
            About Us
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h2" sx={{ my: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Who'.
            Who We Are
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'In'.
            In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet,
            // @ts-expect-error TS(2304): Cannot find name 'consectetuer'.
            consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor,
            // @ts-expect-error TS(2304): Cannot find name 'justo'.
            justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            // @ts-expect-error TS(2304): Cannot find name 'turpis'.
            turpis egestas.
          </Typography>

          <Button
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
            endIcon={<Iconify icon="carbon:chevron-right" />}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ my: 5 }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Lean'.
            Lean more
          </Button>
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={12} md={6}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={5}>
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {ROWS.map((row: any) => <Stack
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={row.label}
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              direction="row"
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems="center"
              // @ts-expect-error TS(2304): Cannot find name 'divider'.
              divider={
                <Divider
                  // @ts-expect-error TS(2304): Cannot find name 'flexItem'.
                  flexItem
                  // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
                  orientation="vertical"
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                />
              }
            >
              // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
                <Stack direction="row">
                  // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                  <Typography variant="h2">{fShortenNumber(row: any.total)}</Typography>
                  // @ts-expect-error TS(2304): Cannot find name 'component'.
                  <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                    +
                  </Box>
                </Stack>

                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {row.label}
                </Typography>
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {row.content}
              </Typography>
            </Stack>)}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
