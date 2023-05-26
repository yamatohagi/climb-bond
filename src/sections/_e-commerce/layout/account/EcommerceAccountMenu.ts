import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Link,
  Stack,
  Drawer,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useActiveLink' or it... Remove this comment to see the full error message
import useActiveLink from 'src/hooks/useActiveLink';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const navigations = [
  {
    title: 'Personal Info',
    path: paths.eCommerce.account.personal,
    // @ts-expect-error TS(2304): Cannot find name 'icon'.
    icon: <Iconify icon="carbon:user" />,
  },
  {
    title: 'Wishlist',
    path: paths.eCommerce.account.wishlist,
    // @ts-expect-error TS(2304): Cannot find name 'icon'.
    icon: <Iconify icon="carbon:favorite" />,
  },
  {
    title: 'Vouchers',
    path: paths.eCommerce.account.vouchers,
    // @ts-expect-error TS(2304): Cannot find name 'icon'.
    icon: <Iconify icon="carbon:cut-out" />,
  },
  {
    title: 'Orders',
    path: paths.eCommerce.account.orders,
    // @ts-expect-error TS(2304): Cannot find name 'icon'.
    icon: <Iconify icon="carbon:document" />,
  },
  {
    title: 'Payment',
    path: paths.eCommerce.account.payment,
    // @ts-expect-error TS(2304): Cannot find name 'icon'.
    icon: <Iconify icon="carbon:purchase" />,
  },
];

// ----------------------------------------------------------------------

export default function EcommerceAccountMenu({
  open,
  onClose
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const renderContent = (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        flexShrink: 0,
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        borderRadius: 2,
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        width: 1,
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        ...(isMdUp && {
          width: NAV.W_DRAWER,
          border: (theme: any) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }),
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={2} direction="row" alignItems="center">
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar src={_mock.image.avatar(0)} sx={{ width: 64, height: 64 }} />
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ typography: 'caption', cursor: 'pointer', '&:hover': { opacity: 0.72 } }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:edit" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'Change'.
            Change photo
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5}>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="subtitle1" line={1}>
            // @ts-expect-error TS(2304): Cannot find name 'Jayvion'.
            Jayvion Simon
          </TextMaxLine>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="body2" line={1} sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'nannie_abernathy70'.
            nannie_abernathy70@yahoo.com
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </TextMaxLine>
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ my: 1, px: 2 }}>
        // @ts-expect-error TS(2709): Cannot use namespace 'MenuItem' as a type.
        {navigations.map((item: any) => <MenuItem key={item.title} item={item} />)}
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ my: 1, px: 2 }}>
        // @ts-expect-error TS(2749): 'ListItemButton' refers to a value, but is being u... Remove this comment to see the full error message
        <ListItemButton
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            px: 1,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: 44,
            // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
            borderRadius: 1,
          }}
        >
          // @ts-expect-error TS(2749): 'ListItemIcon' refers to a value, but is being use... Remove this comment to see the full error message
          <ListItemIcon>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:logout" />
          </ListItemIcon>
          <ListItemText
            // @ts-expect-error TS(2304): Cannot find name 'primary'.
            primary="Logout"
            // @ts-expect-error TS(2304): Cannot find name 'primaryTypographyProps'.
            primaryTypographyProps={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              typography: 'body2',
            }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </ListItemButton>
      </Stack>
    </Stack>
  );

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          // @ts-expect-error TS(2304): Cannot find name 'PaperProps'.
          PaperProps={{
            sx: {
              width: NAV.W_DRAWER,
            },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

EcommerceAccountMenu.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

function MenuItem({
  item
}: any) {
  const { active } = useActiveLink(item.path);

  return (
    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={NextLink}
      // @ts-expect-error TS(2304): Cannot find name 'key'.
      key={item.title}
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      href={item.path}
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color={active ? 'primary' : 'inherit'}
      // @ts-expect-error TS(2304): Cannot find name 'underline'.
      underline="none"
    >
      // @ts-expect-error TS(2749): 'ListItemButton' refers to a value, but is being u... Remove this comment to see the full error message
      <ListItemButton
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          px: 1,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 44,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 1,
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(2749): 'ListItemIcon' refers to a value, but is being use... Remove this comment to see the full error message
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          // @ts-expect-error TS(2304): Cannot find name 'primary'.
          primary={item.title}
          // @ts-expect-error TS(2304): Cannot find name 'primaryTypographyProps'.
          primaryTypographyProps={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            typography: 'body2',
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(active && {
              typography: 'subtitle2',
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </ListItemButton>
    </Link>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.node,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};
