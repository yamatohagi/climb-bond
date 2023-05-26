// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, TextField, InputAdornment } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgGradient } from 'src/utils/cssStyles';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: `${alpha(theme.palette.grey[900], 0.88)}`,
    imgUrl: '/assets/images/career/career_newsletter.jpg',
  }),
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

export default function NewsletterCareer() {
  return (
    // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <StyledRoot>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2">Get The Right Job For You</Typography>

          <Typography>
            // @ts-expect-error TS(2304): Cannot find name 'Subscribe'.
            Subscribe to get updated on latest and relevant career opportunities
          </Typography>

          <TextField
            // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
            fullWidth
            // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
            hiddenLabel
            // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
            placeholder="Enter your email"
            // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
            InputProps={{
              endAdornment: (
                // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
                <InputAdornment position="end">
                  // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
                  <Button
                    // @ts-expect-error TS(2304): Cannot find name 'size'.
                    size="large"
                    // @ts-expect-error TS(2304): Cannot find name 'variant'.
                    variant="contained"
                    // @ts-expect-error TS(2304): Cannot find name 'sx'.
                    sx={{
                      // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                      height: 54,
                      // @ts-expect-error TS(2304): Cannot find name 'borderTopLeftRadius'.
                      borderTopLeftRadius: 0,
                      // @ts-expect-error TS(2304): Cannot find name 'borderBottomLeftRadius'.
                      borderBottomLeftRadius: 0,
                    }}
                  // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                  >
                    // @ts-expect-error TS(2304): Cannot find name 'Subscribe'.
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
              sx: {
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                pr: 0,
                // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
                bgcolor: 'common.white',
                '&:hover, &.Mui-focused': {
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  bgcolor: 'common.white',
                },
              },
            }}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ maxWidth: 560 }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </Stack>
      </Container>
    </StyledRoot>
  );
}
