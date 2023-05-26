import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function AuthResetPasswordForm() {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // @ts-expect-error TS(2588): Cannot assign to 'onSubmit' because it is a consta... Remove this comment to see the full error message
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit: any)}>
      // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
      <RHFTextField name="email" hiddenLabel placeholder="Email address" />

      // @ts-expect-error TS(2749): 'LoadingButton' refers to a value, but is being us... Remove this comment to see the full error message
      <LoadingButton
        // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
        fullWidth
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color="inherit"
        // @ts-expect-error TS(2304): Cannot find name 'type'.
        type="submit"
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="contained"
        // @ts-expect-error TS(2304): Cannot find name 'loading'.
        loading={isSubmitting}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ mt: 2.5 }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Reset'.
        Reset Password
      </LoadingButton>
    </FormProvider>
  );
}
