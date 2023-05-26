import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Paper,
  Button,
  Container,
  Typography,
  Link,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0.48)} 0%`,
    endColor: `${alpha(theme.palette.common.black, 0.48)} 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function MarketingLandingCaseStudies({
  caseStudies
}: any) {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: 10,
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Our'.
          Our Work
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h2">Case Studies</Typography>
      </Stack>

      <Grid
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'container'.
        container
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          py: { xs: 8, md: 10 },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        {/* Item 1 */}
        // @ts-expect-error TS(2304): Cannot find name 'xs'.
        <Grid xs={6} md={2}>
          // @ts-expect-error TS(2709): Cannot use namespace 'SmallItem' as a type.
          <SmallItem caseStudy={caseStudies[0]} isMdUp={isMdUp} />
        </Grid>

        // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
        {!isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={6} md={2}>
            // @ts-expect-error TS(2709): Cannot use namespace 'SmallItem' as a type.
            <SmallItem caseStudy={caseStudies[5]} isMdUp={isMdUp} />
          </Grid>
        )}

        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container xs={12} sm={12} md={8}>
          {/* Item 2 */}
          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={6} md={9}>
            // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
            {isMdUp ? (
              // @ts-expect-error TS(7006): Parameter 'LargeItem' implicitly has an 'any' type... Remove this comment to see the full error message
              <LargeItem caseStudy={caseStudies[1]} />
            ) : (
              // @ts-expect-error TS(2304): Cannot find name 'isSquare'.
              <SmallItem caseStudy={caseStudies[1]} isSquare isMdUp={isMdUp} />
            )}
          </Grid>

          {/* Item 3 */}
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={6} md={3}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              // @ts-expect-error TS(2709): Cannot use namespace 'SmallItem' as a type.
              <SmallItem caseStudy={caseStudies[2]} isSquare isMdUp={isMdUp} />
            </Stack>
          </Grid>

          {/* Item 4 */}
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={6} md={3}>
            // @ts-expect-error TS(2709): Cannot use namespace 'SmallItem' as a type.
            <SmallItem caseStudy={caseStudies[3]} isSquare isMdUp={isMdUp} />
          </Grid>

          {/* Item 5 */}
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={6} md={9}>
            // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
            {isMdUp ? (
              // @ts-expect-error TS(7006): Parameter 'LargeItem' implicitly has an 'any' type... Remove this comment to see the full error message
              <LargeItem caseStudy={caseStudies[4]} />
            ) : (
              // @ts-expect-error TS(2304): Cannot find name 'isSquare'.
              <SmallItem caseStudy={caseStudies[4]} isSquare isMdUp={isMdUp} />
            )}
          </Grid>
        </Grid>

        {/* Item 6 */}
        // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
        {isMdUp && (
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={6} md={2}>
            // @ts-expect-error TS(2709): Cannot use namespace 'SmallItem' as a type.
            <SmallItem caseStudy={caseStudies[5]} isMdUp={isMdUp} />
          </Grid>
        )}
      </Grid>

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.marketing.caseStudies}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'View'.
          View all
        </Button>
      </Stack>
    </Container>
  );
}

MarketingLandingCaseStudies.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function LargeItem({
  caseStudy
}: any) {
  const { coverImg, title, category, description } = caseStudy;

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 2,
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => theme.customShadows.z24,
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns: {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ p: 0.75 }}>
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        <Image alt="cover" src={coverImg} ratio="3/4" sx={{ borderRadius: 2 }} />
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {category}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {description}
          </Typography>
        </div>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component={NextLink}
          // @ts-expect-error TS(2304): Cannot find name 'href'.
          href={paths.marketing.caseStudy}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="small"
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color="inherit"
          // @ts-expect-error TS(2304): Cannot find name 'endIcon'.
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Learn'.
          Learn more
        </Button>
      </Stack>
    </Paper>
  );
}

LargeItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function SmallItem({
  caseStudy,
  isSquare,
  isMdUp
}: any) {
  const { coverImg, title, category } = caseStudy;

  return (
    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link component={NextLink} href={paths.marketing.caseStudy}>
      // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Paper
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={m.div}
        // @ts-expect-error TS(2304): Cannot find name 'whileHover'.
        whileHover="hover"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ position: 'relative', cursor: 'pointer', borderRadius: 2, overflow: 'hidden' }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={1}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="center"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            width: 1,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: 1,
            // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
            zIndex: 9,
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color: 'common.white',
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: 'center',
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {category}
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h6">{title}</Typography>
        </Stack>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <StyledOverlay />

        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="cover"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src={coverImg}
            // @ts-expect-error TS(2304): Cannot find name 'ratio'.
            ratio={(isSquare && '1/1') || (isMdUp && '3/4') || '1/1'}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </m.div>
      </Paper>
    </Link>
  );
}

SmallItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    title: PropTypes.string,
  }),
  isMdUp: PropTypes.bool,
  isSquare: PropTypes.bool,
};
