import { useState, useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
import { _jobs } from 'src/_mock';
//
import NewsletterCareer from '../../newsletter/career';
import { ClimberPostList } from '../posts/list';
import CareerFilters from '../posts/filters';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';

// ----------------------------------------------------------------------

export default function ClimberPostsView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <>
      <Container>
        <CareerFilters />

        <ClimberPostList posts={posts} loading={loading} />
      </Container>

      <NewsletterClimber />
    </>
  );
}
