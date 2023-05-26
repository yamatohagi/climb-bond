import PropTypes from 'prop-types';
// @mui
import { Box, Link, Stack, Typography, Breadcrumbs } from '@mui/material';
//
import LinkItem from './LinkItem';

// ----------------------------------------------------------------------

export default function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast,
  sx,
  ...other
}: any) {
  const lastLink = links[links.length - 1].name;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ mb: 5, ...sx }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction="row" alignItems="center">
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box sx={{ flexGrow: 1 }}>
          {/* HEADING */}
          // @ts-expect-error TS(2304): Cannot find name 'heading'.
          {heading && (
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h4" gutterBottom>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {heading}
            </Typography>
          )}

          {/* BREADCRUMBS */}
          // @ts-expect-error TS(2552): Cannot find name 'links'. Did you mean 'Link'?
          {!!links.length && (
            // @ts-expect-error TS(2749): 'Breadcrumbs' refers to a value, but is being used... Remove this comment to see the full error message
            <Breadcrumbs separator={<Separator />} {...other}>
              // @ts-expect-error TS(2552): Cannot find name 'links'. Did you mean 'Link'?
              {links.map((link: any) => <LinkItem
                // @ts-expect-error TS(2304): Cannot find name 'key'.
                key={link.name || ''}
                // @ts-expect-error TS(2304): Cannot find name 'link'.
                link={link}
                // @ts-expect-error TS(2304): Cannot find name 'activeLast'.
                activeLast={activeLast}
                // @ts-expect-error TS(2304): Cannot find name 'disabled'.
                disabled={link.name === lastLink}
              />)}
            </Breadcrumbs>
          )}
        </Box>

        // @ts-expect-error TS(2304): Cannot find name 'action'.
        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {/* MORE LINK */}
      // @ts-expect-error TS(2304): Cannot find name 'moreLink'.
      {!!moreLink && (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box sx={{ mt: 2 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {moreLink.map((href: any) => <Link
            // @ts-expect-error TS(2304): Cannot find name 'noWrap'.
            noWrap
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={href}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={href}
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="body2"
            // @ts-expect-error TS(2304): Cannot find name 'target'.
            target="_blank"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ display: 'table' }}
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {href}
          </Link>)}
        </Box>
      )}
    </Box>
  );
}

CustomBreadcrumbs.propTypes = {
  sx: PropTypes.object,
  action: PropTypes.node,
  links: PropTypes.array,
  heading: PropTypes.string,
  moreLink: PropTypes.array,
  activeLast: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Separator() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component="span"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
    />
  );
}
