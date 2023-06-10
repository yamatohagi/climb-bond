import { useFindFirstGymQuery } from 'src/generated/graphql';

import { useRouter } from 'next/router';
import DetailCard from './component/DetailCard';
import GymItemSkeleton from '../components/GymItemSkeleton';

export default function ClimberPostDetail() {
  const router = useRouter();
  const gymId = Number(router.query.id);

  const { data, loading } = useFindFirstGymQuery({
    variables: {
      where: {
        id: { equals: gymId },
      },
    },
  });

  return <>{!loading && data ? <DetailCard gym={data?.findFirstGym} /> : <GymItemSkeleton />}</>;
}
