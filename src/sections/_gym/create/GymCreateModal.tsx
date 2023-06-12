import { Button, DialogTitle, DialogContent, DialogActions, Grid, Dialog } from '@mui/material';
import { Box } from '@mui/system';
import { RHFSelectBox, RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/FormProvider';
import { ClimbingType } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useCreateOneGymMutation } from 'src/generated/graphql';
import { LoadingButton } from '@mui/lab';

import { v4 as uuidv4 } from 'uuid';
import { supabase } from 'src/lib/supabase/supabaseClient';
import { ObservableQuery } from '@apollo/client';
import useGymForm, { GymInput } from './hooks/usePostForm';

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
const previewImage = (imageFile: File) => URL.createObjectURL(imageFile);

// 画像アップロードと表示機能を組み込んだコード
export default function GymCreateModal({
  open,
  onClose,
  refetch,
  afterSubmit,
  defaultName,
}: {
  open: boolean;
  onClose: () => void;
  refetch: ObservableQuery['refetch'];
  afterSubmit?: (o: any) => void;
  defaultName?: string;
}) {
  const [createOneGymMutation] = useCreateOneGymMutation();
  const methods = useGymForm();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
  } = methods;

  useEffect(() => {
    if (!defaultName) return undefined;
    return methods.reset({ ...methods.getValues(), name: defaultName });
  }, [defaultName]);

  const onSubmit = async (params: GymInput) => {
    const { name, climbingType } = params;
    let imagePath = null;
    let imageUrl;
    if (imageFile) {
      imagePath = await uploadImage(imageFile);
      imageUrl = await getImageUrl(imagePath);
    }

    const { errors, data } = await createOneGymMutation({
      variables: {
        data: {
          climbingType,
          name,
          image: imageUrl,
        },
      },
    });
    if (errors) return;
    await refetch();
    if (afterSubmit) afterSubmit(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} transitionDuration={350}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="alert-dialog-title">ガンバ！！</DialogTitle>
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
                  label="壁のタイプ"
                  options={[
                    { value: ClimbingType.BOULDER, label: 'BOULDER' },
                    { value: ClimbingType.LEAD, label: 'LEAD' },
                    { value: ClimbingType.BOTH, label: 'BOULDER＆LEAD' },
                  ]}
                />
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
  );
}
