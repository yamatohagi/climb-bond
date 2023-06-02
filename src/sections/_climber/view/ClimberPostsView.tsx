import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { _jobs } from 'src/_mock';
import { ClimberPostList } from '../posts/list';
import CareerFilters from '../posts/filters';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import Button from '@mui/material/Button';
import { ClimberPostCreateModal } from '../posts/create-edit';

import { SortOrder, usePostsQuery } from 'src/generated/graphql';
import { gql } from '@apollo/client';

// ----------------------------------------------------------------------

gql`
  query Posts($orderBy: [PostOrderByWithRelationInput!]) {
    posts(orderBy: $orderBy) {
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

export default function ClimberPostsView() {
  const [open, setOpen] = useState(false);

  const { error, data, loading } = usePostsQuery({
    variables: { orderBy: [{ createdAt: SortOrder.Desc }] },
  });

  return (
    <>
      <Container>
        <CareerFilters />
        <Button onClick={() => setOpen(true)} variant="contained" size="large">
          新規投稿
        </Button>
        <ClimberPostCreateModal open={open} onClose={() => setOpen(false)} />
        {<ClimberPostList data={data} loading={loading} />}
      </Container>

      <NewsletterClimber />
    </>
  );
}
