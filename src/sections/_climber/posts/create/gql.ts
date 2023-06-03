import { gql } from '@apollo/client';

gql`
  mutation CreateOnePost($data: PostCreateInput!) {
    createOnePost(data: $data) {
      title
      content
      gymId
      climbingType
      belayMonths
      experienceMonths
      grade
      preferredDayAndTimes {
        dayAndTime
      }
    }
  }
`;

gql`
  query Gyms($orderBy: [GymOrderByWithRelationInput!]) {
    gyms(orderBy: $orderBy) {
      id
      name
    }
  }
`;
