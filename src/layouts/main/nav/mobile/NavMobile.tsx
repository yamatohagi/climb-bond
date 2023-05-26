import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { List, Drawer, IconButton, Button, Stack } from '@mui/material';
// config
import { NAV } from 'src/config-global';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavMobile({ data }: any) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map((link: any) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>

          <Stack spacing={1.5} sx={{ p: 3 }}>
            <Button fullWidth variant="contained" color="inherit">
              Buy Now
            </Button>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
