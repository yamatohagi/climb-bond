import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ContactCareerForm() {
  const CareerContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(CareerContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: 10,
      }}
    >
      // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Grid container spacing={3} justifyContent="center">
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid xs={12} md={8}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h3">Drop Us A Line</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            <Typography sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'We'.
              We normally respond within 2 business days
            </Typography>
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'methods'.
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit: any)}>
            // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
            <Stack spacing={2.5}>
              // @ts-expect-error TS(2304): Cannot find name 'label'.
              <RHFTextField name="fullName" label="Full name" />

              // @ts-expect-error TS(2304): Cannot find name 'label'.
              <RHFTextField name="email" label="Email" />

              // @ts-expect-error TS(2304): Cannot find name 'label'.
              <RHFTextField name="subject" label="Subject" />

              // @ts-expect-error TS(2304): Cannot find name 'multiline'.
              <RHFTextField name="message" multiline rows={4} label="Message" sx={{ pb: 2.5 }} />

              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              <Stack alignItems="center" width={1}>
                // @ts-expect-error TS(2749): 'LoadingButton' refers to a value, but is being us... Remove this comment to see the full error message
                <LoadingButton
                  // @ts-expect-error TS(2304): Cannot find name 'size'.
                  size="large"
                  // @ts-expect-error TS(2304): Cannot find name 'type'.
                  type="submit"
                  // @ts-expect-error TS(2304): Cannot find name 'variant'.
                  variant="contained"
                  // @ts-expect-error TS(2304): Cannot find name 'color'.
                  color="inherit"
                  // @ts-expect-error TS(2304): Cannot find name 'loading'.
                  loading={isSubmitting}
                >
                  // @ts-expect-error TS(2304): Cannot find name 'Send'.
                  Send Message
                </LoadingButton>
              </Stack>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
