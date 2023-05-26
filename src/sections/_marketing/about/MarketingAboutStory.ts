// @mui
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Box, Stack, Typography, Container } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    year: '2021',
    title: 'Customer Satisfaction',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2020',
    title: 'Transparency',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2019',
    title: 'Reputation',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2018',
    title: 'Cooperation',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={3}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            maxWidth: 480,
            // @ts-expect-error TS(2304): Cannot find name 'mx'.
            mx: 'auto',
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: 'center',
            // @ts-expect-error TS(2304): Cannot find name 'mb'.
            mb: { xs: 8, md: 10 },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Our Story</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Nunc'.
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'position'.
        <Timeline position={isMdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value: any, index: any) => (
            // @ts-expect-error TS(2749): 'TimelineItem' refers to a value, but is being use... Remove this comment to see the full error message
            <TimelineItem
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={value.title}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                '&:before': {
                  // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
                  ...(!isMdUp && { display: 'none' }),
                },
              }}
            >
              // @ts-expect-error TS(2749): 'TimelineSeparator' refers to a value, but is bein... Remove this comment to see the full error message
              <TimelineSeparator>
                // @ts-expect-error TS(2749): 'TimelineDot' refers to a value, but is being used... Remove this comment to see the full error message
                <TimelineDot color={COLORS[index]} />
                // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
                <TimelineConnector />
              </TimelineSeparator>

              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {value.year}
                </Typography>

                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {value.title}
                </Typography>

                <Typography
                  // @ts-expect-error TS(2304): Cannot find name 'variant'.
                  variant="body2"
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    color: 'text.secondary',
                    // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
                    maxWidth: { md: 360 },
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                >
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Timeline>
      </Container>
    </Box>
  );
}
