import { Grid, Typography } from '@mui/material';
import FormProvider from 'src/components/hook-form/FormProvider';
import { RHFTextArea, RHFTextField } from 'src/components/hook-form';
import { LoadingButton } from '@mui/lab';
import useMountainForm from '../hooks/useMountainForm';

export default function MountainCreateEditForm({ handleReplySubmit, methods }: any) {
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, errors: formErrors },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleReplySubmit)}>
      <Typography variant="h6">新規投稿</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
          <RHFTextField size="small" name="userName" label="なまえ" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <RHFTextArea size="small" name="content" label="内容" />
        </Grid>
      </Grid>
      <LoadingButton
        loading={isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        disabled={Object.keys(formErrors).length > 0}
      >
        送信
      </LoadingButton>
    </FormProvider>
  );
}
