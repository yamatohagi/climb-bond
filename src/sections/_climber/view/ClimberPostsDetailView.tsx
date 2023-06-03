import Container from '@mui/material/Container';
import NewsletterClimber from 'src/sections/newsletter/climber/NewsletterCareer';
import ClimberPostDetail from '../posts/detail';

export default function CreateReply() {
  return (
    <>
      <Container>
        <ClimberPostDetail />
      </Container>

      <NewsletterClimber />
    </>
  );
}
