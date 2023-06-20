import { useFindFirstGymQuery } from 'src/generated/graphql';

import { useRouter } from 'next/router';
import DetailCard from './component/DetailCard';
import GymItemSkeleton from '../components/GymItemSkeleton';
import ReplyItemSkeleton from './reply/ReplyItemSkeleton';
import ReplyCards from './reply/ReplyCards';
import CreateImpressionPost from './reply/CreateImpressionPost';

export default function ClimberPostDetail() {
  const router = useRouter();
  const gymId = Number(router.query.id);

  const { data, loading, refetch } = useFindFirstGymQuery({
    variables: {
      where: {
        id: { equals: gymId },
      },
    },
    skip: !gymId,
  });

  return (
    <>
      {!loading && data ? <DetailCard gym={data?.findFirstGym} /> : <GymItemSkeleton />}

      {data?.findFirstGym?.impressionPosts ? (
        <ReplyCards impressionPosts={data?.findFirstGym?.impressionPosts} />
      ) : (
        <ReplyItemSkeleton />
      )}
      <CreateImpressionPost
        postId={gymId}
        refetch={refetch}
        replyCount={data?.findFirstGym?.impressionPosts.length || 0}
      />
    </>
  );
}
