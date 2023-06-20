import { useFindFirstGymQuery } from 'src/generated/graphql';

import { useRouter } from 'next/router';
import DetailCard from './component/DetailCard';
import GymItemSkeleton from '../components/GymItemSkeleton';
import ReplyItemSkeleton from './reply/ReplyItemSkeleton';
import ReplyCards from './reply/ReplyCards';
import CreateImpPost from './reply/CreateImpPost';

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

      {data?.findFirstGym?.impPosts ? (
        <ReplyCards impPosts={data?.findFirstGym?.impPosts} />
      ) : (
        <ReplyItemSkeleton />
      )}
      <CreateImpPost
        gymId={gymId}
        refetch={refetch}
        replyCount={data?.findFirstGym?.impPosts.length || 0}
      />
    </>
  );
}
