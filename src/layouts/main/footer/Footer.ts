// next
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Link,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/logo' or its co... Remove this comment to see the full error message
import Logo from 'src/components/logo';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { pageLinks, navConfig } from '../nav/config-navigation';
import ListDesktop from './ListDesktop';
// @ts-expect-error TS(6142): Module './ListMobile' was resolved to '/Users/yama... Remove this comment to see the full error message
import ListMobile from './ListMobile';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  '& .MuiButton-startIcon': {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const isMdUp = useResponsive('up', 'md');

  const { pathname } = useRouter();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = isMdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    <Container sx={{ py: 8, textAlign: 'center' }}>
      // @ts-expect-error TS(2304): Cannot find name 'single'.
      <Logo single />

      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        // @ts-expect-error TS(2304): Cannot find name 'All'.
        © 2023. All rights reserved
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Divider />

      <Container
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          overflow: 'hidden',
          // @ts-expect-error TS(2304): Cannot find name 'py'.
          py: { xs: 8, md: 10 },
        }}
      >
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={{ xs: 3, md: 5 }}>
              // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Stack alignItems="flex-start" spacing={3}>
                <Logo />
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  // @ts-expect-error TS(2304): Cannot find name 'The'.
                  The starting point for your next project based on easy-to-customize Material-UI ©
                  // @ts-expect-error TS(2304): Cannot find name 'helps'.
                  helps you build apps faster and better.
                </Typography>
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              <Stack spacing={1} alignItems="flex-start">
                // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                <Typography variant="h6">Community</Typography>
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  // @ts-expect-error TS(2304): Cannot find name 'Documentation'.
                  Documentation
                </Link>
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  // @ts-expect-error TS(2304): Cannot find name 'Changelog'.
                  Changelog
                </Link>
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  // @ts-expect-error TS(2304): Cannot find name 'Contributing'.
                  Contributing
                </Link>
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              <Stack spacing={2}>
                // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
                <Stack spacing={1}>
                  // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  // @ts-expect-error TS(2304): Cannot find name 'variant'.
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    // @ts-expect-error TS(2304): Cannot find name 'Ubscribe'.
                    Ubscribe to our newsletter to receive latest articles to your inbox weekly.
                  </Typography>
                </Stack>

                <TextField
                  // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
                  fullWidth
                  // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
                  hiddenLabel
                  // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
                  placeholder="Email address"
                  // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
                  InputProps={{
                    endAdornment: (
                      // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
                      <InputAdornment position="end">
                        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
                        <Button variant="contained" color="inherit" size="large">
                          // @ts-expect-error TS(2304): Cannot find name 'Subscribe'.
                          Subscribe
                        </Button>
                      </InputAdornment>
                    ),
                    sx: { pr: 0.5 },
                  }}
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                />
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              <Stack spacing={2}>
                // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                <Typography variant="h6">Social</Typography>
                // @ts-expect-error TS(2304): Cannot find name 'direction'.
                <Stack direction="row" alignItems="center">
                  // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
                  {_socials.map((social: any) => <IconButton key={social.value} color="primary">
                    // @ts-expect-error TS(2304): Cannot find name 'icon'.
                    <Iconify icon={social.icon} />
                  </IconButton>)}
                </Stack>
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              <Stack spacing={2}>
                // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                <Typography variant="h6">Apps</Typography>
                // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
                <AppStoreButton />
              </Stack>
            </Stack>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={6}>
            // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
            {isMdUp ? (
              // @ts-expect-error TS(7006): Parameter 'Masonry' implicitly has an 'any' type.
              <Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {renderLists.map((list: any) => <ListDesktop key={list.subheader} list={list} />)}
              </Masonry>
            ) : (
              // @ts-expect-error TS(7008): Member '1.5' implicitly has an 'any' type.
              <Stack spacing={1.5}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {renderLists.map((list: any) => <ListMobile key={list.subheader} list={list} />)}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      <Divider />
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={2.5}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="space-between"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ py: 3, textAlign: 'center' }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'All'.
            © 2023. All rights reserved
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" spacing={3} justifyContent="center">
            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Help'.
              Help Center
            </Link>

            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Terms'.
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" flexWrap="wrap" {...other}>
      // @ts-expect-error TS(2749): 'StyledAppStoreButton' refers to a value, but is b... Remove this comment to see the full error message
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack alignItems="flex-start">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Download'.
            Download on the
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Apple'.
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack alignItems="flex-start">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Download'.
            Download from
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Google'.
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
