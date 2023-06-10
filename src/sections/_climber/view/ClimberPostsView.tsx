import Container from '@mui/material/Container';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import ClimberPostList from '../posts/list/ClimberPostList';
import CareerFilters from '../posts/filters';

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
