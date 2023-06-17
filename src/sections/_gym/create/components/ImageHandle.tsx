import { Dialog, Stack } from '@mui/material';
import { useState } from 'react';
import { Area } from 'react-easy-crop';
import { CropModal } from 'src/components/crop-modal';
import { ImageDisplay } from 'src/components/image-display';
import { ImageInput } from 'src/components/image-input';
import { getCroppedImg } from 'src/utils/cropImage';

// ローカルで画像をプレビューするための関数
const previewImage = (imageFile: File) => URL.createObjectURL(imageFile);

export const ImageHandle = ({ setImageBlob }: any) => {
  const [openCrop, setOpenCrop] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  return (
    <>
      {previewUrl ? (
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
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
        <ImageInput orderNumber={0} width={300} height={300} handleChange={handleChange} />
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
    </>
  );
};
