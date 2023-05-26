import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import {
  Box,
  List,
  Link,
  Stack,
  Drawer,
  Button,
  Divider,
  Typography,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
// config
import { NAV, ICON } from '../../config-global';
//
import Logo from '../logo';
import Iconify from '../iconify';
import Scrollbar from '../scrollbar';

// ----------------------------------------------------------------------

export default function MegaMenuMobile({
  data,
  open,
  action,
  onOpen,
  onClose
}: any) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {action || (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button variant="contained" onClick={onOpen} startIcon={<Iconify icon="carbon:menu" />}>
        Menu
      </Button>
    )}

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Drawer
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{ sx: { pb: 5, width: NAV.W_BASE } }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Scrollbar>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Logo sx={{ mx: 2.5, my: 3 }} />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {data.map((parent: any) => <SubMenu key={parent.title} parent={parent} pathname={pathname} />)}
      </Scrollbar>
    </Drawer>
  </>;
}

MegaMenuMobile.propTypes = {
  action: PropTypes.node,
  data: PropTypes.array,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

// @ts-expect-error TS(2339): Property 'icon' does not exist on type '{}'.
const ParentItem = forwardRef(({ icon, title, hasSub, ...other }, ref) => (
  // @ts-expect-error TS(2769): No overload matches this call.
  <ListItemButton ref={ref} sx={{ height: 44, textTransform: 'capitalize' }} {...other}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemIcon
      sx={{
        width: ICON.NAV_ITEM,
        height: ICON.NAV_ITEM,
      }}
    >
      {icon}
    </ListItemIcon>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemText primaryTypographyProps={{ typography: 'body2' }}>{title}</ListItemText>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    {hasSub && <Iconify icon="carbon:chevron-right" width={16} />}
  </ListItemButton>
));

ParentItem.propTypes = {
  // @ts-expect-error TS(2322): Type '{ hasSub: PropTypes.Requireable<boolean>; ic... Remove this comment to see the full error message
  hasSub: PropTypes.bool,
  icon: PropTypes.node,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function SubMenu({
  parent,
  pathname
}: any) {
  const { title, icon, path, children } = parent;

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      handleCloseDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  if (children) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ParentItem title={title} icon={icon} onClick={handleOpenDrawer} hasSub />

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Drawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        BackdropProps={{ invisible: true }}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: NAV.W_BASE - 12,
            borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
          },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Stack direction="row" alignItems="center" px={1} py={1.5}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton onClick={handleCloseDrawer}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Iconify icon="carbon:chevron-left" width={16} />
          </IconButton>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography noWrap variant="subtitle1" sx={{ ml: 1, textTransform: 'capitalize' }}>
            {title}
          </Typography>
        </Stack>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Divider />

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Scrollbar>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Stack spacing={5} py={3}>
            {children.map((list: any) => {
              const { subheader, items } = list;

              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <List key={subheader} disablePadding>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Typography
                    component="div"
                    variant="overline"
                    sx={{ px: 2.5, mb: 1, color: 'text.secondary' }}
                    noWrap
                  >
                    {subheader}
                  </Typography>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  {items.map((link: any) => <Link
                    key={link.title}
                    component={NextLink}
                    href={link.path}
                    color="inherit"
                    underline="none"
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ListItemButton sx={{ px: 1.5 }}>
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <ListItemIcon
                        sx={{
                          mr: 0.5,
                          width: ICON.NAV_ITEM,
                          height: ICON.NAV_ITEM,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            bgcolor: 'currentColor',
                            borderRadius: '50%',
                          }}
                        />
                      </ListItemIcon>

                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <ListItemText
                        primary={link.title}
                        primaryTypographyProps={{ noWrap: true, typography: 'body2' }}
                      />
                    </ListItemButton>
                  </Link>)}
                </List>
              );
            })}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link component={NextLink} href={path} color="inherit" underline="none">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ParentItem title={title} icon={icon} />
    </Link>
  );
}

SubMenu.propTypes = {
  parent: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.node,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  pathname: PropTypes.string,
};
