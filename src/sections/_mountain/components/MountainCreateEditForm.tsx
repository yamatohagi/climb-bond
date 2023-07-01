import { Grid, TextField, Typography } from '@mui/material';
import FormProvider from 'src/components/hook-form/FormProvider';
import { RHFTextArea } from 'src/components/hook-form';
import { LoadingButton } from '@mui/lab';
import useResponsive from 'src/hooks/useResponsive';
import RequiredTag from 'src/components/ui/RequiredTag';

export default function MountainCreateEditForm({ handleReplySubmit, methods }: any) {
  const {
    handleSubmit,
    formState: { isSubmitting, errors: formErrors },
  } = methods;
  const isMdUp = useResponsive('up', 'md');

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleReplySubmit)}>
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        山情報を登録
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        山情報の登録の協力をお願いします。 入力項目が多数あるので、可能な範囲で構いません。
        <br /> <br />
        一度登録した後は、山イキタイのユーザーなら誰でも編集することができます。
        <br /> <br />
        既に同じ山が登録されている場合は後から登録したページは削除されますのでご注意ください。
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography
            variant={isMdUp ? 'subtitle1' : 'subtitle2'}
            color="#212121"
            align="left"
            sx={{ pl: 0.5, mb: 0.5 }}
          >
            <RequiredTag /> 名称
          </Typography>
          <TextField size="small" name="userName" placeholder="例：たなか たろう" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography
            variant={isMdUp ? 'subtitle1' : 'subtitle2'}
            color="#212121"
            align="left"
            sx={{ pl: 0.5, mb: 0.5 }}
          >
            <RequiredTag /> 備考
          </Typography>
          <RHFTextArea size="small" name="content" />
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
