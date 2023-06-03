import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { _jobs } from 'src/_mock';
import { ClimberPostList } from '../posts/list';
import CareerFilters from '../posts/filters';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import Button from '@mui/material/Button';
import { ClimberPostCreateModal } from '../posts/create-edit';

import {
  SortOrder,
  useFindFirstPostQuery,
  usePostsQuery,
  useRepliesQuery,
} from 'src/generated/graphql';
import { gql } from '@apollo/client';
import { ClimberPostDetail } from '../posts/details';
import { useRouter } from 'next/router';
import { ClimberPostItemSkeleton } from '../posts/item';

// ----------------------------------------------------------------------

gql`
  query FindFirstPost($where: PostWhereInput) {
    findFirstPost(where: $where) {
      id
      title
      content
      gym {
        name
      }
      grade
      experienceMonths
      belayMonths
      createdAt
      preferredDayAndTimes {
        id
        dayAndTime
      }
      climbingType
    }
  }
`;

gql`
  query Replies($where: ReplyWhereInput, $orderBy: [ReplyOrderByWithRelationInput!]) {
    replies(where: $where, orderBy: $orderBy) {
      id
      userName
      title
      content
      createdAt
    }
  }
`;

export default function CreateReply() {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);

  const { error, data, loading } = useFindFirstPostQuery({
    variables: {
      where: {
        id: { equals: Number(id as string) },
      },
    },
  });

  const { data: repliesData, refetch: repliesRefetch } = useRepliesQuery({
    variables: {
      where: {
        postId: { equals: Number(id as string) },
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
      <Container>
        {!loading && data ? (
          <ClimberPostDetail
            data={data}
            repliesData={repliesData}
            repliesRefetch={repliesRefetch}
          />
        ) : (
          <ClimberPostItemSkeleton />
        )}
      </Container>

      <NewsletterClimber />
    </>
  );
}
