import { gql } from '@apollo/client';

gql`
  query Posts($orderBy: [PostOrderByWithRelationInput!]) {
    posts(orderBy: $orderBy) {
      id
      title
      content
      gym {
        name
      }
      grade
      experienceMonths
      belayMonths
      createdAt
      preferredDayAndTimes {
        id
        dayAndTime
      }
      climbingType
      like {
        id
        postId
        userId
      }
      _count {
        replies
      }
    }
  }
`;
