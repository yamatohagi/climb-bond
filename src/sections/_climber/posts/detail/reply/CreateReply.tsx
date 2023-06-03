import { Box, Card, Grid } from '@mui/material';
import { useCreateOneReplyMutation } from 'src/generated/graphql';
import FormProvider from 'src/components/hook-form/FormProvider';
import { RHFTextArea, RHFTextField } from 'src/components/hook-form';
import { LoadingButton } from '@mui/lab';
import useFormAndValidation, { ReplyInput } from './hooks/useReplyForm';
import { CreateReplyProps } from './types';

export default function CreateReply({ postId, refetch }: CreateReplyProps) {
  const [createOneReplyMutation] = useCreateOneReplyMutation();
  const methods = useFormAndValidation();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const handleReplySubmit = async (fv: ReplyInput) => {
    const { errors } = await createOneReplyMutation({
      variables: {
        data: {
          ...fv,
          post: {
            connect: { id: postId },
          },
        },
      },
    });
    if (errors) return;
    reset();
    refetch();
  };

  return (
    <Box sx={{ mt: 2, mb: 3 }}>
      <Card sx={{ padding: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(handleReplySubmit)}>
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
            disabled={Object.keys(errors).length > 0}
          >
            送信
          </LoadingButton>
        </FormProvider>
      </Card>
    </Box>
  );
}
