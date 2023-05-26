import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  Button,
  Rating,
  Dialog,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormHelperText,
} from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/hook-form' or i... Remove this comment to see the full error message
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ReviewNewForm({
  onClose,
  ...other
}: any) {
  const defaultValues = {
    rating: null,
    review: '',
    name: '',
    email: '',
  };

  const NewReviewSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    rating: Yup.mixed().required('Rating is required'),
    review: Yup.string().required('Review is required'),
    email: Yup.string().required('Email is required').email('That is not an email'),
  });

  const methods = useForm({
    resolver: yupResolver(NewReviewSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      onClose();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // @ts-expect-error TS(2749): 'Dialog' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Dialog fullWidth maxWidth="sm" onClose={onClose} {...other}>
      // @ts-expect-error TS(2588): Cannot assign to 'onSubmit' because it is a consta... Remove this comment to see the full error message
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit: any)}>
        // @ts-expect-error TS(2749): 'DialogTitle' refers to a value, but is being used... Remove this comment to see the full error message
        <DialogTitle sx={{ typography: 'h3', pb: 3 }}>Review</DialogTitle>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <DialogContent sx={{ py: 0 }}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={2.5}>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="subtitle2" gutterBottom>
                // @ts-expect-error TS(2304): Cannot find name 'Your'.
                Your rating:
              </Typography>

              <Controller
                // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
                name="rating"
                // @ts-expect-error TS(2304): Cannot find name 'control'.
                control={control}
                // @ts-expect-error TS(2304): Cannot find name 'render'.
                render={({ field }) => <Rating {...field} value={Number(field: any.value)} />}
              />

              // @ts-expect-error TS(2304): Cannot find name 'errors'.
              {!!errors.rating && <FormHelperText error> {errors.rating?.message}</FormHelperText>}
            </div>

            // @ts-expect-error TS(2304): Cannot find name 'multiline'.
            <RHFTextField multiline rows={3} name="review" label="Review *" />

            // @ts-expect-error TS(2304): Cannot find name 'label'.
            <RHFTextField name="name" label="Name *" />

            // @ts-expect-error TS(2304): Cannot find name 'label'.
            <RHFTextField name="email" label="Email address *" />
          </Stack>
        </DialogContent>

        <DialogActions>
          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button variant="outlined" onClick={onClose} color="inherit">
            // @ts-expect-error TS(2304): Cannot find name 'Cancel'.
            Cancel
          </Button>

          // @ts-expect-error TS(2304): Cannot find name 'color'.
          <LoadingButton color="inherit" type="submit" variant="contained" loading={isSubmitting}>
            // @ts-expect-error TS(2304): Cannot find name 'Post'.
            Post Review
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}

ReviewNewForm.propTypes = {
  onClose: PropTypes.func,
};
