import { v4 as uuidv4 } from 'uuid';
import { supabase } from 'src/lib/supabase/supabaseClient';

// 画像アップロード機能
export const uploadImage = async (imageBlob: Blob) => {
  const filePath = `topImages/${uuidv4()}`;
  const { error, data } = await supabase.storage.from('gymImages').upload(filePath, imageBlob, {
    contentType: 'image/jpeg', // 画像のフォーマットに合わせて変更してください
  });
  if (error) throw error;
  return data.path;
};

// 画像表示機能
export const getImageUrl = async (path: string) => {
  const { data } = supabase.storage.from('gymImages').getPublicUrl(path);
  return data.publicUrl;
};
