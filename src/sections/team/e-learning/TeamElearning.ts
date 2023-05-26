// @mui
import PropTypes from 'prop-types';
import { Typography, Container, Stack, Button, Box } from '@mui/material';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

export default function TeamElearning({
  members
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3} sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">Meet Our Teachers</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Since'.
          Since wire-frame renderings are relatively simple and fast to calculate, they are often
          // @ts-expect-error TS(2304): Cannot find name 'used'.
          used in cases
        </Typography>
      </Stack>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'py'.
          py: { xs: 8, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {members.map((member: any) => <TeamMember key={member.id} member={member} />)}
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Stack alignItems="center">
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button variant="outlined" size="large" color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'View'.
          View All Teachers
        </Button>
      </Stack>
    </Container>
  );
}

TeamElearning.propTypes = {
  members: PropTypes.array,
};
