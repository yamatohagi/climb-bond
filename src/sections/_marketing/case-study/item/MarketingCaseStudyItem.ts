import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyItem({
  project
}: any) {
  const { title, coverImg, category } = project;

  return (
    // @ts-expect-error TS(2304): Cannot find name 'div'.
    <div>
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      <Image src={coverImg} alt={title} ratio="1/1" sx={{ borderRadius: 2 }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {category}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'component'.
        <Link component={NextLink} href={paths.marketing.caseStudy} color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <TextMaxLine variant="h5" line={1}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {title}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  );
}

MarketingCaseStudyItem.propTypes = {
  project: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    title: PropTypes.string,
  }),
};
