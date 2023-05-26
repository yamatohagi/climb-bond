import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Box, Tooltip, Link, ListItemText } from '@mui/material';
//
import Iconify from '../../iconify';
//
import { StyledItem, StyledIcon, StyledDotIcon } from './styles';

// ----------------------------------------------------------------------

export default function NavItem({
  item,
  depth,
  open,
  // @ts-expect-error TS(2300): Duplicate identifier 'active'.
  active,
  isExternalLink,
  ...other
}: any) {
  // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'disabled'.
  const { title, path, icon, info, children, disabled, caption } = item;

  const subItem = depth !== 1;

  const renderContent = (
    // @ts-expect-error TS(2300): Duplicate identifier 'active'.
    <StyledItem depth={depth} active={active} disabled={disabled} caption={!!caption} {...other}>
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {icon && <StyledIcon>{icon}</StyledIcon>}

      // @ts-expect-error TS(2304): Cannot find name 'subItem'.
      {subItem && (
        // @ts-expect-error TS(2749): 'StyledIcon' refers to a value, but is being used ... Remove this comment to see the full error message
        <StyledIcon>
          // @ts-expect-error TS(2749): 'StyledDotIcon' refers to a value, but is being us... Remove this comment to see the full error message
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      // @ts-expect-error TS(2749): 'ListItemText' refers to a value, but is being use... Remove this comment to see the full error message
      <ListItemText
        // @ts-expect-error TS(2304): Cannot find name 'primary'.
        primary={title}
        // @ts-expect-error TS(2304): Cannot find name 'secondary'.
        secondary={
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          caption && (
            // @ts-expect-error TS(2749): 'Tooltip' refers to a value, but is being used as ... Remove this comment to see the full error message
            <Tooltip title={caption} placement="top-start">
              // @ts-expect-error TS(2304): Cannot find name 'span'.
              <span>{caption}</span>
            </Tooltip>
          )
        }
        // @ts-expect-error TS(2304): Cannot find name 'primaryTypographyProps'.
        primaryTypographyProps={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          noWrap: true,
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component: 'span',
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant: active ? 'subtitle2' : 'body2',
        }}
        // @ts-expect-error TS(2304): Cannot find name 'secondaryTypographyProps'.
        secondaryTypographyProps={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          noWrap: true,
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant: 'caption',
        }}
      />

      // @ts-expect-error TS(2304): Cannot find name 'info'.
      {info && (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component="span" sx={{ lineHeight: 0 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {info}
        </Box>
      )}

      // @ts-expect-error TS(2304): Cannot find name 'children'.
      {!!children && (
        // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
        <Iconify
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width={16}
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={open ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ ml: 1 }}
        />
      )}
    </StyledItem>
  );

  const renderItem = () => {
    // ExternalLink
    // @ts-expect-error TS(2304): Cannot find name 'isExternalLink'.
    if (isExternalLink)
      return (
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link href={path} target="_blank" rel="noopener" underline="none">
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {renderContent}
        </Link>
      );

    // Has child
    // @ts-expect-error TS(2304): Cannot find name 'children'.
    if (children) {
      return renderContent;
    }

    // Default
    return (
      // @ts-expect-error TS(2304): Cannot find name 'href'.
      <Link component={NextLink} href={path} underline="none">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {renderContent}
      </Link>
    );
  };

  return renderItem();
}

NavItem.propTypes = {
  active: PropTypes.bool,
  depth: PropTypes.number,
  isExternalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
};
