import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Masonry } from '@mui/lab';
import { Link, Paper, Typography, Divider, Stack } from '@mui/material';
// components
import Iconify from '../iconify';
//
import MenuHotProducts from './MenuHotProducts';
// @ts-expect-error TS(6142): Module './MenuCarousel' was resolved to '/Users/ya... Remove this comment to see the full error message
import MenuCarousel from './MenuCarousel';

// ----------------------------------------------------------------------

const ITEM_SPACING = 4;
const PARENT_ITEM_HEIGHT = 64;

export default function MegaMenuDesktopHorizon({
  data,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack direction="row" spacing={ITEM_SPACING} {...other}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {data.map((parent: any) => <MegaMenuItem key={parent.title} parent={parent} />)}
    </Stack>
  );
}

MegaMenuDesktopHorizon.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function MegaMenuItem({
  parent
}: any) {
  const { title, path, icon, more, products, tags, children } = parent;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ParentItem
        // @ts-expect-error TS(2322): Type '{ onMouseEnter: () => void; onMouseLeave: ()... Remove this comment to see the full error message
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        path={path}
        title={title}
        icon={icon}
        open={open}
        hasSub
      />

      {open && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Paper
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{
            p: 3,
            width: '100%',
            position: 'absolute',
            borderRadius: 2,
            top: PARENT_ITEM_HEIGHT,
            left: -ITEM_SPACING * 8,
            zIndex: (theme) => theme.zIndex.modal,
            // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
            boxShadow: (theme) => theme.customShadows.z20,
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Masonry columns={4} spacing={2} defaultColumns={3} defaultSpacing={2}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {children.map((list: any) => <Stack key={list.subheader} spacing={1.25} sx={{ mb: 2.5 }}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography variant="subtitle1" noWrap>
                {list.subheader}
              </Typography>

              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {list.items.map((link: any) => <Link
                key={link.title}
                component={NextLink}
                href={link.path}
                noWrap
                underline="none"
                sx={{
                  typography: 'body2',
                  color: 'text.primary',
                  fontSize: 13,
                  transition: (theme) => theme.transitions.create('all'),
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.title}
              </Link>)}
            </Stack>)}
          </Masonry>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Stack spacing={3}>
            {!!more && (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Link
                component={NextLink}
                href={more?.path}
                sx={{ typography: 'body2', display: 'inline-flex', fontSize: 13 }}
              >
                {more?.title}
              </Link>
            )}

            {!!products && (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Divider sx={{ borderStyle: 'dashed' }} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <MenuCarousel products={products} numberShow={8} />
              </>
            )}

            {!!tags && (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Divider sx={{ borderStyle: 'dashed' }} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <MenuHotProducts tags={tags} />
              </>
            )}
          </Stack>
        </Paper>
      )}
    </>;
  }

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <ParentItem path={path} title={title} icon={icon} />;
}

MegaMenuItem.propTypes = {
  parent: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.node,
    more: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
    }),
    path: PropTypes.string,
    products: PropTypes.array,
    tags: PropTypes.array,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function ParentItem({
  title,
  path = '',
  icon,
  open,
  hasSub,
  ...other
}: any) {
  const activeStyle = {
    color: 'primary.main',
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link
      component={NextLink}
      href={path}
      underline="none"
      color="inherit"
      variant="subtitle2"
      sx={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        textTransform: 'capitalize',
        height: PARENT_ITEM_HEIGHT,
        lineHeight: `${PARENT_ITEM_HEIGHT}px`,
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': activeStyle,
        ...(open && activeStyle),
      }}
      {...other}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {icon && <Stack sx={{ width: 20, height: 20, mr: 1 }}>{icon}</Stack>}

      {title}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {hasSub && <Iconify icon="carbon:chevron-down" width={16} sx={{ ml: 1 }} />}
    </Link>
  );
}

ParentItem.propTypes = {
  hasSub: PropTypes.bool,
  icon: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
};
