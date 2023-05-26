import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha } from '@mui/material/styles';
import { Link, List, Paper, ListItem, Typography, Divider, Stack } from '@mui/material';
// config
import { NAV } from '../../config-global';
//
import Iconify from '../iconify';
//
// @ts-expect-error TS(6142): Module './MenuCarousel' was resolved to '/Users/ya... Remove this comment to see the full error message
import MenuCarousel from './MenuCarousel';
import MenuHotProducts from './MenuHotProducts';

// ----------------------------------------------------------------------

const MENU_PAPER_WIDTH = 800;
const PARENT_ITEM_HEIGHT = 40;

export default function MegaMenuDesktopVertical({ data, ...other }: any) {
  return (
    <List disablePadding {...other}>
      {data.map((parent: any) => (
        <MegaMenuItem key={parent.title} parent={parent} />
      ))}
    </List>
  );
}

MegaMenuDesktopVertical.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function MegaMenuItem({ parent }: any) {
  const { title, path, more, products, tags, children } = parent;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <ParentItem
          // @ts-expect-error TS(2322): Type '{ onMouseEnter: () => void; onMouseLeave: ()... Remove this comment to see the full error message
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          path={path}
          title={title}
          open={open}
          hasSub
        />

        {open && (
          <Paper
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            sx={{
              p: 3,
              top: -62,
              borderRadius: 2,
              position: 'absolute',
              left: NAV.W_BASE,
              width: MENU_PAPER_WIDTH,
              // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
              boxShadow: (theme) => theme.customShadows.z20,
            }}
          >
            <Masonry columns={3} spacing={2}>
              {children.map((list: any) => (
                <Stack key={list.subheader} spacing={1.25} sx={{ mb: 2.5 }}>
                  <Typography variant="subtitle1" noWrap>
                    {list.subheader}
                  </Typography>

                  {list.items.map((link: any) => (
                    <Link
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
                    </Link>
                  ))}
                </Stack>
              ))}
            </Masonry>

            {!!more && !!products && !!tags && (
              <Stack spacing={3}>
                <Link
                  component={NextLink}
                  href={more.path}
                  sx={{ typography: 'body2', display: 'inline-flex', fontSize: 13 }}
                >
                  {more.title}
                </Link>

                <Divider />

                <MenuCarousel products={products} numberShow={6} />

                <Divider />

                <MenuHotProducts tags={tags} />
              </Stack>
            )}
          </Paper>
        )}
      </>
    );
  }

  return <ParentItem path={path} title={title} />;
}

MegaMenuItem.propTypes = {
  parent: PropTypes.shape({
    children: PropTypes.array,
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

function ParentItem({ path = '', title, open, hasSub, ...other }: any) {
  const activeStyle = {
    color: 'primary.main',
    bgcolor: (theme: any) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
  };

  return (
    <Link component={NextLink} href={path} underline="none">
      <ListItem
        sx={{
          pl: 2.5,
          pr: 1.5,
          height: PARENT_ITEM_HEIGHT,
          cursor: 'pointer',
          color: 'text.primary',
          typography: 'subtitle2',
          textTransform: 'capitalize',
          justifyContent: 'space-between',
          transition: (theme) => theme.transitions.create('all'),
          '&:hover': activeStyle,
          ...(open && activeStyle),
        }}
        {...other}
      >
        {title}

        {hasSub && <Iconify icon="carbon:chevron-right" width={16} sx={{ ml: 1 }} />}
      </ListItem>
    </Link>
  );
}

ParentItem.propTypes = {
  hasSub: PropTypes.bool,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
};
