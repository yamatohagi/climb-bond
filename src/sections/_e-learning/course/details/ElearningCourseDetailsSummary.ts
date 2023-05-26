import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Typography, Chip, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
// @ts-expect-error TS(6142): Module './ElearningCourseDetailsLessonList' was re... Remove this comment to see the full error message
import ElearningCourseDetailsLessonList from './ElearningCourseDetailsLessonList';

// ----------------------------------------------------------------------

ElearningCourseDetailsSummary.propTypes = {
  course: PropTypes.object,
};

export default function ElearningCourseDetailsSummary({
  course
}: any) {
  const { lessons, skills, learnList } = course;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={5}>
      // @ts-expect-error TS(2709): Cannot use namespace 'ElearningCourseDetailsLesson... Remove this comment to see the full error message
      <ElearningCourseDetailsLessonList lessons={lessons} />

      {/* --  Learn -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h4" sx={{ mb: 3 }}>
          // @ts-expect-error TS(2304): Cannot find name 'What'.
          What You Will Learn
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1}>
          // @ts-expect-error TS(2349): This expression is not callable.
          {learnList?.map((learn) => (
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack key={learn} direction="row" alignItems="center">
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  mr: 1.5,
                  // @ts-expect-error TS(2304): Cannot find name 'width'.
                  width: 20,
                  // @ts-expect-error TS(2304): Cannot find name 'height'.
                  height: 20,
                  // @ts-expect-error TS(2304): Cannot find name 'display'.
                  display: 'flex',
                  // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
                  borderRadius: '50%',
                  // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
                  alignItems: 'center',
                  // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
                  justifyContent: 'center',
                  // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
                  bgcolor: (theme: any) => alpha(theme?.palette?.primary?.main, 0.08),
                }}
              >
                <Iconify
                  // @ts-expect-error TS(2304): Cannot find name 'icon'.
                  icon="carbon:checkmark"
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{ width: 16, height: 16, color: 'primary.main' }}
                />
              </Box>
              // @ts-expect-error TS(2304): Cannot find name 'learn'.
              {learn}
            </Stack>
          ))}
        </Stack>
      </div>

      {/* -- Skills -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h4" sx={{ mb: 3 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Skills'.
          Skills You Will Gain
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" flexWrap="wrap">
          // @ts-expect-error TS(2349): This expression is not callable.
          {skills?.map((skill) => (
            // @ts-expect-error TS(2749): 'Chip' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Chip key={skill} label={skill} sx={{ m: 0.5 }} onClick={() => {}} />
          ))}
        </Stack>
      </div>

      {/* -- Overview -- */}
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      <div>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h4" sx={{ mb: 2 }}>
          // @ts-expect-error TS(2304): Cannot find name 'Overview'.
          Overview
        </Typography>

        <Typography>
          // @ts-expect-error TS(2304): Cannot find name 'Consentaneum'.
          Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens
          // @ts-expect-error TS(2304): Cannot find name 'egone'.
          egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca
          // @ts-expect-error TS(2304): Cannot find name 'tenere'.
          tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile.
        </Typography>
      </div>
    </Stack>
  );
}
