import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Dialog,
  Stack,
} from '@mui/material';
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
import { ImageDisplay } from 'src/components/image-display';
import { ImageInput } from 'src/components/image-input';
import { CropModal } from 'src/components/crop-modal';
import { Area } from 'react-easy-crop';
import { getCroppedImg } from 'src/utils/cropImage';
import useGymForm, { GymInput } from './hooks/usePostForm';

// 画像アップロード機能
const uploadImage = async (imageBlob: Blob) => {
  const filePath = `topImages/${uuidv4()}`;
  const { error, data } = await supabase.storage.from('gymImages').upload(filePath, imageBlob, {
    contentType: 'image/jpeg', // 画像のフォーマットに合わせて変更してください
  });
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
  const [openCrop, setOpenCrop] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (!defaultName) return undefined;
    return methods.reset({ ...methods.getValues(), name: defaultName });
  }, [defaultName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    orderNumber: number,
    photoImageId?: string
  ) => {
    if (e && e.target.files) {
      setOpenCrop(true);
      const file: File = e.target.files[0];

      setPreviewUrl(previewImage(file));
    }
  };

  const closeCrop = () => {
    setOpenCrop(false);
  };

  // CropperのuploadImageを以下のように変更
  const handleUploadImage = async (croppedAreaPixels: Area, rotation: number) => {
    const blob = await getCroppedImg(previewUrl || '', croppedAreaPixels, rotation, 'test');
    const url = URL.createObjectURL(blob);
    setPreviewUrl(url);
    setImageBlob(blob); // useStateでblobを管理してください
    closeCrop();
  };

  const onSubmit = async (params: GymInput) => {
    const { name, climbingType } = params;
    let imagePath = null;
    let imageUrl;

    if (imageBlob) {
      // ここをimageFileからimageBlobに変更
      imagePath = await uploadImage(imageBlob); // ここも同様にimageFileからimageBlobに変更
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
                {previewUrl ? (
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                  >
                    <ImageDisplay
                      orderNumber={0}
                      width={300}
                      height={300}
                      photoImageId={previewUrl}
                      photoURL={previewUrl}
                      handleChange={handleChange}
                    />
                  </Stack>
                ) : (
                  <ImageInput
                    orderNumber={0}
                    width={300}
                    height={300}
                    handleChange={handleChange}
                  />
                )}
                <Dialog maxWidth="sm" open={openCrop}>
                  <CropModal
                    {...{
                      width: 300,
                      height: 300,
                      photoURL: previewUrl || '',
                      disabled: false,
                      closeCrop,
                      uploadImage: handleUploadImage,
                    }}
                  />
                </Dialog>
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
