import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Button, Box } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import EcommerceHeader from '../header';
import EcommerceAccountMenu from './EcommerceAccountMenu';

// ----------------------------------------------------------------------

EcommerceAccountLayout.propTypes = {
  children: PropTypes.node,
};

export default function EcommerceAccountLayout({ children }: any) {
  const isMdUp = useResponsive('up', 'md');

  const [menuOpen, setMemuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMemuOpen(true);
  };

  const handleMenuClose = () => {
    setMemuOpen(false);
  };

  return (
    <>
      <EcommerceHeader />

      {isMdUp ? (
        <Container sx={{ my: 5 }}>
          <Typography variant="h3">Account</Typography>
        </Container>
      ) : (
        <Box sx={{ py: 2, mb: 5, borderBottom: (theme) => `solid 1px ${theme.palette.divider}` }}>
          <Container>
            <Button
              size="small"
              color="inherit"
              startIcon={<Iconify icon="carbon:menu" />}
              onClick={handleMenuOpen}
            >
              Account
            </Button>
          </Container>
        </Box>
      )}

      <Container>
        <Stack
          direction={{
            md: 'row',
          }}
          alignItems={{
            md: 'flex-start',
          }}
          sx={{
            mb: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <EcommerceAccountMenu open={menuOpen} onClose={handleMenuClose} />

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            {children}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
