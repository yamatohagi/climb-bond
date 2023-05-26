import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import NextLink from 'next/link';
// @mui
import { Link } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  // @ts-expect-error TS(2339): Property 'item' does not exist on type '{}'.
  ({ item, open, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children } = item;

    const renderContent = (
      <StyledNavItem
        // @ts-expect-error TS(2322): Type 'ForwardedRef<unknown>' is not assignable to ... Remove this comment to see the full error message
        ref={ref}
        disableRipple
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {title}

        {!!children && <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 1 }} />}
      </StyledNavItem>
    );

    // ExternalLink
    if (isExternalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={NextLink} href={path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  // @ts-expect-error TS(2322): Type '{ active: PropTypes.Requireable<boolean>; is... Remove this comment to see the full error message
  active: PropTypes.bool,
  isExternalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};
