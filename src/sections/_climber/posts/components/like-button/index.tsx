import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';
import {
  PostsQuery,
  useCreateOnePostLikeMutation,
  useDeleteManyPostLikeMutation,
} from 'src/generated/graphql';

export const LikeButton = ({
  likes,
  postId,
}: {
  likes: PostsQuery['posts'][0]['like'];
  postId: number;
}) => {
  const [createOnePostLike] = useCreateOnePostLikeMutation();
  const [deleteManyPostLike] = useDeleteManyPostLikeMutation();
  const gestInfo = JSON.parse(localStorage.getItem('gestInfo') || 'null');
  const [checked, setChecked] = useState(likes.some((like) => like.userId === gestInfo.key));
  console.log(gestInfo.key);
  const handleOnClick = async (checked: boolean, event: any) => {
    event.preventDefault();
    if (!gestInfo) return;

    if (checked) {
      const { data } = await deleteManyPostLike({
        variables: {
          where: {
            postId: { equals: postId },
          },
        },
      });
      setChecked(false);
    } else {
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
      setChecked(true);
    }
  };

  return (
    <IconButton
      sx={{ display: 'flex', alignItems: 'center', p: 0 }}
      onClick={(event) => handleOnClick(checked, event)} // クリックイベントハンドラを修正
    >
      {checked ? (
        <Iconify icon="mdi:heart" width={17} sx={{ mr: 1, color: 'red' }} />
      ) : (
        <Iconify icon="mdi:heart-outline" width={17} sx={{ mr: 1 }} />
      )}

      <Typography> {likes.length}</Typography>
    </IconButton>
  );
};
