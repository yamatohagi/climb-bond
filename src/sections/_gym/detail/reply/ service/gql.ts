import { gql } from '@apollo/client';

gql`
  mutation CreateOneGymImpressionPost($data: GymImpressionPostCreateInput!) {
    createOneGymImpressionPost(data: $data) {
      id
    }
  }
`;
