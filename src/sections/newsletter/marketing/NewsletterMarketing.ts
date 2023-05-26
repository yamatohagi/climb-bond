import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function NewsletterMarketing({
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ py: 8, bgcolor: 'background.neutral' }} {...other}>
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={3}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems="center"
          // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
          justifyContent="space-between"
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            spacing={3}
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction={{ xs: 'column', md: 'row' }}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <SvgColor
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src="/assets/icons/ic_newsletter.svg"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ width: 80, height: 80, color: 'primary.main' }}
            />

            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="h4" gutterBottom>
                // @ts-expect-error TS(2304): Cannot find name 'Sign'.
                Sign Up For Newsletter
              </Typography>

              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                // @ts-expect-error TS(2304): Cannot find name 'Receive'.
                Receive 50% discount on first project
              </Typography>
            </div>
          </Stack>

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
                    // @ts-expect-error TS(2304): Cannot find name 'color'.
                    color="inherit"
                    // @ts-expect-error TS(2304): Cannot find name 'variant'.
                    variant="contained"
                    // @ts-expect-error TS(2304): Cannot find name 'sx'.
                    sx={{ height: 54, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  >
                    // @ts-expect-error TS(2304): Cannot find name 'Sign'.
                    Sign Up
                  </Button>
                </InputAdornment>
              ),
              sx: { pr: 0 },
            }}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ maxWidth: 466 }}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          />
        </Stack>
      </Container>
    </Box>
  );
}

NewsletterMarketing.propTypes = {
  sx: PropTypes.object,
};
