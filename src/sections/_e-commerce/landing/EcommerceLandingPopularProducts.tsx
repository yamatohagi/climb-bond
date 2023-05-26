import { useState } from 'react';
// @mui
import { Box, Typography, Container, Tabs, Tab } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _products } from 'src/_mock';
//
import { EcommerceProductItemBestSellers } from '../product/item';

// ----------------------------------------------------------------------

const TABS = ['Featured Products', 'Top Rated Products', 'Onsale Products'];

// ----------------------------------------------------------------------

export default function EcommerceLandingPopularProducts() {
  const [tab, setTab] = useState('Featured Products');

  const handleChangeTab = (event: any, newValue: any) => {
    setTab(newValue);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography
        variant="h3"
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Popular Products
      </Typography>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ my: 5 }}
      >
        {TABS.map((category) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {_products.slice(0, 8).map((product: any) => <EcommerceProductItemBestSellers key={product.id} product={product} />)}
      </Box>
    </Container>
  );
}
