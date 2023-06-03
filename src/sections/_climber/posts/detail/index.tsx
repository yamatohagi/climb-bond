import { SortOrder, useFindFirstPostQuery, useRepliesQuery } from 'src/generated/graphql';

import { useRouter } from 'next/router';
import { ClimberPostItemSkeleton } from '../components';
import DetailCard from './component/DetailCard';
import ReplyCards from './reply/ReplyCards';
import CreateReply from './reply/CreateReply';

export default function ClimberPostDetail({}: {}) {
  const router = useRouter();
  const postId = Number(router.query.id);

  const { error, data, loading } = useFindFirstPostQuery({
    variables: {
      where: {
        id: { equals: postId },
      },
    },
  });

  const { data: repliesData, refetch: repliesRefetch } = useRepliesQuery({
    variables: {
      where: {
        postId: { equals: postId },
      },
      orderBy: [
        {
          createdAt: SortOrder.Asc,
        },
      ],
    },
  });

  return (
    <>
      {!loading && data ? <DetailCard post={data?.findFirstPost} /> : <ClimberPostItemSkeleton />}

      {repliesData ? <ReplyCards replies={repliesData?.replies} /> : <></>}

      <CreateReply postId={postId} refetch={repliesRefetch} />
    </>
  );
}
