import { gql } from '@apollo/client';

gql`
  query FindFirstPost($where: PostWhereInput) {
    findFirstPost(where: $where) {
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
    }
  }
`;

gql`
  query Replies($where: ReplyWhereInput, $orderBy: [ReplyOrderByWithRelationInput!]) {
    replies(where: $where, orderBy: $orderBy) {
      id
      userName
      title
      content
      createdAt
    }
  }
`;
