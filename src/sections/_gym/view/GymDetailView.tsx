import Container from '@mui/material/Container';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import DetailCard from '../detail';

export default function GymDetailView() {
  return (
    <>
      <Container>
        <DetailCard />
      </Container>
      <NewsletterClimber />
    </>
  );
}
