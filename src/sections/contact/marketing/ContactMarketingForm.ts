import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Typography, ToggleButton, FormHelperText } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import FormProvider, { RHFTextField, RHFSlider } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const SERVICES = ['Email marketing', 'SEO', ' Social Marketing', 'Research'];

// ----------------------------------------------------------------------

export default function ContactMarketingForm() {
  const MarketingContactSchema = Yup.object().shape({
    services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    compnany: Yup.string().required('Compnany is required'),
    website: Yup.string().required('Website is required'),
  });

  const defaultValues = {
    services: [],
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    compnany: '',
    website: '',
    budget: [2000, 10000],
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
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

  const getSelected = (selectedItems: any, item: any) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value: any) => value !== item)
      : [...selectedItems, item];

  return (
    // @ts-expect-error TS(2588): Cannot assign to 'onSubmit' because it is a consta... Remove this comment to see the full error message
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit: any)}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2.5} alignItems="flex-start">
        // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
        <Controller
          name="services"
          // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
          control={control}
          // @ts-expect-error TS(2304): Cannot find name 'render'.
          render={({ field, fieldState: { error } }) => (
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>
              // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Stack direction="row" flexWrap="wrap">
                // @ts-expect-error TS(2749): 'ToggleButton' refers to a value, but is being use... Remove this comment to see the full error message
                {SERVICES.map((service: any) => <ToggleButton
                  // @ts-expect-error TS(2304): Cannot find name 'field'.
                  {...field}
                  // @ts-expect-error TS(2304): Cannot find name 'key'.
                  key={service}
                  // @ts-expect-error TS(2304): Cannot find name 'color'.
                  color="standard"
                  // @ts-expect-error TS(2304): Cannot find name 'selected'.
                  selected={field.value.includes(service)}
                  // @ts-expect-error TS(2304): Cannot find name 'onChange'.
                  onChange={() => field.onChange(getSelected(field.value, service))}
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    py: 0.5,
                    // @ts-expect-error TS(2304): Cannot find name 'px'.
                    px: 2,
                    // @ts-expect-error TS(2304): Cannot find name 'm'.
                    m: 0.5,
                    // @ts-expect-error TS(2304): Cannot find name 'typography'.
                    typography: 'body2',
                    '&.Mui-selected': {
                      // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                      bgcolor: 'text.primary',
                      // @ts-expect-error TS(2304): Cannot find name 'borderColor'.
                      borderColor: 'transparent',
                      // @ts-expect-error TS(2304): Cannot find name 'color'.
                      color: (theme: any) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                      '&:hover': {
                        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                        bgcolor: 'text.primary',
                      },
                    },
                  }}
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                >
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {service}
                </ToggleButton>)}
              </Stack>

              // @ts-expect-error TS(2304): Cannot find name 'error'.
              {!!error && (
                // @ts-expect-error TS(2749): 'FormHelperText' refers to a value, but is being u... Remove this comment to see the full error message
                <FormHelperText error sx={{ px: 2 }}>
                  // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={{ xs: 2.5, md: 2 }}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 1 }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          <RHFTextField name="firstName" label="First Name" />
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          <RHFTextField name="lastName" label="Last Name" />
        </Stack>

        // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
        <RHFTextField name="email" label="Email" />
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        <RHFTextField name="phoneNumber" label="Phone number" />

        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', md: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={{ xs: 2.5, md: 2 }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 1 }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          <RHFTextField name="compnany" label="Compnany" />

          // @ts-expect-error TS(2304): Cannot find name 'label'.
          <RHFTextField name="website" label="Website" />
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={5} sx={{ py: 2, width: 1 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Your'.
            Your Budget
          </Typography>

          <RHFSlider
            // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
            name="budget"
            // @ts-expect-error TS(2304): Cannot find name 'valueLabelDisplay'.
            valueLabelDisplay="on"
            // @ts-expect-error TS(2304): Cannot find name 'max'.
            max={20000}
            // @ts-expect-error TS(2304): Cannot find name 'step'.
            step={1000}
            // @ts-expect-error TS(2304): Cannot find name 'valueLabelFormat'.
            valueLabelFormat={(value) => fCurrency(value)}
          />
        </Stack>

        // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
        <RHFTextField name="message" label="Message" multiline rows={4} />
      </Stack>

      <LoadingButton
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
      >
        // @ts-expect-error TS(2304): Cannot find name 'Send'.
        Send Request
      </LoadingButton>
    </FormProvider>
  );
}
