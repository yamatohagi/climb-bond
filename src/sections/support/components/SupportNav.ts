import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Tab, Tabs, Stack, Drawer, Typography, CardActionArea } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/scrollbar' or i... Remove this comment to see the full error message
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

// @ts-expect-error TS(2749): 'CardActionArea' refers to a value, but is being u... Remove this comment to see the full error message
const StyledContactButton = styled((props: any) => <CardActionArea sx={{ borderRadius: 1 }}>
  // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
  <Stack direction="row" alignItems="center" spacing={2} {...props} />
</CardActionArea>)(({
  // @ts-expect-error TS(2304): Cannot find name 'theme'.
  theme
// @ts-expect-error TS(2693): 'any' only refers to a type, but is being used as ... Remove this comment to see the full error message
}: any) => ({
  // @ts-expect-error TS(2304): Cannot find name 'theme'.
  ...theme.typography.subtitle2,
  // @ts-expect-error TS(2304): Cannot find name 'theme'.
  borderRadius: theme.shape.borderRadius,
  // @ts-expect-error TS(2304): Cannot find name 'theme'.
  padding: theme.spacing(2),
  // @ts-expect-error TS(2304): Cannot find name 'theme'.
  border: `solid 1px ${theme.palette.divider}`,
}));

// ----------------------------------------------------------------------

export default function SupportNav({
  topic,
  sidebarConfig,
  onChangeTopic,
  isOpenSidebar,
  onCloseSidebar
}: any) {
  const isMdUp = useResponsive('up', 'md');

  const renderContent = (
    <Scrollbar
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        py: { xs: 3, md: 0 },
      }}
    >
      // @ts-expect-error TS(2749): 'Tabs' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Tabs
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={topic}
        // @ts-expect-error TS(2304): Cannot find name 'onChange'.
        onChange={onChangeTopic}
        // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
        orientation="vertical"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pl: { xs: 2.5, md: 0 },
        }}
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {sidebarConfig.map((item: any) => <Tab
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={item.title}
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={item.title}
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label={item.title}
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={
            <Image
              // @ts-expect-error TS(2304): Cannot find name 'disabledEffect'.
              disabledEffect
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt={item.icon}
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src={item.icon}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ width: 28, height: 28, mr: `20px !important` }}
            />
          }
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            height: 56,
            // @ts-expect-error TS(2304): Cannot find name 'typography'.
            typography: 'body2',
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent: 'flex-start',
            '&.Mui-selected': { typography: 'subtitle2' },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />)}
      </Tabs>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: { xs: 2.5, md: 5 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pl: { xs: 2.5, md: 0 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pr: { xs: 2.5, md: 5 },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h4" paragraph>
          // @ts-expect-error TS(2304): Cannot find name 'Do'.
          Do you still need help?
        </Typography>
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Always'.
          Always support whenever you need (24/7).
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2}>
          // @ts-expect-error TS(2749): 'StyledContactButton' refers to a value, but is be... Remove this comment to see the full error message
          <StyledContactButton>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:email" width={24} />
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2">Email</Typography>
          </StyledContactButton>

          <StyledContactButton>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:chat" width={24} />
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2">Chat Now</Typography>
          </StyledContactButton>

          <StyledContactButton>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:mobile" width={24} />
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2">
              // @ts-expect-error TS(2349): This expression is not callable.
              {`Call `}
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box component="span" sx={{ color: 'primary.main' }}>
                552-917-1454
              </Box>
            </Typography>
          </StyledContactButton>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return isMdUp ? (
    <Drawer
      variant="permanent"
      // @ts-expect-error TS(2304): Cannot find name 'PaperProps'.
      PaperProps={{
        sx: {
          width: NAV.W_DRAWER,
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'unset',
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.default',
        },
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {renderContent}
    </Drawer>
  ) : (
    // @ts-expect-error TS(2749): 'Drawer' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Drawer
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      open={isOpenSidebar}
      // @ts-expect-error TS(2304): Cannot find name 'onClose'.
      onClose={onCloseSidebar}
      // @ts-expect-error TS(2304): Cannot find name 'ModalProps'.
      ModalProps={{ keepMounted: true }}
      // @ts-expect-error TS(2304): Cannot find name 'PaperProps'.
      PaperProps={{
        sx: { width: NAV.W_DRAWER },
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {renderContent}
    </Drawer>
  );
}

SupportNav.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onChangeTopic: PropTypes.func,
  onCloseSidebar: PropTypes.func,
  sidebarConfig: PropTypes.array,
  topic: PropTypes.string,
};
