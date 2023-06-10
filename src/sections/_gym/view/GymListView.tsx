import Container from '@mui/material/Container';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import GymList from '../list/GymList';

export default function GymListView() {
  return (
    <>
      <Container>
        <GymList />
      </Container>
      <NewsletterClimber />
    </>
  );
}
