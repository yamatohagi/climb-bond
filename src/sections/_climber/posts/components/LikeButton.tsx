import { gql } from '@apollo/client';
import { IconButton, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import { useCreateOnePostLikeMutation } from 'src/generated/graphql';

gql`
  mutation CreateOnePostLike($data: PostLikeCreateInput!) {
    createOnePostLike(data: $data) {
      userId
      postId
    }
  }
`;

export const LikeButton = ({ likeCount, postId }: { likeCount: number; postId: number }) => {
  const [createOnePostLike] = useCreateOnePostLikeMutation();

  const handleOnClick = async () => {
    const gestInfo = JSON.parse(localStorage.getItem('gestInfo') || 'null');
    if (!gestInfo) return;
    const { data } = await createOnePostLike({
      variables: {
        data: {
          userId: gestInfo.key,
          post: {
            connect: {
              id: postId,
            },
          },
        },
      },
    });
  };

  return (
    <IconButton
      sx={{ display: 'flex', alignItems: 'center', p: 0 }}
      onClick={handleOnClick} // クリックイベントハンドラを追加
    >
      <Iconify icon="mdi:heart-outline" width={17} sx={{ mr: 1 }} />
      <Typography> {likeCount}</Typography>
    </IconButton>
  );
};
