import PropTypes from 'prop-types';
// @mui
import { Typography, Divider, Stack, IconButton, Link } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _socials } from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyDetailsSummary({
  caseStudy
}: any) {
  const { title, description, category, website, createdAt } = caseStudy;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={3} sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2304): Cannot find name 'summary'.
          summary
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h6">{title}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2">{description}</Typography>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Website'.
          Website
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Link variant="body2" color="inherit">
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {website}
        </Link>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Category'.
          Category
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ pb: 1 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {category}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Date
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2">{fDate(createdAt: any)}</Typography>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      <Stack direction="row" alignItems="center" spacing={0.5}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="subtitle2">Share:</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row">
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          {_socials.map((social: any) => <IconButton key={social.value}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon={social.icon} sx={{ color: social.color }} />
          </IconButton>)}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingCaseStudyDetailsSummary.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    title: PropTypes.string,
    website: PropTypes.string,
  }),
};
