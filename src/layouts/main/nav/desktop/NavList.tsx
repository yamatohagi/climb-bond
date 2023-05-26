import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { Fade, Portal, Stack, Box, Link, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useActiveLink' or it... Remove this comment to see the full error message
import useActiveLink from 'src/hooks/useActiveLink';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
//
import { StyledMenu, StyledSubheader } from './styles';
// @ts-expect-error TS(6142): Module './NavItem' was resolved to '/Users/yamatoh... Remove this comment to see the full error message
import { NavItem } from './NavItem';

// ----------------------------------------------------------------------

export default function NavList({
  item
}: any) {
  const { pathname } = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);

  const mainList = children ? children.filter((list: any) => list.subheader !== 'Common') : [];

  const commonList = children ? children.find((list: any) => list.subheader === 'Common') : null;

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NavItem
      // @ts-expect-error TS(2322): Type '{ item: any; active: any; open: boolean; isE... Remove this comment to see the full error message
      item={item}
      active={active}
      open={openMenu}
      isExternalLink={isExternalLink}
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
    />

    {!!children && openMenu && (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Portal>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Fade in={openMenu}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Grid container columns={15}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Grid xs={12}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Box
                  gap={5}
                  display="grid"
                  gridTemplateColumns="repeat(5, 1fr)"
                  sx={{
                    p: 5,
                    height: 1,
                    position: 'relative',
                    bgcolor: 'background.neutral',
                  }}
                >
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  {mainList.map((list: any) => <NavSubList
                    key={list.subheader}
                    subheader={list.subheader}
                    cover={list.cover}
                    items={list.items}
                    isNew={list.isNew}
                  />)}
                </Box>
              </Grid>

              {commonList && (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Grid xs={3}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Box sx={{ bgcolor: 'background.default', p: 5 }}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavSubList subheader={commonList.subheader} items={commonList.items} />
                  </Box>
                </Grid>
              )}
            </Grid>
          </StyledMenu>
        </Fade>
      </Portal>
    )}
  </>;
}

NavList.propTypes = {
  item: PropTypes.object,
};

// ----------------------------------------------------------------------

function NavSubList({
  subheader,
  isNew,
  cover,
  items
}: any) {
  const { pathname } = useRouter();

  const coverPath = items.length ? items[0].path : '';

  const commonList = subheader === 'Common';

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack spacing={2}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <StyledSubheader>
        {subheader}
        {isNew && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Label color="info" sx={{ ml: 1 }}>
            NEW
          </Label>
        )}
      </StyledSubheader>

      {!commonList && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link component={NextLink} href={coverPath}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Image
            disabledEffect
            alt={cover}
            src={cover || '/assets/placeholder.svg'}
            ratio="16/9"
            sx={{
              borderRadius: 1,
              cursor: 'pointer',
              boxShadow: (theme: any) => theme.customShadows.z8,
              transition: (theme: any) => theme.transitions.create('all'),
              '&:hover': {
                opacity: 0.8,
                boxShadow: (theme: any) => theme.customShadows.z24,
              },
            }}
          />
        </Link>
      )}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Stack spacing={1.5} alignItems="flex-start">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {items.map((item: any) => <NavItem key={item.title} item={item} active={item.path === pathname} subItem />)}
      </Stack>
    </Stack>
  );
}

NavSubList.propTypes = {
  cover: PropTypes.string,
  isNew: PropTypes.bool,
  items: PropTypes.array,
  subheader: PropTypes.string,
};
