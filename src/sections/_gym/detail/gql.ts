import { gql } from '@apollo/client';

gql`
  query FindFirstGym($where: GymWhereInput) {
    findFirstGym(where: $where) {
      _count {
        impressionPosts
      }
      id
      image
      name
      updatedAt
      createdAt
      climbingType
      impressionPosts {
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
