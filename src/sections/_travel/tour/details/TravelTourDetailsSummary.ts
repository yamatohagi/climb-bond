import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Box, Divider } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelTourDetailsSummary({
  tour
}: any) {
  const {
    program,
    includes,
    location,
    duration,
    tourGuide,
    languages,
    highlights,
    description,
    availableEnd,
    availableStart,
  } = tour;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={5}>
      {/* -- Tour Overview -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" sx={{ mb: 3 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Tour'.
          Tour Overview
        </Typography>
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            rowGap: 2.5,
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
            },
          }}
        >
          // @ts-expect-error TS(2709): Cannot use namespace 'OverviewItem' as a type.
          <OverviewItem
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            icon="carbon:calendar"
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            label="Available"
            // @ts-expect-error TS(2304): Cannot find name 'text'.
            text={`${fDate(availableStart, 'dd/MM/yyyy')} - ${fDate(availableEnd, 'dd/MM/yyyy')}`}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
          />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <OverviewItem icon="carbon:user" label="Contact name" text={tourGuide?.name} />
          // @ts-expect-error TS(2709): Cannot use namespace 'OverviewItem' as a type.
          <OverviewItem icon="carbon:location" label="Location" text={location} />
          // @ts-expect-error TS(2709): Cannot use namespace 'OverviewItem' as a type.
          <OverviewItem
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            icon="carbon:mobile"
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            label="Contact phone"
            // @ts-expect-error TS(2304): Cannot find name 'text'.
            text={tourGuide?.phoneNumber || ''}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
          />
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <OverviewItem icon="carbon:time" label="Durations" text={duration} />
          // @ts-expect-error TS(2709): Cannot use namespace 'OverviewItem' as a type.
          <OverviewItem icon="carbon:translate" label="Languages" text={languages.join(', ')} />
        </Box>
      </div>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      {/* -- Tour Description -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" paragraph>
          // @ts-expect-error TS(2304): Cannot find name 'Tour'.
          Tour Description
        </Typography>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        <Typography>{description}</Typography>
      </div>

      {/* -- Tour Highlights -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" paragraph>
          // @ts-expect-error TS(2304): Cannot find name 'Tour'.
          Tour Highlights
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'ul'.
        <ul>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {highlights.map((highlight: any) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>

      {/* -- Tour Includes -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5" paragraph>
          // @ts-expect-error TS(2304): Cannot find name 'Tour'.
          Tour Includes
        </Typography>

        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            rowGap: 2,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {includes.map((option: any) => <Stack
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={option.label}
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2304): Cannot find name 'option'.
              ...(!option.enabled && { color: 'text.disabled' }),
            }}
          >
            <Iconify
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              icon="carbon:checkmark"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                mr: 2,
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color: 'primary.main',
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(!option.enabled && { color: 'currentColor' }),
              }}
            />
            // @ts-expect-error TS(2304): Cannot find name 'option'.
            {option.label}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Stack>)}
        </Box>
      </div>

      {/* -- Tour Program -- */}
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5">Tour Program</Typography>
        // @ts-expect-error TS(2304): Cannot find name 'program'.
        {program.map((content: any) => <HighlightItem key={content.label} label={content.label} text={content.text} />)}
      </Stack>
    </Stack>
  );
}

TravelTourDetailsSummary.propTypes = {
  tour: PropTypes.shape({
    availableEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    availableStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    duration: PropTypes.string,
    highlights: PropTypes.array,
    includes: PropTypes.array,
    languages: PropTypes.array,
    location: PropTypes.string,
    program: PropTypes.array,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      phoneNumber: PropTypes.string,
    }),
  }),
};

// ----------------------------------------------------------------------

function OverviewItem({
  icon,
  label,
  text = '-'
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      <Iconify icon={icon} width={24} />
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={0.5}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {label}
        </Typography>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  );
}

OverviewItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  text: PropTypes.string,
};

// ----------------------------------------------------------------------

function HighlightItem({
  label,
  text
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1}>
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="subtitle1"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}
      >
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          component="span"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 12, height: 2, borderRadius: 1, bgcolor: 'currentColor', mr: 1.5 }}
        />
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        {label}
      // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      </Typography>
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      <Typography>{text}</Typography>
    </Stack>
  );
}

HighlightItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};
