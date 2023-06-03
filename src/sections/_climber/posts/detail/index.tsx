import { SortOrder, useFindFirstPostQuery, useRepliesQuery } from 'src/generated/graphql';
import { CreateReply, PostReplies } from './reply';
import { useRouter } from 'next/router';
import { ClimberPostItemSkeleton } from '../item';
import DetailCard from './component/DetailCard';

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

      {repliesData ? <PostReplies replies={repliesData?.replies} /> : <></>}

      <CreateReply postId={postId} refetch={repliesRefetch} />
    </>
  );
}
