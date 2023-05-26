// @mui
import PropTypes from 'prop-types';
import { Typography, Box, Container } from '@mui/material';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

export default function TeamMarketingAbout({
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
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        // @ts-expect-error TS(2552): Cannot find name 'Great'. Did you mean 'React'?
        Great Team Is The Key
      </Typography>

      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 3,
          // @ts-expect-error TS(2304): Cannot find name 'mx'.
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
          maxWidth: 480,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 8, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          color: 'text.secondary',
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Since'.
        Since wire-frame renderings are relatively simple and fast to calculate, they are often used
        // @ts-expect-error TS(2304): Cannot find name 'cases'.
        in cases
      </Typography>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          columnGap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'rowGap'.
          rowGap: { xs: 4, md: 5 },
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
    </Container>
  );
}

TeamMarketingAbout.propTypes = {
  members: PropTypes.array,
};
