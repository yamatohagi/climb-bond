import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Chip, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/markdown' or it... Remove this comment to see the full error message
import Markdown from 'src/components/markdown';
//
// @ts-expect-error TS(6142): Module '../../../contact/map' was resolved to '/Us... Remove this comment to see the full error message
import ContactMap from '../../../contact/map';

// ----------------------------------------------------------------------

export default function CareerJobDetailsSummary({
  job
}: any) {
  const { skills, otherBenefits, locationMap, content } = job;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={5}>
      <Markdown content={content} />

      {/* -- Skills -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" sx={{ mb: 3 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Job'.
          Job Skills
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" flexWrap="wrap">
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {skills.map((skill: any) => <Chip key={skill} label={skill} sx={{ m: 0.5 }} onClick={() => {}} />)}
        </Stack>
      </div>

      {/* -- Other Benefits -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" paragraph>
          // @ts-expect-error TS(2304): Cannot find name 'Other'.
          Other Benefits
        </Typography>
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            rowGap: 2,
            // @ts-expect-error TS(2304): Cannot find name 'columnGap'.
            columnGap: 3,
            // @ts-expect-error TS(2304): Cannot find name 'display'.
            display: 'grid',
            // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
            gridTemplateColumns: {
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              xs: 'repeat(1, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'sm'.
              sm: 'repeat(2, 1fr)',
              // @ts-expect-error TS(2304): Cannot find name 'md'.
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {otherBenefits.map((benefit: any) => <Stack key={benefit} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              icon={
                // @ts-expect-error TS(2304): Cannot find name 'benefit'.
                (benefit === 'Free parking' && 'carbon:car-front') ||
                // @ts-expect-error TS(2304): Cannot find name 'benefit'.
                (benefit === 'Bonus commission' && 'carbon:money') ||
                // @ts-expect-error TS(2304): Cannot find name 'benefit'.
                (benefit === 'Travel' && 'carbon:airport-01') ||
                // @ts-expect-error TS(2304): Cannot find name 'benefit'.
                (benefit === 'Training' && 'carbon:group-presentation') ||
                // @ts-expect-error TS(2304): Cannot find name 'benefit'.
                (benefit === 'Device support' && 'carbon:devices') ||
                // @ts-expect-error TS(2304): Cannot find name 'benefit'.
                (benefit === 'Health care' && 'carbon:person-favorite') ||
                'carbon:direct-link'
              }
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              width={24}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ color: 'primary.main', mr: 1.5 }}
            />
            // @ts-expect-error TS(2304): Cannot find name 'benefit'.
            {benefit}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Stack>)}
        </Box>
      </div>

      {/* -- Location Map --- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" sx={{ mb: 3 }}>
          Location
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'offices'.
        <ContactMap offices={locationMap} sx={{ borderRadius: 2 }} />
      </div>
    </Stack>
  );
}

CareerJobDetailsSummary.propTypes = {
  job: PropTypes.shape({
    content: PropTypes.string,
    locationMap: PropTypes.array,
    otherBenefits: PropTypes.array,
    skills: PropTypes.array,
  }),
};
