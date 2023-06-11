import Container from '@mui/material/Container';

import ClimberPostList from '../posts/list/ClimberPostList';
import CareerFilters from '../posts/filters';

export default function ClimberPostsView() {
  return (
    <Container>
      <CareerFilters />
      <ClimberPostList />
    </Container>
  );
}
