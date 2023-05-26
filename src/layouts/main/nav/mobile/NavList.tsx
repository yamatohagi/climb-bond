import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Collapse } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useActiveLink' or it... Remove this comment to see the full error message
import useActiveLink from 'src/hooks/useActiveLink';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/nav-section' or... Remove this comment to see the full error message
import { NavSectionVertical } from 'src/components/nav-section';
//
import NavItem from './NavItem';

// ----------------------------------------------------------------------

export default function NavList({
  item
}: any) {
  const { pathname } = useRouter();

  const { path, children } = item;

  const { isExternalLink } = useActiveLink(path);

  const [open, setOpen] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NavItem
        item={item}
        open={open}
        // @ts-expect-error TS(2322): Type '{ item: any; open: boolean; onClick: () => v... Remove this comment to see the full error message
        onClick={() => setOpen(!open)}
        active={pathname === path}
        isExternalLink={isExternalLink}
      />

      {!!children && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Collapse in={open} unmountOnExit>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <NavSectionVertical data={children} />
        </Collapse>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
};
