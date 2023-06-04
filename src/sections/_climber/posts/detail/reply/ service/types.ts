import { ObservableQuery } from '@apollo/client';

export type CreateReplyProps = {
  postId: number;
  refetch: any;
  replyCount: number;
};
