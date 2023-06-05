import Container from '@mui/material/Container';
import ClimberPostList from '../posts/list/ClimberPostList';
import CareerFilters from '../posts/filters';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';

export default function ClimberPostsView() {
  return (
    <>
      <Container>
        <CareerFilters />
        <ClimberPostList />
      </Container>
      <NewsletterClimber />
    </>
  );
}
