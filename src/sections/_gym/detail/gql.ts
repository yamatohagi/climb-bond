import { gql } from '@apollo/client';

gql`
  query FindFirstGym($where: GymWhereInput) {
    findFirstGym(where: $where) {
      _count {
        impPosts
      }
      id
      image
      name
      updatedAt
      createdAt
      climbingType
      impPosts {
        id
        createdAt
        updatedAt
        deletedAt
        userName
        title
        content
      }
    }
  }
`;
