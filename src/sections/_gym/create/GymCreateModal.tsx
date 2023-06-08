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

import {
  useCreateOneGymMutation,
  useCreateOnePostMutation,
  useGymOptionsQuery,
  useGymsQuery,
} from 'src/generated/graphql';
import { SortOrder } from 'src/generated/graphql';
import usePostForm, { PostInput } from './hooks/usePostForm';
import { LoadingButton } from '@mui/lab';

import { v4 as uuidv4 } from 'uuid';
import { supabase } from 'src/lib/supabase/supabaseClient';

// 画像アップロード機能
const uploadImage = async (imageFile: File) => {
  const filePath = `topImages/${uuidv4()}`;
  const { error, data } = await supabase.storage.from('gymImages').upload(filePath, imageFile);
  if (error) throw error;
  return data.path;
};

// 画像表示機能
const getImageUrl = async (path: string) => {
  const { data } = supabase.storage.from('gymImages').getPublicUrl(path);

  return data.publicUrl;
};
// ローカルで画像をプレビューするための関数
const previewImage = (imageFile: File) => {
  return URL.createObjectURL(imageFile);
};

// 画像アップロードと表示機能を組み込んだコード
export default function GymCreateModal({
  open,
  onClose,
  refetch,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}) {
  const [createOneGymMutation] = useCreateOneGymMutation();
  const methods = usePostForm();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
  } = methods;

  const onSubmit = async (params: PostInput) => {
    const { name, climbingType } = params;
    let imagePath = null;
    let imageUrl;
    if (imageFile) {
      imagePath = await uploadImage(imageFile);
      imageUrl = await getImageUrl(imagePath);
    }

    const { errors } = await createOneGymMutation({
      variables: {
        data: {
          climbingType: climbingType,
          name: name,
          image: imageUrl,
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
                <Grid item xs={12}>
                  <input
                    {...register('imageFile')}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.item(0);
                      if (file) {
                        setImageFile(file);
                        setPreviewUrl(previewImage(file));
                      }
                    }}
                  />
                  {previewUrl && <img src={previewUrl} alt="Preview" />}
                </Grid>
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
