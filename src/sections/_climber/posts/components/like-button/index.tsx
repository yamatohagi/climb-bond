import { useApolloClient } from '@apollo/client';
import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';
import {
  PostsDocument,
  PostsQuery,
  PostsQueryResult,
  SortOrder,
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
  const client = useApolloClient();
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
            userId: { equals: gestInfo.key },
          },
        },
        onCompleted: (data) => {
          const cacheData = client.cache.readQuery<PostsQueryResult['data']>({
            query: PostsDocument,
            variables: { orderBy: [{ createdAt: SortOrder.Desc }] },
          });
          const updatedPosts = cacheData?.posts.map((post) =>
            post.id === postId
              ? { ...post, like: post.like.filter((like) => like.userId !== gestInfo.key) }
              : post
          );
          client.cache.writeQuery({ query: PostsDocument, data: { posts: updatedPosts } });
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

        onCompleted: (data) => {
          const cacheData = client.cache.readQuery<PostsQueryResult['data']>({
            query: PostsDocument,
            variables: { orderBy: [{ createdAt: SortOrder.Desc }] },
          });
          const updatedPosts = cacheData?.posts.map((post) =>
            post.id === postId ? { ...post, like: [...post.like, data.createOnePostLike] } : post
          );
          console.log(updatedPosts);
          client.cache.writeQuery({ query: PostsDocument, data: { posts: updatedPosts } });
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
