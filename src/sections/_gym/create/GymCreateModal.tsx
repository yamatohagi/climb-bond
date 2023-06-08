import { _jobs } from 'src/_mock';
import { Button, DialogTitle, DialogContent, DialogActions, Grid, Dialog } from '@mui/material';
import { DialogAnimate } from 'src/components/animate';
import getVariant from 'src/sections/examples/animate/getVariant';
import { Box } from '@mui/system';
import { RHFMultiCheckboxAddGrid, RHFSelectBox, RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import { ClimbingType, Gym } from '@prisma/client';
import { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

import { useCreateOnePostMutation, useGymOptionsQuery, useGymsQuery } from 'src/generated/graphql';
import { SortOrder } from 'src/generated/graphql';
import usePostForm, { PostInput } from './hooks/usePostForm';
import { LoadingButton } from '@mui/lab';

export default function GymCreateModal({
  open,
  onClose,
  refetch,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}) {
  const [createOnePostMutation] = useCreateOnePostMutation();
  const methods = usePostForm();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (params: PostInput) => {
    const { gymId, ...otherParams } = params;
    const { errors } = await createOnePostMutation({
      variables: {
        data: {
          ...otherParams,
          gym: { connect: { id: params.gymId } },
          preferredDayAndTimes: {
            create: params.preferredDayAndTimes.map((dayAndTime) => ({
              dayAndTime: dayAndTime,
            })),
          },
        },
      },
    });
    if (errors) return;
    refetch();
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} transitionDuration={350}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="alert-dialog-title">{`ガンバ！！`}</DialogTitle>
          <DialogContent>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <RHFTextField size="small" name="name" label="なまえ" />
                </Grid>
                {/* <Grid item xs={12}>
                    <RHFTextField name="content" label="Content" multiline rows={4} required />
                  </Grid> */}
                <Grid item xs={12} sm={6}>
                  <RHFSelectBox
                    size="small"
                    name="climbingType"
                    label="好きな壁"
                    options={[
                      { value: ClimbingType.BOULDER, label: 'ボルダー' },
                      { value: ClimbingType.LEAD, label: 'リード' },
                      { value: ClimbingType.BOTH, label: 'どっちも' },
                    ]}
                  ></RHFSelectBox>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>キャンセル</Button>
            <LoadingButton variant="contained" type="submit" loading={isSubmitting}>
              投稿！
            </LoadingButton>
          </DialogActions>
        </FormProvider>
      </Dialog>
    </>
  );
}
