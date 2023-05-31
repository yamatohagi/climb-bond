import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { _jobs } from 'src/_mock';
import { ClimberPostList } from '../posts/list';
import CareerFilters from '../posts/filters';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import Button from '@mui/material/Button';
import { ClimberPostCreateModal } from '../posts/create-edit';
import { useQuery } from '@apollo/client';
import { useFindFirstPostQuery } from 'src/generated/graphql';
import { gql } from '@apollo/client';

// ----------------------------------------------------------------------

gql`
  query FindFirstPost {
    findFirstPost {
      id
      title
      grade
    }
  }
`;

export default function ClimberPostsView() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  const [posts, setPosts] = useState([]);
  const { error, data } = useFindFirstPostQuery();
  console.log('グラフ');
  console.log({ data, error });
  console.log('グラフ');
  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(data?.findFirstPost?.grade);
  return (
    <>
      <Container>
        <CareerFilters />
        <Button onClick={() => setOpen(true)} variant="contained" size="large">
          新規投稿
        </Button>
        <ClimberPostCreateModal open={open} onClose={() => setOpen(false)} />

        <ClimberPostList posts={posts} loading={loading} />
      </Container>

      <NewsletterClimber />
    </>
  );
}
