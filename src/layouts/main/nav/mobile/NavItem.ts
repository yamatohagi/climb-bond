import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Link, ListItemText, ListItemIcon } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export default function NavItem({
  item,
  open,
  active,
  isExternalLink,
  // @ts-expect-error TS(2300): Duplicate identifier 'other'.
  ...other
}: any) {
  const { title, path, icon, children } = item;

  const renderContent = (
    // @ts-expect-error TS(2300): Duplicate identifier 'other'.
    <StyledNavItem active={active} {...other}>
      // @ts-expect-error TS(2749): 'ListItemIcon' refers to a value, but is being use... Remove this comment to see the full error message
      <ListItemIcon> {icon} </ListItemIcon>

      // @ts-expect-error TS(2304): Cannot find name 'disableTypography'.
      <ListItemText disableTypography primary={title} />

      {!!children && (
        <Iconify
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width={16}
          // @ts-expect-error TS(2588): Cannot assign to 'icon' because it is a constant.
          icon={open ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ ml: 1 }}
        />
      )}
    </StyledNavItem>
  );

  // ExternalLink
  // @ts-expect-error TS(2304): Cannot find name 'isExternalLink'.
  if (isExternalLink) {
    return (
      // @ts-expect-error TS(2304): Cannot find name 'target'.
      <Link href={path} target="_blank" rel="noopener" underline="none">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {renderContent}
      </Link>
    );
  }

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
}

NavItem.propTypes = {
  active: PropTypes.bool,
  isExternalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
};
