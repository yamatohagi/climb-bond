import { ObservableQuery } from '@apollo/client';

export type CreateReplyProps = {
  postId: number;
  refetch: ObservableQuery['refetch'];
};
