import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import FormProvider, { RHFCodes } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function AuthVerifyCodeForm() {
  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
    code6: Yup.string().required('Code is required'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // @ts-expect-error TS(2550): Property 'values' does not exist on type 'ObjectCo... Remove this comment to see the full error message
      console.log('DATA', Object.values(data).join(''));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // @ts-expect-error TS(2588): Cannot assign to 'onSubmit' because it is a consta... Remove this comment to see the full error message
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit: any)}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3}>
        // @ts-expect-error TS(2304): Cannot find name 'keyName'.
        <RHFCodes keyName="code" inputs={['code1', 'code2', 'code3', 'code4', 'code5', 'code6']} />

        // @ts-expect-error TS(2349): This expression is not callable.
        {(!!errors.code1 ||
          !!errors.code2 ||
          !!errors.code3 ||
          !!errors.code4 ||
          !!errors.code5 ||
          !!errors.code6) && (
          // @ts-expect-error TS(2749): 'FormHelperText' refers to a value, but is being u... Remove this comment to see the full error message
          <FormHelperText error sx={{ px: 2 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Code'.
            Code is required
          </FormHelperText>
        )}

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
          sx={{ mt: 3 }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(2304): Cannot find name 'Verify'.
          Verify
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
