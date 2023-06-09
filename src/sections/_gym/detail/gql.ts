import { gql } from '@apollo/client';

gql`
  query FindFirstGym($where: GymWhereInput) {
    findFirstGym(where: $where) {
      id
      image
      name
      updatedAt
      createdAt
      climbingType
    }
  }
`;
