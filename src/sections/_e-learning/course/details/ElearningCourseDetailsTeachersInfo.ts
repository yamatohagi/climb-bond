import PropTypes from 'prop-types';
// @mui
import { Stack, Avatar, Typography, Paper, Box, Link } from '@mui/material';
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

ElearningCourseDetailsTeachersInfo.propTypes = {
  teachers: PropTypes.array,
};

export default function ElearningCourseDetailsTeachersInfo({ teachers = [] }) {
  return <>
    // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
    <Typography variant="h4" sx={{ mb: 5 }}>
      // @ts-expect-error TS(2304): Cannot find name 'Instructors'.
      Instructors ({teachers.length})
    </Typography>

    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error TS(2304): Cannot find name 'gap'.
        gap: { xs: 3, md: 4 },
        gridTemplateColumns: {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'lg'.
          lg: 'repeat(2, 1fr)',
        },
      }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {teachers.map((teacher: any) => <TeacherItem key={teacher.id} teacher={teacher} />)}
    </Box>
  </>;
}

// ----------------------------------------------------------------------

TeacherItem.propTypes = {
  teacher: PropTypes.object,
};

function TeacherItem({
  teacher
}: any) {
  const { picture, name, role, ratings, reviews, students, courses } = teacher;

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction="row" spacing={3} flexWrap="wrap">
        // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Avatar src={picture} sx={{ width: 72, height: 72 }} />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} flexGrow={1}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={0.5}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h6">{name}</Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {role}
            </Typography>
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={0.5} direction="row" alignItems="center">
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Box sx={{ typography: 'h6' }}>
              // @ts-expect-error TS(2304): Cannot find name 'ratings'.
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            // @ts-expect-error TS(2304): Cannot find name 'reviews'.
            {reviews && (
              // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2304): Cannot find name 'reviews'.
                ({fShortenNumber(reviews: any)} reviews)
              </Link>
            )}
          </Stack>

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:events" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            <Box component="strong" sx={{ mr: 0.25 }}>
              {fShortenNumber(students: any)}
            </Box>
            // @ts-expect-error TS(2304): Cannot find name 'Students'.
            Students
          </Stack>

          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:notebook" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            <Box component="strong" sx={{ mr: 0.25 }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {courses}
            </Box>
            // @ts-expect-error TS(2304): Cannot find name 'Lessons'.
            Lessons
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
