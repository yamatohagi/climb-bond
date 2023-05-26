// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, Button, Unstable_Grid2 as Grid } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/count-up' or it... Remove this comment to see the full error message
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
  { title: 'Awards', total: 20, icon: 'carbon:trophy' },
  { title: 'Projects', total: 150, icon: 'carbon:data-vis-4' },
  { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
];

// ----------------------------------------------------------------------

const StyledIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  // @ts-expect-error TS(2538): Type 'undefined' cannot be used as an index type.
  color: theme.palette[color].darker,
  // @ts-expect-error TS(2538): Type 'undefined' cannot be used as an index type.
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    // @ts-expect-error TS(2538): Type 'undefined' cannot be used as an index type.
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: 10,
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={6} lg={5}>
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            <Image alt="teams" src="/assets/illustrations/illustration_teams.svg" />
          </Grid>
        )}

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid
          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          xs={12}
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md={6}
          // @ts-expect-error TS(2304): Cannot find name 'lg'.
          lg={6}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Who We Are?</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Vivamus'.
            Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique.
            // @ts-expect-error TS(2304): Cannot find name 'Nulla'.
            Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.
            // @ts-expect-error TS(2304): Cannot find name 'br'.
            <br />
            // @ts-expect-error TS(2304): Cannot find name 'br'.
            <br />
            // @ts-expect-error TS(2304): Cannot find name 'Nam'.
            Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
            // @ts-expect-error TS(2304): Cannot find name 'dignissim'.
            dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar
            // @ts-expect-error TS(2304): Cannot find name 'varius'.
            varius.
          </Typography>

          <Button
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="outlined"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Check'.
            Check Our Work
          </Button>
        </Grid>
      </Grid>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 10,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap: { xs: 5, md: 8 },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value: any, index: any) => (
          // @ts-expect-error TS(2304): Cannot find name 'div'.
          <div key={value.title}>
            // @ts-expect-error TS(2749): 'StyledIcon' refers to a value, but is being used ... Remove this comment to see the full error message
            <StyledIcon color={COLORS[index]}>
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              <Iconify icon={value.icon} width={48} />
            </StyledIcon>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
              <CountUp
                // @ts-expect-error TS(2304): Cannot find name 'start'.
                start={value.total / 5}
                // @ts-expect-error TS(2304): Cannot find name 'end'.
                end={value.total}
                // @ts-expect-error TS(2304): Cannot find name 'formattingFn'.
                formattingFn={(newValue) => fShortenNumber(newValue)}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              />
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
