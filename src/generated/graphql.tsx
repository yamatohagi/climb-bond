import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateGym = {
  __typename?: 'AggregateGym';
  _avg?: Maybe<GymAvgAggregate>;
  _count?: Maybe<GymCountAggregate>;
  _max?: Maybe<GymMaxAggregate>;
  _min?: Maybe<GymMinAggregate>;
  _sum?: Maybe<GymSumAggregate>;
};

export type AggregateGymImpPost = {
  __typename?: 'AggregateGymImpPost';
  _avg?: Maybe<GymImpPostAvgAggregate>;
  _count?: Maybe<GymImpPostCountAggregate>;
  _max?: Maybe<GymImpPostMaxAggregate>;
  _min?: Maybe<GymImpPostMinAggregate>;
  _sum?: Maybe<GymImpPostSumAggregate>;
};

export type AggregateGymImpPostLike = {
  __typename?: 'AggregateGymImpPostLike';
  _avg?: Maybe<GymImpPostLikeAvgAggregate>;
  _count?: Maybe<GymImpPostLikeCountAggregate>;
  _max?: Maybe<GymImpPostLikeMaxAggregate>;
  _min?: Maybe<GymImpPostLikeMinAggregate>;
  _sum?: Maybe<GymImpPostLikeSumAggregate>;
};

export type AggregateGymLike = {
  __typename?: 'AggregateGymLike';
  _avg?: Maybe<GymLikeAvgAggregate>;
  _count?: Maybe<GymLikeCountAggregate>;
  _max?: Maybe<GymLikeMaxAggregate>;
  _min?: Maybe<GymLikeMinAggregate>;
  _sum?: Maybe<GymLikeSumAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AggregatePostLike = {
  __typename?: 'AggregatePostLike';
  _avg?: Maybe<PostLikeAvgAggregate>;
  _count?: Maybe<PostLikeCountAggregate>;
  _max?: Maybe<PostLikeMaxAggregate>;
  _min?: Maybe<PostLikeMinAggregate>;
  _sum?: Maybe<PostLikeSumAggregate>;
};

export type AggregatePreferredDayAndTime = {
  __typename?: 'AggregatePreferredDayAndTime';
  _avg?: Maybe<PreferredDayAndTimeAvgAggregate>;
  _count?: Maybe<PreferredDayAndTimeCountAggregate>;
  _max?: Maybe<PreferredDayAndTimeMaxAggregate>;
  _min?: Maybe<PreferredDayAndTimeMinAggregate>;
  _sum?: Maybe<PreferredDayAndTimeSumAggregate>;
};

export type AggregateReply = {
  __typename?: 'AggregateReply';
  _avg?: Maybe<ReplyAvgAggregate>;
  _count?: Maybe<ReplyCountAggregate>;
  _max?: Maybe<ReplyMaxAggregate>;
  _min?: Maybe<ReplyMinAggregate>;
  _sum?: Maybe<ReplySumAggregate>;
};

export type AggregateViewHistory = {
  __typename?: 'AggregateViewHistory';
  _avg?: Maybe<ViewHistoryAvgAggregate>;
  _count?: Maybe<ViewHistoryCountAggregate>;
  _max?: Maybe<ViewHistoryMaxAggregate>;
  _min?: Maybe<ViewHistoryMinAggregate>;
  _sum?: Maybe<ViewHistorySumAggregate>;
};

export enum ClimbingType {
  Both = 'BOTH',
  Boulder = 'BOULDER',
  Lead = 'LEAD'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumClimbingTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ClimbingType>;
};

export type EnumClimbingTypeFilter = {
  equals?: InputMaybe<ClimbingType>;
  in?: InputMaybe<Array<ClimbingType>>;
  not?: InputMaybe<NestedEnumClimbingTypeFilter>;
  notIn?: InputMaybe<Array<ClimbingType>>;
};

export type EnumClimbingTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumClimbingTypeFilter>;
  _min?: InputMaybe<NestedEnumClimbingTypeFilter>;
  equals?: InputMaybe<ClimbingType>;
  in?: InputMaybe<Array<ClimbingType>>;
  not?: InputMaybe<NestedEnumClimbingTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ClimbingType>>;
};

export type Gym = {
  __typename?: 'Gym';
  _count?: Maybe<GymCount>;
  climbingType: ClimbingType;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  impPosts: Array<GymImpPost>;
  likes: Array<GymLike>;
  name: Scalars['String']['output'];
  posts: Array<Post>;
  updatedAt: Scalars['DateTime']['output'];
};


export type GymImpPostsArgs = {
  cursor?: InputMaybe<GymImpPostWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type GymLikesArgs = {
  cursor?: InputMaybe<GymLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type GymPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};

export type GymAvgAggregate = {
  __typename?: 'GymAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GymAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GymCount = {
  __typename?: 'GymCount';
  impPosts: Scalars['Int']['output'];
  likes: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
};

export type GymCountAggregate = {
  __typename?: 'GymCountAggregate';
  _all: Scalars['Int']['output'];
  climbingType: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GymCountOrderByAggregateInput = {
  climbingType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GymCreateInput = {
  climbingType: ClimbingType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  impPosts?: InputMaybe<GymImpPostCreateNestedManyWithoutGymInput>;
  likes?: InputMaybe<GymLikeCreateNestedManyWithoutGymInput>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutGymInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GymCreateManyInput = {
  climbingType: ClimbingType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GymCreateNestedOneWithoutImpPostsInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutImpPostsInput>;
  create?: InputMaybe<GymCreateWithoutImpPostsInput>;
};

export type GymCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<GymCreateWithoutLikesInput>;
};

export type GymCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<GymCreateWithoutPostsInput>;
};

export type GymCreateOrConnectWithoutImpPostsInput = {
  create: GymCreateWithoutImpPostsInput;
  where: GymWhereUniqueInput;
};

export type GymCreateOrConnectWithoutLikesInput = {
  create: GymCreateWithoutLikesInput;
  where: GymWhereUniqueInput;
};

export type GymCreateOrConnectWithoutPostsInput = {
  create: GymCreateWithoutPostsInput;
  where: GymWhereUniqueInput;
};

export type GymCreateWithoutImpPostsInput = {
  climbingType: ClimbingType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<GymLikeCreateNestedManyWithoutGymInput>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutGymInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GymCreateWithoutLikesInput = {
  climbingType: ClimbingType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  impPosts?: InputMaybe<GymImpPostCreateNestedManyWithoutGymInput>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutGymInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GymCreateWithoutPostsInput = {
  climbingType: ClimbingType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  impPosts?: InputMaybe<GymImpPostCreateNestedManyWithoutGymInput>;
  likes?: InputMaybe<GymLikeCreateNestedManyWithoutGymInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GymGroupBy = {
  __typename?: 'GymGroupBy';
  _avg?: Maybe<GymAvgAggregate>;
  _count?: Maybe<GymCountAggregate>;
  _max?: Maybe<GymMaxAggregate>;
  _min?: Maybe<GymMinAggregate>;
  _sum?: Maybe<GymSumAggregate>;
  climbingType: ClimbingType;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GymImpPost = {
  __typename?: 'GymImpPost';
  _count?: Maybe<GymImpPostCount>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gym: Gym;
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likes: Array<GymImpPostLike>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
};


export type GymImpPostLikesArgs = {
  cursor?: InputMaybe<GymImpPostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};

export type GymImpPostAvgAggregate = {
  __typename?: 'GymImpPostAvgAggregate';
  gymId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type GymImpPostAvgOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GymImpPostCount = {
  __typename?: 'GymImpPostCount';
  likes: Scalars['Int']['output'];
};

export type GymImpPostCountAggregate = {
  __typename?: 'GymImpPostCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userName: Scalars['Int']['output'];
};

export type GymImpPostCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type GymImpPostCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  gym: GymCreateNestedOneWithoutImpPostsInput;
  likes?: InputMaybe<GymImpPostLikeCreateNestedManyWithoutGymImpPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type GymImpPostCreateManyGymInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type GymImpPostCreateManyGymInputEnvelope = {
  data: Array<GymImpPostCreateManyGymInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GymImpPostCreateManyInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  gymId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type GymImpPostCreateNestedManyWithoutGymInput = {
  connect?: InputMaybe<Array<GymImpPostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GymImpPostCreateOrConnectWithoutGymInput>>;
  create?: InputMaybe<Array<GymImpPostCreateWithoutGymInput>>;
  createMany?: InputMaybe<GymImpPostCreateManyGymInputEnvelope>;
};

export type GymImpPostCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<GymImpPostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymImpPostCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<GymImpPostCreateWithoutLikesInput>;
};

export type GymImpPostCreateOrConnectWithoutGymInput = {
  create: GymImpPostCreateWithoutGymInput;
  where: GymImpPostWhereUniqueInput;
};

export type GymImpPostCreateOrConnectWithoutLikesInput = {
  create: GymImpPostCreateWithoutLikesInput;
  where: GymImpPostWhereUniqueInput;
};

export type GymImpPostCreateWithoutGymInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  likes?: InputMaybe<GymImpPostLikeCreateNestedManyWithoutGymImpPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type GymImpPostCreateWithoutLikesInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  gym: GymCreateNestedOneWithoutImpPostsInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type GymImpPostGroupBy = {
  __typename?: 'GymImpPostGroupBy';
  _avg?: Maybe<GymImpPostAvgAggregate>;
  _count?: Maybe<GymImpPostCountAggregate>;
  _max?: Maybe<GymImpPostMaxAggregate>;
  _min?: Maybe<GymImpPostMinAggregate>;
  _sum?: Maybe<GymImpPostSumAggregate>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
};

export type GymImpPostLike = {
  __typename?: 'GymImpPostLike';
  GymImpPost?: Maybe<GymImpPost>;
  gymImpPostId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type GymImpPostLikeAvgAggregate = {
  __typename?: 'GymImpPostLikeAvgAggregate';
  gymImpPostId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type GymImpPostLikeAvgOrderByAggregateInput = {
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeCountAggregate = {
  __typename?: 'GymImpPostLikeCountAggregate';
  _all: Scalars['Int']['output'];
  gymImpPostId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type GymImpPostLikeCountOrderByAggregateInput = {
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeCreateInput = {
  GymImpPost?: InputMaybe<GymImpPostCreateNestedOneWithoutLikesInput>;
  userId: Scalars['String']['input'];
};

export type GymImpPostLikeCreateManyGymImpPostInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type GymImpPostLikeCreateManyGymImpPostInputEnvelope = {
  data: Array<GymImpPostLikeCreateManyGymImpPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GymImpPostLikeCreateManyInput = {
  gymImpPostId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type GymImpPostLikeCreateNestedManyWithoutGymImpPostInput = {
  connect?: InputMaybe<Array<GymImpPostLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GymImpPostLikeCreateOrConnectWithoutGymImpPostInput>>;
  create?: InputMaybe<Array<GymImpPostLikeCreateWithoutGymImpPostInput>>;
  createMany?: InputMaybe<GymImpPostLikeCreateManyGymImpPostInputEnvelope>;
};

export type GymImpPostLikeCreateOrConnectWithoutGymImpPostInput = {
  create: GymImpPostLikeCreateWithoutGymImpPostInput;
  where: GymImpPostLikeWhereUniqueInput;
};

export type GymImpPostLikeCreateWithoutGymImpPostInput = {
  userId: Scalars['String']['input'];
};

export type GymImpPostLikeGroupBy = {
  __typename?: 'GymImpPostLikeGroupBy';
  _avg?: Maybe<GymImpPostLikeAvgAggregate>;
  _count?: Maybe<GymImpPostLikeCountAggregate>;
  _max?: Maybe<GymImpPostLikeMaxAggregate>;
  _min?: Maybe<GymImpPostLikeMinAggregate>;
  _sum?: Maybe<GymImpPostLikeSumAggregate>;
  gymImpPostId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type GymImpPostLikeListRelationFilter = {
  every?: InputMaybe<GymImpPostLikeWhereInput>;
  none?: InputMaybe<GymImpPostLikeWhereInput>;
  some?: InputMaybe<GymImpPostLikeWhereInput>;
};

export type GymImpPostLikeMaxAggregate = {
  __typename?: 'GymImpPostLikeMaxAggregate';
  gymImpPostId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type GymImpPostLikeMaxOrderByAggregateInput = {
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeMinAggregate = {
  __typename?: 'GymImpPostLikeMinAggregate';
  gymImpPostId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type GymImpPostLikeMinOrderByAggregateInput = {
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<GymImpPostLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<GymImpPostLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<GymImpPostLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<GymImpPostLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<GymImpPostLikeSumOrderByAggregateInput>;
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeOrderByWithRelationInput = {
  GymImpPost?: InputMaybe<GymImpPostOrderByWithRelationInput>;
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum GymImpPostLikeScalarFieldEnum {
  GymImpPostId = 'gymImpPostId',
  Id = 'id',
  UserId = 'userId'
}

export type GymImpPostLikeScalarWhereInput = {
  AND?: InputMaybe<Array<GymImpPostLikeScalarWhereInput>>;
  NOT?: InputMaybe<Array<GymImpPostLikeScalarWhereInput>>;
  OR?: InputMaybe<Array<GymImpPostLikeScalarWhereInput>>;
  gymImpPostId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GymImpPostLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GymImpPostLikeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GymImpPostLikeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GymImpPostLikeScalarWhereWithAggregatesInput>>;
  gymImpPostId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type GymImpPostLikeSumAggregate = {
  __typename?: 'GymImpPostLikeSumAggregate';
  gymImpPostId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type GymImpPostLikeSumOrderByAggregateInput = {
  gymImpPostId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GymImpPostLikeUpdateInput = {
  GymImpPost?: InputMaybe<GymImpPostUpdateOneWithoutLikesNestedInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostLikeUpdateManyMutationInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostLikeUpdateManyWithWhereWithoutGymImpPostInput = {
  data: GymImpPostLikeUpdateManyMutationInput;
  where: GymImpPostLikeScalarWhereInput;
};

export type GymImpPostLikeUpdateManyWithoutGymImpPostNestedInput = {
  connect?: InputMaybe<Array<GymImpPostLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GymImpPostLikeCreateOrConnectWithoutGymImpPostInput>>;
  create?: InputMaybe<Array<GymImpPostLikeCreateWithoutGymImpPostInput>>;
  createMany?: InputMaybe<GymImpPostLikeCreateManyGymImpPostInputEnvelope>;
  delete?: InputMaybe<Array<GymImpPostLikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GymImpPostLikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GymImpPostLikeWhereUniqueInput>>;
  set?: InputMaybe<Array<GymImpPostLikeWhereUniqueInput>>;
  update?: InputMaybe<Array<GymImpPostLikeUpdateWithWhereUniqueWithoutGymImpPostInput>>;
  updateMany?: InputMaybe<Array<GymImpPostLikeUpdateManyWithWhereWithoutGymImpPostInput>>;
  upsert?: InputMaybe<Array<GymImpPostLikeUpsertWithWhereUniqueWithoutGymImpPostInput>>;
};

export type GymImpPostLikeUpdateWithWhereUniqueWithoutGymImpPostInput = {
  data: GymImpPostLikeUpdateWithoutGymImpPostInput;
  where: GymImpPostLikeWhereUniqueInput;
};

export type GymImpPostLikeUpdateWithoutGymImpPostInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostLikeUpsertWithWhereUniqueWithoutGymImpPostInput = {
  create: GymImpPostLikeCreateWithoutGymImpPostInput;
  update: GymImpPostLikeUpdateWithoutGymImpPostInput;
  where: GymImpPostLikeWhereUniqueInput;
};

export type GymImpPostLikeWhereInput = {
  AND?: InputMaybe<Array<GymImpPostLikeWhereInput>>;
  GymImpPost?: InputMaybe<GymImpPostRelationFilter>;
  NOT?: InputMaybe<Array<GymImpPostLikeWhereInput>>;
  OR?: InputMaybe<Array<GymImpPostLikeWhereInput>>;
  gymImpPostId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GymImpPostLikeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type GymImpPostListRelationFilter = {
  every?: InputMaybe<GymImpPostWhereInput>;
  none?: InputMaybe<GymImpPostWhereInput>;
  some?: InputMaybe<GymImpPostWhereInput>;
};

export type GymImpPostMaxAggregate = {
  __typename?: 'GymImpPostMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type GymImpPostMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type GymImpPostMinAggregate = {
  __typename?: 'GymImpPostMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type GymImpPostMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type GymImpPostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GymImpPostOrderByWithAggregationInput = {
  _avg?: InputMaybe<GymImpPostAvgOrderByAggregateInput>;
  _count?: InputMaybe<GymImpPostCountOrderByAggregateInput>;
  _max?: InputMaybe<GymImpPostMaxOrderByAggregateInput>;
  _min?: InputMaybe<GymImpPostMinOrderByAggregateInput>;
  _sum?: InputMaybe<GymImpPostSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type GymImpPostOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  gym?: InputMaybe<GymOrderByWithRelationInput>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<GymImpPostLikeOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type GymImpPostRelationFilter = {
  is?: InputMaybe<GymImpPostWhereInput>;
  isNot?: InputMaybe<GymImpPostWhereInput>;
};

export enum GymImpPostScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  GymId = 'gymId',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserName = 'userName'
}

export type GymImpPostScalarWhereInput = {
  AND?: InputMaybe<Array<GymImpPostScalarWhereInput>>;
  NOT?: InputMaybe<Array<GymImpPostScalarWhereInput>>;
  OR?: InputMaybe<Array<GymImpPostScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  gymId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type GymImpPostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GymImpPostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GymImpPostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GymImpPostScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  gymId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userName?: InputMaybe<StringWithAggregatesFilter>;
};

export type GymImpPostSumAggregate = {
  __typename?: 'GymImpPostSumAggregate';
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type GymImpPostSumOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GymImpPostUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutImpPostsNestedInput>;
  likes?: InputMaybe<GymImpPostLikeUpdateManyWithoutGymImpPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostUpdateManyWithWhereWithoutGymInput = {
  data: GymImpPostUpdateManyMutationInput;
  where: GymImpPostScalarWhereInput;
};

export type GymImpPostUpdateManyWithoutGymNestedInput = {
  connect?: InputMaybe<Array<GymImpPostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GymImpPostCreateOrConnectWithoutGymInput>>;
  create?: InputMaybe<Array<GymImpPostCreateWithoutGymInput>>;
  createMany?: InputMaybe<GymImpPostCreateManyGymInputEnvelope>;
  delete?: InputMaybe<Array<GymImpPostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GymImpPostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GymImpPostWhereUniqueInput>>;
  set?: InputMaybe<Array<GymImpPostWhereUniqueInput>>;
  update?: InputMaybe<Array<GymImpPostUpdateWithWhereUniqueWithoutGymInput>>;
  updateMany?: InputMaybe<Array<GymImpPostUpdateManyWithWhereWithoutGymInput>>;
  upsert?: InputMaybe<Array<GymImpPostUpsertWithWhereUniqueWithoutGymInput>>;
};

export type GymImpPostUpdateOneWithoutLikesNestedInput = {
  connect?: InputMaybe<GymImpPostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymImpPostCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<GymImpPostCreateWithoutLikesInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<GymImpPostUpdateWithoutLikesInput>;
  upsert?: InputMaybe<GymImpPostUpsertWithoutLikesInput>;
};

export type GymImpPostUpdateWithWhereUniqueWithoutGymInput = {
  data: GymImpPostUpdateWithoutGymInput;
  where: GymImpPostWhereUniqueInput;
};

export type GymImpPostUpdateWithoutGymInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<GymImpPostLikeUpdateManyWithoutGymImpPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostUpdateWithoutLikesInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutImpPostsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymImpPostUpsertWithWhereUniqueWithoutGymInput = {
  create: GymImpPostCreateWithoutGymInput;
  update: GymImpPostUpdateWithoutGymInput;
  where: GymImpPostWhereUniqueInput;
};

export type GymImpPostUpsertWithoutLikesInput = {
  create: GymImpPostCreateWithoutLikesInput;
  update: GymImpPostUpdateWithoutLikesInput;
};

export type GymImpPostWhereInput = {
  AND?: InputMaybe<Array<GymImpPostWhereInput>>;
  NOT?: InputMaybe<Array<GymImpPostWhereInput>>;
  OR?: InputMaybe<Array<GymImpPostWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  gym?: InputMaybe<GymRelationFilter>;
  gymId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<GymImpPostLikeListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type GymImpPostWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type GymLike = {
  __typename?: 'GymLike';
  gym: Gym;
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type GymLikeAvgAggregate = {
  __typename?: 'GymLikeAvgAggregate';
  gymId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type GymLikeAvgOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GymLikeCountAggregate = {
  __typename?: 'GymLikeCountAggregate';
  _all: Scalars['Int']['output'];
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type GymLikeCountOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymLikeCreateInput = {
  gym: GymCreateNestedOneWithoutLikesInput;
  userId: Scalars['String']['input'];
};

export type GymLikeCreateManyGymInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type GymLikeCreateManyGymInputEnvelope = {
  data: Array<GymLikeCreateManyGymInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GymLikeCreateManyInput = {
  gymId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type GymLikeCreateNestedManyWithoutGymInput = {
  connect?: InputMaybe<Array<GymLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GymLikeCreateOrConnectWithoutGymInput>>;
  create?: InputMaybe<Array<GymLikeCreateWithoutGymInput>>;
  createMany?: InputMaybe<GymLikeCreateManyGymInputEnvelope>;
};

export type GymLikeCreateOrConnectWithoutGymInput = {
  create: GymLikeCreateWithoutGymInput;
  where: GymLikeWhereUniqueInput;
};

export type GymLikeCreateWithoutGymInput = {
  userId: Scalars['String']['input'];
};

export type GymLikeGroupBy = {
  __typename?: 'GymLikeGroupBy';
  _avg?: Maybe<GymLikeAvgAggregate>;
  _count?: Maybe<GymLikeCountAggregate>;
  _max?: Maybe<GymLikeMaxAggregate>;
  _min?: Maybe<GymLikeMinAggregate>;
  _sum?: Maybe<GymLikeSumAggregate>;
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type GymLikeListRelationFilter = {
  every?: InputMaybe<GymLikeWhereInput>;
  none?: InputMaybe<GymLikeWhereInput>;
  some?: InputMaybe<GymLikeWhereInput>;
};

export type GymLikeMaxAggregate = {
  __typename?: 'GymLikeMaxAggregate';
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type GymLikeMaxOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymLikeMinAggregate = {
  __typename?: 'GymLikeMinAggregate';
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type GymLikeMinOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GymLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<GymLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<GymLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<GymLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<GymLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<GymLikeSumOrderByAggregateInput>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type GymLikeOrderByWithRelationInput = {
  gym?: InputMaybe<GymOrderByWithRelationInput>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum GymLikeScalarFieldEnum {
  GymId = 'gymId',
  Id = 'id',
  UserId = 'userId'
}

export type GymLikeScalarWhereInput = {
  AND?: InputMaybe<Array<GymLikeScalarWhereInput>>;
  NOT?: InputMaybe<Array<GymLikeScalarWhereInput>>;
  OR?: InputMaybe<Array<GymLikeScalarWhereInput>>;
  gymId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GymLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GymLikeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GymLikeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GymLikeScalarWhereWithAggregatesInput>>;
  gymId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type GymLikeSumAggregate = {
  __typename?: 'GymLikeSumAggregate';
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type GymLikeSumOrderByAggregateInput = {
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GymLikeUpdateInput = {
  gym?: InputMaybe<GymUpdateOneRequiredWithoutLikesNestedInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymLikeUpdateManyMutationInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymLikeUpdateManyWithWhereWithoutGymInput = {
  data: GymLikeUpdateManyMutationInput;
  where: GymLikeScalarWhereInput;
};

export type GymLikeUpdateManyWithoutGymNestedInput = {
  connect?: InputMaybe<Array<GymLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GymLikeCreateOrConnectWithoutGymInput>>;
  create?: InputMaybe<Array<GymLikeCreateWithoutGymInput>>;
  createMany?: InputMaybe<GymLikeCreateManyGymInputEnvelope>;
  delete?: InputMaybe<Array<GymLikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GymLikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GymLikeWhereUniqueInput>>;
  set?: InputMaybe<Array<GymLikeWhereUniqueInput>>;
  update?: InputMaybe<Array<GymLikeUpdateWithWhereUniqueWithoutGymInput>>;
  updateMany?: InputMaybe<Array<GymLikeUpdateManyWithWhereWithoutGymInput>>;
  upsert?: InputMaybe<Array<GymLikeUpsertWithWhereUniqueWithoutGymInput>>;
};

export type GymLikeUpdateWithWhereUniqueWithoutGymInput = {
  data: GymLikeUpdateWithoutGymInput;
  where: GymLikeWhereUniqueInput;
};

export type GymLikeUpdateWithoutGymInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymLikeUpsertWithWhereUniqueWithoutGymInput = {
  create: GymLikeCreateWithoutGymInput;
  update: GymLikeUpdateWithoutGymInput;
  where: GymLikeWhereUniqueInput;
};

export type GymLikeWhereInput = {
  AND?: InputMaybe<Array<GymLikeWhereInput>>;
  NOT?: InputMaybe<Array<GymLikeWhereInput>>;
  OR?: InputMaybe<Array<GymLikeWhereInput>>;
  gym?: InputMaybe<GymRelationFilter>;
  gymId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GymLikeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type GymMaxAggregate = {
  __typename?: 'GymMaxAggregate';
  climbingType?: Maybe<ClimbingType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GymMaxOrderByAggregateInput = {
  climbingType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GymMinAggregate = {
  __typename?: 'GymMinAggregate';
  climbingType?: Maybe<ClimbingType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GymMinOrderByAggregateInput = {
  climbingType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GymOrderByWithAggregationInput = {
  _avg?: InputMaybe<GymAvgOrderByAggregateInput>;
  _count?: InputMaybe<GymCountOrderByAggregateInput>;
  _max?: InputMaybe<GymMaxOrderByAggregateInput>;
  _min?: InputMaybe<GymMinOrderByAggregateInput>;
  _sum?: InputMaybe<GymSumOrderByAggregateInput>;
  climbingType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GymOrderByWithRelationInput = {
  climbingType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  impPosts?: InputMaybe<GymImpPostOrderByRelationAggregateInput>;
  likes?: InputMaybe<GymLikeOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GymRelationFilter = {
  is?: InputMaybe<GymWhereInput>;
  isNot?: InputMaybe<GymWhereInput>;
};

export enum GymScalarFieldEnum {
  ClimbingType = 'climbingType',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GymScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GymScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GymScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GymScalarWhereWithAggregatesInput>>;
  climbingType?: InputMaybe<EnumClimbingTypeWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GymSumAggregate = {
  __typename?: 'GymSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type GymSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GymUpdateInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  impPosts?: InputMaybe<GymImpPostUpdateManyWithoutGymNestedInput>;
  likes?: InputMaybe<GymLikeUpdateManyWithoutGymNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutGymNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GymUpdateManyMutationInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GymUpdateOneRequiredWithoutImpPostsNestedInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutImpPostsInput>;
  create?: InputMaybe<GymCreateWithoutImpPostsInput>;
  update?: InputMaybe<GymUpdateWithoutImpPostsInput>;
  upsert?: InputMaybe<GymUpsertWithoutImpPostsInput>;
};

export type GymUpdateOneRequiredWithoutLikesNestedInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<GymCreateWithoutLikesInput>;
  update?: InputMaybe<GymUpdateWithoutLikesInput>;
  upsert?: InputMaybe<GymUpsertWithoutLikesInput>;
};

export type GymUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<GymCreateWithoutPostsInput>;
  update?: InputMaybe<GymUpdateWithoutPostsInput>;
  upsert?: InputMaybe<GymUpsertWithoutPostsInput>;
};

export type GymUpdateWithoutImpPostsInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  likes?: InputMaybe<GymLikeUpdateManyWithoutGymNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutGymNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GymUpdateWithoutLikesInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  impPosts?: InputMaybe<GymImpPostUpdateManyWithoutGymNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutGymNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GymUpdateWithoutPostsInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  impPosts?: InputMaybe<GymImpPostUpdateManyWithoutGymNestedInput>;
  likes?: InputMaybe<GymLikeUpdateManyWithoutGymNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GymUpsertWithoutImpPostsInput = {
  create: GymCreateWithoutImpPostsInput;
  update: GymUpdateWithoutImpPostsInput;
};

export type GymUpsertWithoutLikesInput = {
  create: GymCreateWithoutLikesInput;
  update: GymUpdateWithoutLikesInput;
};

export type GymUpsertWithoutPostsInput = {
  create: GymCreateWithoutPostsInput;
  update: GymUpdateWithoutPostsInput;
};

export type GymWhereInput = {
  AND?: InputMaybe<Array<GymWhereInput>>;
  NOT?: InputMaybe<Array<GymWhereInput>>;
  OR?: InputMaybe<Array<GymWhereInput>>;
  climbingType?: InputMaybe<EnumClimbingTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  impPosts?: InputMaybe<GymImpPostListRelationFilter>;
  likes?: InputMaybe<GymLikeListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GymWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyGym: AffectedRowsOutput;
  createManyGymImpPost: AffectedRowsOutput;
  createManyGymImpPostLike: AffectedRowsOutput;
  createManyGymLike: AffectedRowsOutput;
  createManyPost: AffectedRowsOutput;
  createManyPostLike: AffectedRowsOutput;
  createManyPreferredDayAndTime: AffectedRowsOutput;
  createManyReply: AffectedRowsOutput;
  createManyViewHistory: AffectedRowsOutput;
  createOneGym: Gym;
  createOneGymImpPost: GymImpPost;
  createOneGymImpPostLike: GymImpPostLike;
  createOneGymLike: GymLike;
  createOnePost: Post;
  createOnePostLike: PostLike;
  createOnePreferredDayAndTime: PreferredDayAndTime;
  createOneReply: Reply;
  createOneViewHistory: ViewHistory;
  deleteManyGym: AffectedRowsOutput;
  deleteManyGymImpPost: AffectedRowsOutput;
  deleteManyGymImpPostLike: AffectedRowsOutput;
  deleteManyGymLike: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyPostLike: AffectedRowsOutput;
  deleteManyPreferredDayAndTime: AffectedRowsOutput;
  deleteManyReply: AffectedRowsOutput;
  deleteManyViewHistory: AffectedRowsOutput;
  deleteOneGym?: Maybe<Gym>;
  deleteOneGymImpPost?: Maybe<GymImpPost>;
  deleteOneGymImpPostLike?: Maybe<GymImpPostLike>;
  deleteOneGymLike?: Maybe<GymLike>;
  deleteOnePost?: Maybe<Post>;
  deleteOnePostLike?: Maybe<PostLike>;
  deleteOnePreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  deleteOneReply?: Maybe<Reply>;
  deleteOneViewHistory?: Maybe<ViewHistory>;
  updateManyGym: AffectedRowsOutput;
  updateManyGymImpPost: AffectedRowsOutput;
  updateManyGymImpPostLike: AffectedRowsOutput;
  updateManyGymLike: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyPostLike: AffectedRowsOutput;
  updateManyPreferredDayAndTime: AffectedRowsOutput;
  updateManyReply: AffectedRowsOutput;
  updateManyViewHistory: AffectedRowsOutput;
  updateOneGym?: Maybe<Gym>;
  updateOneGymImpPost?: Maybe<GymImpPost>;
  updateOneGymImpPostLike?: Maybe<GymImpPostLike>;
  updateOneGymLike?: Maybe<GymLike>;
  updateOnePost?: Maybe<Post>;
  updateOnePostLike?: Maybe<PostLike>;
  updateOnePreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  updateOneReply?: Maybe<Reply>;
  updateOneViewHistory?: Maybe<ViewHistory>;
  upsertOneGym: Gym;
  upsertOneGymImpPost: GymImpPost;
  upsertOneGymImpPostLike: GymImpPostLike;
  upsertOneGymLike: GymLike;
  upsertOnePost: Post;
  upsertOnePostLike: PostLike;
  upsertOnePreferredDayAndTime: PreferredDayAndTime;
  upsertOneReply: Reply;
  upsertOneViewHistory: ViewHistory;
};


export type MutationCreateManyGymArgs = {
  data: Array<GymCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyGymImpPostArgs = {
  data: Array<GymImpPostCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyGymImpPostLikeArgs = {
  data: Array<GymImpPostLikeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyGymLikeArgs = {
  data: Array<GymLikeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPostLikeArgs = {
  data: Array<PostLikeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPreferredDayAndTimeArgs = {
  data: Array<PreferredDayAndTimeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyReplyArgs = {
  data: Array<ReplyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyViewHistoryArgs = {
  data: Array<ViewHistoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneGymArgs = {
  data: GymCreateInput;
};


export type MutationCreateOneGymImpPostArgs = {
  data: GymImpPostCreateInput;
};


export type MutationCreateOneGymImpPostLikeArgs = {
  data: GymImpPostLikeCreateInput;
};


export type MutationCreateOneGymLikeArgs = {
  data: GymLikeCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOnePostLikeArgs = {
  data: PostLikeCreateInput;
};


export type MutationCreateOnePreferredDayAndTimeArgs = {
  data: PreferredDayAndTimeCreateInput;
};


export type MutationCreateOneReplyArgs = {
  data: ReplyCreateInput;
};


export type MutationCreateOneViewHistoryArgs = {
  data: ViewHistoryCreateInput;
};


export type MutationDeleteManyGymArgs = {
  where?: InputMaybe<GymWhereInput>;
};


export type MutationDeleteManyGymImpPostArgs = {
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type MutationDeleteManyGymImpPostLikeArgs = {
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type MutationDeleteManyGymLikeArgs = {
  where?: InputMaybe<GymLikeWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManyPostLikeArgs = {
  where?: InputMaybe<PostLikeWhereInput>;
};


export type MutationDeleteManyPreferredDayAndTimeArgs = {
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type MutationDeleteManyReplyArgs = {
  where?: InputMaybe<ReplyWhereInput>;
};


export type MutationDeleteManyViewHistoryArgs = {
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type MutationDeleteOneGymArgs = {
  where: GymWhereUniqueInput;
};


export type MutationDeleteOneGymImpPostArgs = {
  where: GymImpPostWhereUniqueInput;
};


export type MutationDeleteOneGymImpPostLikeArgs = {
  where: GymImpPostLikeWhereUniqueInput;
};


export type MutationDeleteOneGymLikeArgs = {
  where: GymLikeWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOnePostLikeArgs = {
  where: PostLikeWhereUniqueInput;
};


export type MutationDeleteOnePreferredDayAndTimeArgs = {
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type MutationDeleteOneReplyArgs = {
  where: ReplyWhereUniqueInput;
};


export type MutationDeleteOneViewHistoryArgs = {
  where: ViewHistoryWhereUniqueInput;
};


export type MutationUpdateManyGymArgs = {
  data: GymUpdateManyMutationInput;
  where?: InputMaybe<GymWhereInput>;
};


export type MutationUpdateManyGymImpPostArgs = {
  data: GymImpPostUpdateManyMutationInput;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type MutationUpdateManyGymImpPostLikeArgs = {
  data: GymImpPostLikeUpdateManyMutationInput;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type MutationUpdateManyGymLikeArgs = {
  data: GymLikeUpdateManyMutationInput;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManyPostLikeArgs = {
  data: PostLikeUpdateManyMutationInput;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type MutationUpdateManyPreferredDayAndTimeArgs = {
  data: PreferredDayAndTimeUpdateManyMutationInput;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type MutationUpdateManyReplyArgs = {
  data: ReplyUpdateManyMutationInput;
  where?: InputMaybe<ReplyWhereInput>;
};


export type MutationUpdateManyViewHistoryArgs = {
  data: ViewHistoryUpdateManyMutationInput;
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type MutationUpdateOneGymArgs = {
  data: GymUpdateInput;
  where: GymWhereUniqueInput;
};


export type MutationUpdateOneGymImpPostArgs = {
  data: GymImpPostUpdateInput;
  where: GymImpPostWhereUniqueInput;
};


export type MutationUpdateOneGymImpPostLikeArgs = {
  data: GymImpPostLikeUpdateInput;
  where: GymImpPostLikeWhereUniqueInput;
};


export type MutationUpdateOneGymLikeArgs = {
  data: GymLikeUpdateInput;
  where: GymLikeWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOnePostLikeArgs = {
  data: PostLikeUpdateInput;
  where: PostLikeWhereUniqueInput;
};


export type MutationUpdateOnePreferredDayAndTimeArgs = {
  data: PreferredDayAndTimeUpdateInput;
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type MutationUpdateOneReplyArgs = {
  data: ReplyUpdateInput;
  where: ReplyWhereUniqueInput;
};


export type MutationUpdateOneViewHistoryArgs = {
  data: ViewHistoryUpdateInput;
  where: ViewHistoryWhereUniqueInput;
};


export type MutationUpsertOneGymArgs = {
  create: GymCreateInput;
  update: GymUpdateInput;
  where: GymWhereUniqueInput;
};


export type MutationUpsertOneGymImpPostArgs = {
  create: GymImpPostCreateInput;
  update: GymImpPostUpdateInput;
  where: GymImpPostWhereUniqueInput;
};


export type MutationUpsertOneGymImpPostLikeArgs = {
  create: GymImpPostLikeCreateInput;
  update: GymImpPostLikeUpdateInput;
  where: GymImpPostLikeWhereUniqueInput;
};


export type MutationUpsertOneGymLikeArgs = {
  create: GymLikeCreateInput;
  update: GymLikeUpdateInput;
  where: GymLikeWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOnePostLikeArgs = {
  create: PostLikeCreateInput;
  update: PostLikeUpdateInput;
  where: PostLikeWhereUniqueInput;
};


export type MutationUpsertOnePreferredDayAndTimeArgs = {
  create: PreferredDayAndTimeCreateInput;
  update: PreferredDayAndTimeUpdateInput;
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type MutationUpsertOneReplyArgs = {
  create: ReplyCreateInput;
  update: ReplyUpdateInput;
  where: ReplyWhereUniqueInput;
};


export type MutationUpsertOneViewHistoryArgs = {
  create: ViewHistoryCreateInput;
  update: ViewHistoryUpdateInput;
  where: ViewHistoryWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumClimbingTypeFilter = {
  equals?: InputMaybe<ClimbingType>;
  in?: InputMaybe<Array<ClimbingType>>;
  not?: InputMaybe<NestedEnumClimbingTypeFilter>;
  notIn?: InputMaybe<Array<ClimbingType>>;
};

export type NestedEnumClimbingTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumClimbingTypeFilter>;
  _min?: InputMaybe<NestedEnumClimbingTypeFilter>;
  equals?: InputMaybe<ClimbingType>;
  in?: InputMaybe<Array<ClimbingType>>;
  not?: InputMaybe<NestedEnumClimbingTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ClimbingType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  belayMonths: Scalars['Int']['output'];
  climbingType: ClimbingType;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  experienceMonths: Scalars['Int']['output'];
  grade: Scalars['String']['output'];
  gym: Gym;
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  like: Array<PostLike>;
  preferredDayAndTimes: Array<PreferredDayAndTime>;
  replies: Array<Reply>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewHistory: Array<ViewHistory>;
};


export type PostLikeArgs = {
  cursor?: InputMaybe<PostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type PostPreferredDayAndTimesArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PreferredDayAndTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type PostRepliesArgs = {
  cursor?: InputMaybe<ReplyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReplyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReplyWhereInput>;
};


export type PostViewHistoryArgs = {
  cursor?: InputMaybe<ViewHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ViewHistoryWhereInput>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  belayMonths?: Maybe<Scalars['Float']['output']>;
  experienceMonths?: Maybe<Scalars['Float']['output']>;
  gymId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type PostAvgOrderByAggregateInput = {
  belayMonths?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostCount = {
  __typename?: 'PostCount';
  like: Scalars['Int']['output'];
  preferredDayAndTimes: Scalars['Int']['output'];
  replies: Scalars['Int']['output'];
  viewHistory: Scalars['Int']['output'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int']['output'];
  belayMonths: Scalars['Int']['output'];
  climbingType: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  experienceMonths: Scalars['Int']['output'];
  grade: Scalars['Int']['output'];
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PostCountOrderByAggregateInput = {
  belayMonths?: InputMaybe<SortOrder>;
  climbingType?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  gym: GymCreateNestedOneWithoutPostsInput;
  like?: InputMaybe<PostLikeCreateNestedManyWithoutPostInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  replies?: InputMaybe<ReplyCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewHistory?: InputMaybe<ViewHistoryCreateNestedManyWithoutPostInput>;
};

export type PostCreateManyGymInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyGymInputEnvelope = {
  data: Array<PostCreateManyGymInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  gymId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateNestedManyWithoutGymInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutGymInput>>;
  create?: InputMaybe<Array<PostCreateWithoutGymInput>>;
  createMany?: InputMaybe<PostCreateManyGymInputEnvelope>;
};

export type PostCreateNestedOneWithoutLikeInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutLikeInput>;
  create?: InputMaybe<PostCreateWithoutLikeInput>;
};

export type PostCreateNestedOneWithoutPreferredDayAndTimesInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPreferredDayAndTimesInput>;
  create?: InputMaybe<PostCreateWithoutPreferredDayAndTimesInput>;
};

export type PostCreateNestedOneWithoutRepliesInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<PostCreateWithoutRepliesInput>;
};

export type PostCreateNestedOneWithoutViewHistoryInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutViewHistoryInput>;
  create?: InputMaybe<PostCreateWithoutViewHistoryInput>;
};

export type PostCreateOrConnectWithoutGymInput = {
  create: PostCreateWithoutGymInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutLikeInput = {
  create: PostCreateWithoutLikeInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPreferredDayAndTimesInput = {
  create: PostCreateWithoutPreferredDayAndTimesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutRepliesInput = {
  create: PostCreateWithoutRepliesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutViewHistoryInput = {
  create: PostCreateWithoutViewHistoryInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutGymInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  like?: InputMaybe<PostLikeCreateNestedManyWithoutPostInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  replies?: InputMaybe<ReplyCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewHistory?: InputMaybe<ViewHistoryCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutLikeInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  gym: GymCreateNestedOneWithoutPostsInput;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  replies?: InputMaybe<ReplyCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewHistory?: InputMaybe<ViewHistoryCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutPreferredDayAndTimesInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  gym: GymCreateNestedOneWithoutPostsInput;
  like?: InputMaybe<PostLikeCreateNestedManyWithoutPostInput>;
  replies?: InputMaybe<ReplyCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewHistory?: InputMaybe<ViewHistoryCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutRepliesInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  gym: GymCreateNestedOneWithoutPostsInput;
  like?: InputMaybe<PostLikeCreateNestedManyWithoutPostInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewHistory?: InputMaybe<ViewHistoryCreateNestedManyWithoutPostInput>;
};

export type PostCreateWithoutViewHistoryInput = {
  belayMonths: Scalars['Int']['input'];
  climbingType: ClimbingType;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  experienceMonths: Scalars['Int']['input'];
  grade: Scalars['String']['input'];
  gym: GymCreateNestedOneWithoutPostsInput;
  like?: InputMaybe<PostLikeCreateNestedManyWithoutPostInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  replies?: InputMaybe<ReplyCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  belayMonths: Scalars['Int']['output'];
  climbingType: ClimbingType;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  experienceMonths: Scalars['Int']['output'];
  grade: Scalars['String']['output'];
  gymId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostLike = {
  __typename?: 'PostLike';
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type PostLikeAvgAggregate = {
  __typename?: 'PostLikeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
};

export type PostLikeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PostLikeCountAggregate = {
  __typename?: 'PostLikeCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type PostLikeCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostLikeCreateInput = {
  post: PostCreateNestedOneWithoutLikeInput;
  userId: Scalars['String']['input'];
};

export type PostLikeCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type PostLikeCreateManyPostInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type PostLikeCreateManyPostInputEnvelope = {
  data: Array<PostLikeCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostLikeCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostLikeCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostLikeCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostLikeCreateManyPostInputEnvelope>;
};

export type PostLikeCreateOrConnectWithoutPostInput = {
  create: PostLikeCreateWithoutPostInput;
  where: PostLikeWhereUniqueInput;
};

export type PostLikeCreateWithoutPostInput = {
  userId: Scalars['String']['input'];
};

export type PostLikeGroupBy = {
  __typename?: 'PostLikeGroupBy';
  _avg?: Maybe<PostLikeAvgAggregate>;
  _count?: Maybe<PostLikeCountAggregate>;
  _max?: Maybe<PostLikeMaxAggregate>;
  _min?: Maybe<PostLikeMinAggregate>;
  _sum?: Maybe<PostLikeSumAggregate>;
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type PostLikeListRelationFilter = {
  every?: InputMaybe<PostLikeWhereInput>;
  none?: InputMaybe<PostLikeWhereInput>;
  some?: InputMaybe<PostLikeWhereInput>;
};

export type PostLikeMaxAggregate = {
  __typename?: 'PostLikeMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PostLikeMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostLikeMinAggregate = {
  __typename?: 'PostLikeMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PostLikeMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<PostLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostLikeSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostLikeOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum PostLikeScalarFieldEnum {
  Id = 'id',
  PostId = 'postId',
  UserId = 'userId'
}

export type PostLikeScalarWhereInput = {
  AND?: InputMaybe<Array<PostLikeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostLikeScalarWhereInput>>;
  OR?: InputMaybe<Array<PostLikeScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PostLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostLikeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostLikeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostLikeScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PostLikeSumAggregate = {
  __typename?: 'PostLikeSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type PostLikeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PostLikeUpdateInput = {
  post?: InputMaybe<PostUpdateOneRequiredWithoutLikeNestedInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostLikeUpdateManyMutationInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostLikeUpdateManyWithWhereWithoutPostInput = {
  data: PostLikeUpdateManyMutationInput;
  where: PostLikeScalarWhereInput;
};

export type PostLikeUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostLikeCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostLikeCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostLikeCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostLikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  set?: InputMaybe<Array<PostLikeWhereUniqueInput>>;
  update?: InputMaybe<Array<PostLikeUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PostLikeUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PostLikeUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostLikeUpdateWithWhereUniqueWithoutPostInput = {
  data: PostLikeUpdateWithoutPostInput;
  where: PostLikeWhereUniqueInput;
};

export type PostLikeUpdateWithoutPostInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostLikeUpsertWithWhereUniqueWithoutPostInput = {
  create: PostLikeCreateWithoutPostInput;
  update: PostLikeUpdateWithoutPostInput;
  where: PostLikeWhereUniqueInput;
};

export type PostLikeWhereInput = {
  AND?: InputMaybe<Array<PostLikeWhereInput>>;
  NOT?: InputMaybe<Array<PostLikeWhereInput>>;
  OR?: InputMaybe<Array<PostLikeWhereInput>>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PostLikeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  belayMonths?: Maybe<Scalars['Int']['output']>;
  climbingType?: Maybe<ClimbingType>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  experienceMonths?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostMaxOrderByAggregateInput = {
  belayMonths?: InputMaybe<SortOrder>;
  climbingType?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  belayMonths?: Maybe<Scalars['Int']['output']>;
  climbingType?: Maybe<ClimbingType>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  experienceMonths?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostMinOrderByAggregateInput = {
  belayMonths?: InputMaybe<SortOrder>;
  climbingType?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  belayMonths?: InputMaybe<SortOrder>;
  climbingType?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  belayMonths?: InputMaybe<SortOrder>;
  climbingType?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  gym?: InputMaybe<GymOrderByWithRelationInput>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  like?: InputMaybe<PostLikeOrderByRelationAggregateInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeOrderByRelationAggregateInput>;
  replies?: InputMaybe<ReplyOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewHistory?: InputMaybe<ViewHistoryOrderByRelationAggregateInput>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  BelayMonths = 'belayMonths',
  ClimbingType = 'climbingType',
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  ExperienceMonths = 'experienceMonths',
  Grade = 'grade',
  GymId = 'gymId',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  belayMonths?: InputMaybe<IntFilter>;
  climbingType?: InputMaybe<EnumClimbingTypeFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  experienceMonths?: InputMaybe<IntFilter>;
  grade?: InputMaybe<StringFilter>;
  gymId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  belayMonths?: InputMaybe<IntWithAggregatesFilter>;
  climbingType?: InputMaybe<EnumClimbingTypeWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  experienceMonths?: InputMaybe<IntWithAggregatesFilter>;
  grade?: InputMaybe<StringWithAggregatesFilter>;
  gymId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  belayMonths?: Maybe<Scalars['Int']['output']>;
  experienceMonths?: Maybe<Scalars['Int']['output']>;
  gymId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type PostSumOrderByAggregateInput = {
  belayMonths?: InputMaybe<SortOrder>;
  experienceMonths?: InputMaybe<SortOrder>;
  gymId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutPostsNestedInput>;
  like?: InputMaybe<PostLikeUpdateManyWithoutPostNestedInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  replies?: InputMaybe<ReplyUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewHistory?: InputMaybe<ViewHistoryUpdateManyWithoutPostNestedInput>;
};

export type PostUpdateManyMutationInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutGymInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutGymNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutGymInput>>;
  create?: InputMaybe<Array<PostCreateWithoutGymInput>>;
  createMany?: InputMaybe<PostCreateManyGymInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutGymInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutGymInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutGymInput>>;
};

export type PostUpdateOneRequiredWithoutLikeNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutLikeInput>;
  create?: InputMaybe<PostCreateWithoutLikeInput>;
  update?: InputMaybe<PostUpdateWithoutLikeInput>;
  upsert?: InputMaybe<PostUpsertWithoutLikeInput>;
};

export type PostUpdateOneRequiredWithoutPreferredDayAndTimesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPreferredDayAndTimesInput>;
  create?: InputMaybe<PostCreateWithoutPreferredDayAndTimesInput>;
  update?: InputMaybe<PostUpdateWithoutPreferredDayAndTimesInput>;
  upsert?: InputMaybe<PostUpsertWithoutPreferredDayAndTimesInput>;
};

export type PostUpdateOneRequiredWithoutRepliesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<PostCreateWithoutRepliesInput>;
  update?: InputMaybe<PostUpdateWithoutRepliesInput>;
  upsert?: InputMaybe<PostUpsertWithoutRepliesInput>;
};

export type PostUpdateOneRequiredWithoutViewHistoryNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutViewHistoryInput>;
  create?: InputMaybe<PostCreateWithoutViewHistoryInput>;
  update?: InputMaybe<PostUpdateWithoutViewHistoryInput>;
  upsert?: InputMaybe<PostUpsertWithoutViewHistoryInput>;
};

export type PostUpdateWithWhereUniqueWithoutGymInput = {
  data: PostUpdateWithoutGymInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutGymInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  like?: InputMaybe<PostLikeUpdateManyWithoutPostNestedInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  replies?: InputMaybe<ReplyUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewHistory?: InputMaybe<ViewHistoryUpdateManyWithoutPostNestedInput>;
};

export type PostUpdateWithoutLikeInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutPostsNestedInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  replies?: InputMaybe<ReplyUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewHistory?: InputMaybe<ViewHistoryUpdateManyWithoutPostNestedInput>;
};

export type PostUpdateWithoutPreferredDayAndTimesInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutPostsNestedInput>;
  like?: InputMaybe<PostLikeUpdateManyWithoutPostNestedInput>;
  replies?: InputMaybe<ReplyUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewHistory?: InputMaybe<ViewHistoryUpdateManyWithoutPostNestedInput>;
};

export type PostUpdateWithoutRepliesInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutPostsNestedInput>;
  like?: InputMaybe<PostLikeUpdateManyWithoutPostNestedInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewHistory?: InputMaybe<ViewHistoryUpdateManyWithoutPostNestedInput>;
};

export type PostUpdateWithoutViewHistoryInput = {
  belayMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experienceMonths?: InputMaybe<IntFieldUpdateOperationsInput>;
  grade?: InputMaybe<StringFieldUpdateOperationsInput>;
  gym?: InputMaybe<GymUpdateOneRequiredWithoutPostsNestedInput>;
  like?: InputMaybe<PostLikeUpdateManyWithoutPostNestedInput>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  replies?: InputMaybe<ReplyUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutGymInput = {
  create: PostCreateWithoutGymInput;
  update: PostUpdateWithoutGymInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutLikeInput = {
  create: PostCreateWithoutLikeInput;
  update: PostUpdateWithoutLikeInput;
};

export type PostUpsertWithoutPreferredDayAndTimesInput = {
  create: PostCreateWithoutPreferredDayAndTimesInput;
  update: PostUpdateWithoutPreferredDayAndTimesInput;
};

export type PostUpsertWithoutRepliesInput = {
  create: PostCreateWithoutRepliesInput;
  update: PostUpdateWithoutRepliesInput;
};

export type PostUpsertWithoutViewHistoryInput = {
  create: PostCreateWithoutViewHistoryInput;
  update: PostUpdateWithoutViewHistoryInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  belayMonths?: InputMaybe<IntFilter>;
  climbingType?: InputMaybe<EnumClimbingTypeFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  experienceMonths?: InputMaybe<IntFilter>;
  grade?: InputMaybe<StringFilter>;
  gym?: InputMaybe<GymRelationFilter>;
  gymId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  like?: InputMaybe<PostLikeListRelationFilter>;
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeListRelationFilter>;
  replies?: InputMaybe<ReplyListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  viewHistory?: InputMaybe<ViewHistoryListRelationFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type PreferredDayAndTime = {
  __typename?: 'PreferredDayAndTime';
  createdAt: Scalars['DateTime']['output'];
  dayAndTime: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PreferredDayAndTimeAvgAggregate = {
  __typename?: 'PreferredDayAndTimeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
};

export type PreferredDayAndTimeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeCountAggregate = {
  __typename?: 'PreferredDayAndTimeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dayAndTime: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PreferredDayAndTimeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayAndTime?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dayAndTime: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  post: PostCreateNestedOneWithoutPreferredDayAndTimesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PreferredDayAndTimeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dayAndTime: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PreferredDayAndTimeCreateManyPostInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dayAndTime: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PreferredDayAndTimeCreateManyPostInputEnvelope = {
  data: Array<PreferredDayAndTimeCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PreferredDayAndTimeCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PreferredDayAndTimeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PreferredDayAndTimeCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PreferredDayAndTimeCreateWithoutPostInput>>;
  createMany?: InputMaybe<PreferredDayAndTimeCreateManyPostInputEnvelope>;
};

export type PreferredDayAndTimeCreateOrConnectWithoutPostInput = {
  create: PreferredDayAndTimeCreateWithoutPostInput;
  where: PreferredDayAndTimeWhereUniqueInput;
};

export type PreferredDayAndTimeCreateWithoutPostInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dayAndTime: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PreferredDayAndTimeGroupBy = {
  __typename?: 'PreferredDayAndTimeGroupBy';
  _avg?: Maybe<PreferredDayAndTimeAvgAggregate>;
  _count?: Maybe<PreferredDayAndTimeCountAggregate>;
  _max?: Maybe<PreferredDayAndTimeMaxAggregate>;
  _min?: Maybe<PreferredDayAndTimeMinAggregate>;
  _sum?: Maybe<PreferredDayAndTimeSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  dayAndTime: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PreferredDayAndTimeListRelationFilter = {
  every?: InputMaybe<PreferredDayAndTimeWhereInput>;
  none?: InputMaybe<PreferredDayAndTimeWhereInput>;
  some?: InputMaybe<PreferredDayAndTimeWhereInput>;
};

export type PreferredDayAndTimeMaxAggregate = {
  __typename?: 'PreferredDayAndTimeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dayAndTime?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PreferredDayAndTimeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayAndTime?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeMinAggregate = {
  __typename?: 'PreferredDayAndTimeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dayAndTime?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PreferredDayAndTimeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayAndTime?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeOrderByWithAggregationInput = {
  _avg?: InputMaybe<PreferredDayAndTimeAvgOrderByAggregateInput>;
  _count?: InputMaybe<PreferredDayAndTimeCountOrderByAggregateInput>;
  _max?: InputMaybe<PreferredDayAndTimeMaxOrderByAggregateInput>;
  _min?: InputMaybe<PreferredDayAndTimeMinOrderByAggregateInput>;
  _sum?: InputMaybe<PreferredDayAndTimeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dayAndTime?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dayAndTime?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PreferredDayAndTimeScalarFieldEnum {
  CreatedAt = 'createdAt',
  DayAndTime = 'dayAndTime',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt'
}

export type PreferredDayAndTimeScalarWhereInput = {
  AND?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  OR?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dayAndTime?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PreferredDayAndTimeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PreferredDayAndTimeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PreferredDayAndTimeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PreferredDayAndTimeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dayAndTime?: InputMaybe<StringWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PreferredDayAndTimeSumAggregate = {
  __typename?: 'PreferredDayAndTimeSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type PreferredDayAndTimeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayAndTime?: InputMaybe<StringFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPreferredDayAndTimesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PreferredDayAndTimeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayAndTime?: InputMaybe<StringFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PreferredDayAndTimeUpdateManyWithWhereWithoutPostInput = {
  data: PreferredDayAndTimeUpdateManyMutationInput;
  where: PreferredDayAndTimeScalarWhereInput;
};

export type PreferredDayAndTimeUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PreferredDayAndTimeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PreferredDayAndTimeCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PreferredDayAndTimeCreateWithoutPostInput>>;
  createMany?: InputMaybe<PreferredDayAndTimeCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PreferredDayAndTimeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PreferredDayAndTimeWhereUniqueInput>>;
  set?: InputMaybe<Array<PreferredDayAndTimeWhereUniqueInput>>;
  update?: InputMaybe<Array<PreferredDayAndTimeUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PreferredDayAndTimeUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PreferredDayAndTimeUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PreferredDayAndTimeUpdateWithWhereUniqueWithoutPostInput = {
  data: PreferredDayAndTimeUpdateWithoutPostInput;
  where: PreferredDayAndTimeWhereUniqueInput;
};

export type PreferredDayAndTimeUpdateWithoutPostInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dayAndTime?: InputMaybe<StringFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PreferredDayAndTimeUpsertWithWhereUniqueWithoutPostInput = {
  create: PreferredDayAndTimeCreateWithoutPostInput;
  update: PreferredDayAndTimeUpdateWithoutPostInput;
  where: PreferredDayAndTimeWhereUniqueInput;
};

export type PreferredDayAndTimeWhereInput = {
  AND?: InputMaybe<Array<PreferredDayAndTimeWhereInput>>;
  NOT?: InputMaybe<Array<PreferredDayAndTimeWhereInput>>;
  OR?: InputMaybe<Array<PreferredDayAndTimeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dayAndTime?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PreferredDayAndTimeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateGym: AggregateGym;
  aggregateGymImpPost: AggregateGymImpPost;
  aggregateGymImpPostLike: AggregateGymImpPostLike;
  aggregateGymLike: AggregateGymLike;
  aggregatePost: AggregatePost;
  aggregatePostLike: AggregatePostLike;
  aggregatePreferredDayAndTime: AggregatePreferredDayAndTime;
  aggregateReply: AggregateReply;
  aggregateViewHistory: AggregateViewHistory;
  findFirstGym?: Maybe<Gym>;
  findFirstGymImpPost?: Maybe<GymImpPost>;
  findFirstGymImpPostLike?: Maybe<GymImpPostLike>;
  findFirstGymImpPostLikeOrThrow?: Maybe<GymImpPostLike>;
  findFirstGymImpPostOrThrow?: Maybe<GymImpPost>;
  findFirstGymLike?: Maybe<GymLike>;
  findFirstGymLikeOrThrow?: Maybe<GymLike>;
  findFirstGymOrThrow?: Maybe<Gym>;
  findFirstPost?: Maybe<Post>;
  findFirstPostLike?: Maybe<PostLike>;
  findFirstPostLikeOrThrow?: Maybe<PostLike>;
  findFirstPostOrThrow?: Maybe<Post>;
  findFirstPreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  findFirstPreferredDayAndTimeOrThrow?: Maybe<PreferredDayAndTime>;
  findFirstReply?: Maybe<Reply>;
  findFirstReplyOrThrow?: Maybe<Reply>;
  findFirstViewHistory?: Maybe<ViewHistory>;
  findFirstViewHistoryOrThrow?: Maybe<ViewHistory>;
  getGym?: Maybe<Gym>;
  getGymImpPost?: Maybe<GymImpPost>;
  getGymImpPostLike?: Maybe<GymImpPostLike>;
  getGymLike?: Maybe<GymLike>;
  getPost?: Maybe<Post>;
  getPostLike?: Maybe<PostLike>;
  getPreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  getReply?: Maybe<Reply>;
  getViewHistory?: Maybe<ViewHistory>;
  groupByGym: Array<GymGroupBy>;
  groupByGymImpPost: Array<GymImpPostGroupBy>;
  groupByGymImpPostLike: Array<GymImpPostLikeGroupBy>;
  groupByGymLike: Array<GymLikeGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByPostLike: Array<PostLikeGroupBy>;
  groupByPreferredDayAndTime: Array<PreferredDayAndTimeGroupBy>;
  groupByReply: Array<ReplyGroupBy>;
  groupByViewHistory: Array<ViewHistoryGroupBy>;
  gym?: Maybe<Gym>;
  gymImpPost?: Maybe<GymImpPost>;
  gymImpPostLike?: Maybe<GymImpPostLike>;
  gymImpPostLikes: Array<GymImpPostLike>;
  gymImpPosts: Array<GymImpPost>;
  gymLike?: Maybe<GymLike>;
  gymLikes: Array<GymLike>;
  gyms: Array<Gym>;
  post?: Maybe<Post>;
  postLike?: Maybe<PostLike>;
  postLikes: Array<PostLike>;
  posts: Array<Post>;
  preferredDayAndTime?: Maybe<PreferredDayAndTime>;
  preferredDayAndTimes: Array<PreferredDayAndTime>;
  replies: Array<Reply>;
  reply?: Maybe<Reply>;
  viewHistories: Array<ViewHistory>;
  viewHistory?: Maybe<ViewHistory>;
};


export type QueryAggregateGymArgs = {
  cursor?: InputMaybe<GymWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryAggregateGymImpPostArgs = {
  cursor?: InputMaybe<GymImpPostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GymImpPostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type QueryAggregateGymImpPostLikeArgs = {
  cursor?: InputMaybe<GymImpPostLikeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GymImpPostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type QueryAggregateGymLikeArgs = {
  cursor?: InputMaybe<GymLikeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GymLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAggregatePostLikeArgs = {
  cursor?: InputMaybe<PostLikeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type QueryAggregatePreferredDayAndTimeArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryAggregateReplyArgs = {
  cursor?: InputMaybe<ReplyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReplyWhereInput>;
};


export type QueryAggregateViewHistoryArgs = {
  cursor?: InputMaybe<ViewHistoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ViewHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type QueryFindFirstGymArgs = {
  cursor?: InputMaybe<GymWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryFindFirstGymImpPostArgs = {
  cursor?: InputMaybe<GymImpPostWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type QueryFindFirstGymImpPostLikeArgs = {
  cursor?: InputMaybe<GymImpPostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type QueryFindFirstGymImpPostLikeOrThrowArgs = {
  cursor?: InputMaybe<GymImpPostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type QueryFindFirstGymImpPostOrThrowArgs = {
  cursor?: InputMaybe<GymImpPostWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type QueryFindFirstGymLikeArgs = {
  cursor?: InputMaybe<GymLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type QueryFindFirstGymLikeOrThrowArgs = {
  cursor?: InputMaybe<GymLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type QueryFindFirstGymOrThrowArgs = {
  cursor?: InputMaybe<GymWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPostLikeArgs = {
  cursor?: InputMaybe<PostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type QueryFindFirstPostLikeOrThrowArgs = {
  cursor?: InputMaybe<PostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type QueryFindFirstPostOrThrowArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPreferredDayAndTimeArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PreferredDayAndTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryFindFirstPreferredDayAndTimeOrThrowArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PreferredDayAndTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryFindFirstReplyArgs = {
  cursor?: InputMaybe<ReplyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReplyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReplyWhereInput>;
};


export type QueryFindFirstReplyOrThrowArgs = {
  cursor?: InputMaybe<ReplyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReplyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReplyWhereInput>;
};


export type QueryFindFirstViewHistoryArgs = {
  cursor?: InputMaybe<ViewHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type QueryFindFirstViewHistoryOrThrowArgs = {
  cursor?: InputMaybe<ViewHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type QueryGetGymArgs = {
  where: GymWhereUniqueInput;
};


export type QueryGetGymImpPostArgs = {
  where: GymImpPostWhereUniqueInput;
};


export type QueryGetGymImpPostLikeArgs = {
  where: GymImpPostLikeWhereUniqueInput;
};


export type QueryGetGymLikeArgs = {
  where: GymLikeWhereUniqueInput;
};


export type QueryGetPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryGetPostLikeArgs = {
  where: PostLikeWhereUniqueInput;
};


export type QueryGetPreferredDayAndTimeArgs = {
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type QueryGetReplyArgs = {
  where: ReplyWhereUniqueInput;
};


export type QueryGetViewHistoryArgs = {
  where: ViewHistoryWhereUniqueInput;
};


export type QueryGroupByGymArgs = {
  by: Array<GymScalarFieldEnum>;
  having?: InputMaybe<GymScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GymOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryGroupByGymImpPostArgs = {
  by: Array<GymImpPostScalarFieldEnum>;
  having?: InputMaybe<GymImpPostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GymImpPostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type QueryGroupByGymImpPostLikeArgs = {
  by: Array<GymImpPostLikeScalarFieldEnum>;
  having?: InputMaybe<GymImpPostLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GymImpPostLikeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type QueryGroupByGymLikeArgs = {
  by: Array<GymLikeScalarFieldEnum>;
  having?: InputMaybe<GymLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GymLikeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryGroupByPostLikeArgs = {
  by: Array<PostLikeScalarFieldEnum>;
  having?: InputMaybe<PostLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostLikeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type QueryGroupByPreferredDayAndTimeArgs = {
  by: Array<PreferredDayAndTimeScalarFieldEnum>;
  having?: InputMaybe<PreferredDayAndTimeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryGroupByReplyArgs = {
  by: Array<ReplyScalarFieldEnum>;
  having?: InputMaybe<ReplyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReplyWhereInput>;
};


export type QueryGroupByViewHistoryArgs = {
  by: Array<ViewHistoryScalarFieldEnum>;
  having?: InputMaybe<ViewHistoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ViewHistoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type QueryGymArgs = {
  where: GymWhereUniqueInput;
};


export type QueryGymImpPostArgs = {
  where: GymImpPostWhereUniqueInput;
};


export type QueryGymImpPostLikeArgs = {
  where: GymImpPostLikeWhereUniqueInput;
};


export type QueryGymImpPostLikesArgs = {
  cursor?: InputMaybe<GymImpPostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostLikeWhereInput>;
};


export type QueryGymImpPostsArgs = {
  cursor?: InputMaybe<GymImpPostWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymImpPostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymImpPostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymImpPostWhereInput>;
};


export type QueryGymLikeArgs = {
  where: GymLikeWhereUniqueInput;
};


export type QueryGymLikesArgs = {
  cursor?: InputMaybe<GymLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymLikeWhereInput>;
};


export type QueryGymsArgs = {
  cursor?: InputMaybe<GymWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostLikeArgs = {
  where: PostLikeWhereUniqueInput;
};


export type QueryPostLikesArgs = {
  cursor?: InputMaybe<PostLikeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostLikeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostLikeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostLikeWhereInput>;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPreferredDayAndTimeArgs = {
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type QueryPreferredDayAndTimesArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PreferredDayAndTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryRepliesArgs = {
  cursor?: InputMaybe<ReplyWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReplyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReplyWhereInput>;
};


export type QueryReplyArgs = {
  where: ReplyWhereUniqueInput;
};


export type QueryViewHistoriesArgs = {
  cursor?: InputMaybe<ViewHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ViewHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ViewHistoryWhereInput>;
};


export type QueryViewHistoryArgs = {
  where: ViewHistoryWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Reply = {
  __typename?: 'Reply';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
};

export type ReplyAvgAggregate = {
  __typename?: 'ReplyAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
};

export type ReplyAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type ReplyCountAggregate = {
  __typename?: 'ReplyCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userName: Scalars['Int']['output'];
};

export type ReplyCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type ReplyCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  post: PostCreateNestedOneWithoutRepliesInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type ReplyCreateManyInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type ReplyCreateManyPostInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type ReplyCreateManyPostInputEnvelope = {
  data: Array<ReplyCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReplyCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplyCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ReplyCreateWithoutPostInput>>;
  createMany?: InputMaybe<ReplyCreateManyPostInputEnvelope>;
};

export type ReplyCreateOrConnectWithoutPostInput = {
  create: ReplyCreateWithoutPostInput;
  where: ReplyWhereUniqueInput;
};

export type ReplyCreateWithoutPostInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userName: Scalars['String']['input'];
};

export type ReplyGroupBy = {
  __typename?: 'ReplyGroupBy';
  _avg?: Maybe<ReplyAvgAggregate>;
  _count?: Maybe<ReplyCountAggregate>;
  _max?: Maybe<ReplyMaxAggregate>;
  _min?: Maybe<ReplyMinAggregate>;
  _sum?: Maybe<ReplySumAggregate>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
};

export type ReplyListRelationFilter = {
  every?: InputMaybe<ReplyWhereInput>;
  none?: InputMaybe<ReplyWhereInput>;
  some?: InputMaybe<ReplyWhereInput>;
};

export type ReplyMaxAggregate = {
  __typename?: 'ReplyMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type ReplyMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type ReplyMinAggregate = {
  __typename?: 'ReplyMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type ReplyMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type ReplyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReplyOrderByWithAggregationInput = {
  _avg?: InputMaybe<ReplyAvgOrderByAggregateInput>;
  _count?: InputMaybe<ReplyCountOrderByAggregateInput>;
  _max?: InputMaybe<ReplyMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReplyMinOrderByAggregateInput>;
  _sum?: InputMaybe<ReplySumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type ReplyOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export enum ReplyScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PostId = 'postId',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserName = 'userName'
}

export type ReplyScalarWhereInput = {
  AND?: InputMaybe<Array<ReplyScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReplyScalarWhereInput>>;
  OR?: InputMaybe<Array<ReplyScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type ReplyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReplyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReplyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReplyScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userName?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReplySumAggregate = {
  __typename?: 'ReplySumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type ReplySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type ReplyUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutRepliesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReplyUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReplyUpdateManyWithWhereWithoutPostInput = {
  data: ReplyUpdateManyMutationInput;
  where: ReplyScalarWhereInput;
};

export type ReplyUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplyCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ReplyCreateWithoutPostInput>>;
  createMany?: InputMaybe<ReplyCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<ReplyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplyWhereUniqueInput>>;
  update?: InputMaybe<Array<ReplyUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<ReplyUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<ReplyUpsertWithWhereUniqueWithoutPostInput>>;
};

export type ReplyUpdateWithWhereUniqueWithoutPostInput = {
  data: ReplyUpdateWithoutPostInput;
  where: ReplyWhereUniqueInput;
};

export type ReplyUpdateWithoutPostInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReplyUpsertWithWhereUniqueWithoutPostInput = {
  create: ReplyCreateWithoutPostInput;
  update: ReplyUpdateWithoutPostInput;
  where: ReplyWhereUniqueInput;
};

export type ReplyWhereInput = {
  AND?: InputMaybe<Array<ReplyWhereInput>>;
  NOT?: InputMaybe<Array<ReplyWhereInput>>;
  OR?: InputMaybe<Array<ReplyWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type ReplyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ViewHistory = {
  __typename?: 'ViewHistory';
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type ViewHistoryAvgAggregate = {
  __typename?: 'ViewHistoryAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
};

export type ViewHistoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type ViewHistoryCountAggregate = {
  __typename?: 'ViewHistoryCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ViewHistoryCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ViewHistoryCreateInput = {
  post: PostCreateNestedOneWithoutViewHistoryInput;
  userId: Scalars['String']['input'];
};

export type ViewHistoryCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type ViewHistoryCreateManyPostInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type ViewHistoryCreateManyPostInputEnvelope = {
  data: Array<ViewHistoryCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ViewHistoryCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<ViewHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ViewHistoryCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ViewHistoryCreateWithoutPostInput>>;
  createMany?: InputMaybe<ViewHistoryCreateManyPostInputEnvelope>;
};

export type ViewHistoryCreateOrConnectWithoutPostInput = {
  create: ViewHistoryCreateWithoutPostInput;
  where: ViewHistoryWhereUniqueInput;
};

export type ViewHistoryCreateWithoutPostInput = {
  userId: Scalars['String']['input'];
};

export type ViewHistoryGroupBy = {
  __typename?: 'ViewHistoryGroupBy';
  _avg?: Maybe<ViewHistoryAvgAggregate>;
  _count?: Maybe<ViewHistoryCountAggregate>;
  _max?: Maybe<ViewHistoryMaxAggregate>;
  _min?: Maybe<ViewHistoryMinAggregate>;
  _sum?: Maybe<ViewHistorySumAggregate>;
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type ViewHistoryListRelationFilter = {
  every?: InputMaybe<ViewHistoryWhereInput>;
  none?: InputMaybe<ViewHistoryWhereInput>;
  some?: InputMaybe<ViewHistoryWhereInput>;
};

export type ViewHistoryMaxAggregate = {
  __typename?: 'ViewHistoryMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ViewHistoryMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ViewHistoryMinAggregate = {
  __typename?: 'ViewHistoryMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ViewHistoryMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ViewHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ViewHistoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<ViewHistoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<ViewHistoryCountOrderByAggregateInput>;
  _max?: InputMaybe<ViewHistoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<ViewHistoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<ViewHistorySumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ViewHistoryOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum ViewHistoryScalarFieldEnum {
  Id = 'id',
  PostId = 'postId',
  UserId = 'userId'
}

export type ViewHistoryScalarWhereInput = {
  AND?: InputMaybe<Array<ViewHistoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<ViewHistoryScalarWhereInput>>;
  OR?: InputMaybe<Array<ViewHistoryScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ViewHistoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ViewHistoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ViewHistoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ViewHistoryScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ViewHistorySumAggregate = {
  __typename?: 'ViewHistorySumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type ViewHistorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type ViewHistoryUpdateInput = {
  post?: InputMaybe<PostUpdateOneRequiredWithoutViewHistoryNestedInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ViewHistoryUpdateManyMutationInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ViewHistoryUpdateManyWithWhereWithoutPostInput = {
  data: ViewHistoryUpdateManyMutationInput;
  where: ViewHistoryScalarWhereInput;
};

export type ViewHistoryUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<ViewHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ViewHistoryCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ViewHistoryCreateWithoutPostInput>>;
  createMany?: InputMaybe<ViewHistoryCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<ViewHistoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ViewHistoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ViewHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<ViewHistoryWhereUniqueInput>>;
  update?: InputMaybe<Array<ViewHistoryUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<ViewHistoryUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<ViewHistoryUpsertWithWhereUniqueWithoutPostInput>>;
};

export type ViewHistoryUpdateWithWhereUniqueWithoutPostInput = {
  data: ViewHistoryUpdateWithoutPostInput;
  where: ViewHistoryWhereUniqueInput;
};

export type ViewHistoryUpdateWithoutPostInput = {
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ViewHistoryUpsertWithWhereUniqueWithoutPostInput = {
  create: ViewHistoryCreateWithoutPostInput;
  update: ViewHistoryUpdateWithoutPostInput;
  where: ViewHistoryWhereUniqueInput;
};

export type ViewHistoryWhereInput = {
  AND?: InputMaybe<Array<ViewHistoryWhereInput>>;
  NOT?: InputMaybe<Array<ViewHistoryWhereInput>>;
  OR?: InputMaybe<Array<ViewHistoryWhereInput>>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ViewHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateOnePostLikeMutationVariables = Exact<{
  data: PostLikeCreateInput;
}>;


export type CreateOnePostLikeMutation = { __typename?: 'Mutation', createOnePostLike: { __typename?: 'PostLike', id: number, userId: string, postId: number } };

export type DeleteManyPostLikeMutationVariables = Exact<{
  where?: InputMaybe<PostLikeWhereInput>;
}>;


export type DeleteManyPostLikeMutation = { __typename?: 'Mutation', deleteManyPostLike: { __typename?: 'AffectedRowsOutput', count: number } };

export type CreateOnePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreateOnePostMutation = { __typename?: 'Mutation', createOnePost: { __typename?: 'Post', title: string, content: string, gymId: number, climbingType: ClimbingType, belayMonths: number, experienceMonths: number, grade: string, preferredDayAndTimes: Array<{ __typename?: 'PreferredDayAndTime', dayAndTime: string }> } };

export type GymOptionsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput> | GymOrderByWithRelationInput>;
}>;


export type GymOptionsQuery = { __typename?: 'Query', gyms: Array<{ __typename?: 'Gym', id: number, name: string }> };

export type FindFirstPostQueryVariables = Exact<{
  where?: InputMaybe<PostWhereInput>;
}>;


export type FindFirstPostQuery = { __typename?: 'Query', findFirstPost?: { __typename?: 'Post', id: number, title: string, content: string, grade: string, experienceMonths: number, belayMonths: number, createdAt: any, climbingType: ClimbingType, gym: { __typename?: 'Gym', name: string, image?: string | null }, preferredDayAndTimes: Array<{ __typename?: 'PreferredDayAndTime', id: number, dayAndTime: string }>, like: Array<{ __typename?: 'PostLike', id: number, postId: number, userId: string }>, _count?: { __typename?: 'PostCount', replies: number, viewHistory: number } | null } | null };

export type RepliesQueryVariables = Exact<{
  where?: InputMaybe<ReplyWhereInput>;
  orderBy?: InputMaybe<Array<ReplyOrderByWithRelationInput> | ReplyOrderByWithRelationInput>;
}>;


export type RepliesQuery = { __typename?: 'Query', replies: Array<{ __typename?: 'Reply', id: number, userName: string, title: string, content: string, createdAt: any }> };

export type CreateOneReplyMutationVariables = Exact<{
  data: ReplyCreateInput;
}>;


export type CreateOneReplyMutation = { __typename?: 'Mutation', createOneReply: { __typename?: 'Reply', content: string, postId: number, title: string, userName: string } };

export type PostsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string, content: string, grade: string, experienceMonths: number, belayMonths: number, createdAt: any, climbingType: ClimbingType, gym: { __typename?: 'Gym', name: string, image?: string | null }, preferredDayAndTimes: Array<{ __typename?: 'PreferredDayAndTime', id: number, dayAndTime: string }>, like: Array<{ __typename?: 'PostLike', id: number, postId: number, userId: string }>, _count?: { __typename?: 'PostCount', replies: number, viewHistory: number } | null }> };

export type _CountQueryVariables = Exact<{ [key: string]: never; }>;


export type _CountQuery = { __typename?: 'Query', aggregatePost: { __typename?: 'AggregatePost', _count?: { __typename?: 'PostCountAggregate', _all: number } | null } };

export type CreateOneGymMutationVariables = Exact<{
  data: GymCreateInput;
}>;


export type CreateOneGymMutation = { __typename?: 'Mutation', createOneGym: { __typename?: 'Gym', id: number, name: string, image?: string | null, createdAt: any, climbingType: ClimbingType } };

export type FindFirstGymQueryVariables = Exact<{
  where?: InputMaybe<GymWhereInput>;
}>;


export type FindFirstGymQuery = { __typename?: 'Query', findFirstGym?: { __typename?: 'Gym', id: number, image?: string | null, name: string, updatedAt: any, createdAt: any, climbingType: ClimbingType, _count?: { __typename?: 'GymCount', impPosts: number } | null } | null };

export type GymImpPostsQueryVariables = Exact<{
  where?: InputMaybe<GymImpPostWhereInput>;
}>;


export type GymImpPostsQuery = { __typename?: 'Query', gymImpPosts: Array<{ __typename?: 'GymImpPost', id: number, createdAt: any, updatedAt: any, deletedAt?: any | null, userName: string, title: string, content: string, gymId: number, likes: Array<{ __typename?: 'GymImpPostLike', id: number, userId: string, gymImpPostId?: number | null }> }> };

export type CreateOneGymImpPostMutationVariables = Exact<{
  data: GymImpPostCreateInput;
}>;


export type CreateOneGymImpPostMutation = { __typename?: 'Mutation', createOneGymImpPost: { __typename?: 'GymImpPost', id: number } };

export type CreateOneGymImpPostLikeMutationVariables = Exact<{
  data: GymImpPostLikeCreateInput;
}>;


export type CreateOneGymImpPostLikeMutation = { __typename?: 'Mutation', createOneGymImpPostLike: { __typename?: 'GymImpPostLike', id: number, userId: string, gymImpPostId?: number | null } };

export type DeleteManyGymImpPostLikeMutationVariables = Exact<{
  where?: InputMaybe<GymImpPostLikeWhereInput>;
}>;


export type DeleteManyGymImpPostLikeMutation = { __typename?: 'Mutation', deleteManyGymImpPostLike: { __typename?: 'AffectedRowsOutput', count: number } };

export type GymsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput> | GymOrderByWithRelationInput>;
}>;


export type GymsQuery = { __typename?: 'Query', gyms: Array<{ __typename?: 'Gym', id: number, name: string, image?: string | null, createdAt: any, climbingType: ClimbingType, _count?: { __typename?: 'GymCount', impPosts: number } | null }> };

export type AggregateGymQueryVariables = Exact<{ [key: string]: never; }>;


export type AggregateGymQuery = { __typename?: 'Query', aggregateGym: { __typename?: 'AggregateGym', _count?: { __typename?: 'GymCountAggregate', _all: number } | null } };


export const CreateOnePostLikeDocument = gql`
    mutation CreateOnePostLike($data: PostLikeCreateInput!) {
  createOnePostLike(data: $data) {
    id
    userId
    postId
  }
}
    `;
export type CreateOnePostLikeMutationFn = Apollo.MutationFunction<CreateOnePostLikeMutation, CreateOnePostLikeMutationVariables>;

/**
 * __useCreateOnePostLikeMutation__
 *
 * To run a mutation, you first call `useCreateOnePostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePostLikeMutation, { data, loading, error }] = useCreateOnePostLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOnePostLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateOnePostLikeMutation, CreateOnePostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOnePostLikeMutation, CreateOnePostLikeMutationVariables>(CreateOnePostLikeDocument, options);
      }
export type CreateOnePostLikeMutationHookResult = ReturnType<typeof useCreateOnePostLikeMutation>;
export type CreateOnePostLikeMutationResult = Apollo.MutationResult<CreateOnePostLikeMutation>;
export type CreateOnePostLikeMutationOptions = Apollo.BaseMutationOptions<CreateOnePostLikeMutation, CreateOnePostLikeMutationVariables>;
export const DeleteManyPostLikeDocument = gql`
    mutation DeleteManyPostLike($where: PostLikeWhereInput) {
  deleteManyPostLike(where: $where) {
    count
  }
}
    `;
export type DeleteManyPostLikeMutationFn = Apollo.MutationFunction<DeleteManyPostLikeMutation, DeleteManyPostLikeMutationVariables>;

/**
 * __useDeleteManyPostLikeMutation__
 *
 * To run a mutation, you first call `useDeleteManyPostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPostLikeMutation, { data, loading, error }] = useDeleteManyPostLikeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyPostLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPostLikeMutation, DeleteManyPostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPostLikeMutation, DeleteManyPostLikeMutationVariables>(DeleteManyPostLikeDocument, options);
      }
export type DeleteManyPostLikeMutationHookResult = ReturnType<typeof useDeleteManyPostLikeMutation>;
export type DeleteManyPostLikeMutationResult = Apollo.MutationResult<DeleteManyPostLikeMutation>;
export type DeleteManyPostLikeMutationOptions = Apollo.BaseMutationOptions<DeleteManyPostLikeMutation, DeleteManyPostLikeMutationVariables>;
export const CreateOnePostDocument = gql`
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
export type CreateOnePostMutationFn = Apollo.MutationFunction<CreateOnePostMutation, CreateOnePostMutationVariables>;

/**
 * __useCreateOnePostMutation__
 *
 * To run a mutation, you first call `useCreateOnePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePostMutation, { data, loading, error }] = useCreateOnePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOnePostMutation(baseOptions?: Apollo.MutationHookOptions<CreateOnePostMutation, CreateOnePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOnePostMutation, CreateOnePostMutationVariables>(CreateOnePostDocument, options);
      }
export type CreateOnePostMutationHookResult = ReturnType<typeof useCreateOnePostMutation>;
export type CreateOnePostMutationResult = Apollo.MutationResult<CreateOnePostMutation>;
export type CreateOnePostMutationOptions = Apollo.BaseMutationOptions<CreateOnePostMutation, CreateOnePostMutationVariables>;
export const GymOptionsDocument = gql`
    query GymOptions($orderBy: [GymOrderByWithRelationInput!]) {
  gyms(orderBy: $orderBy) {
    id
    name
  }
}
    `;

/**
 * __useGymOptionsQuery__
 *
 * To run a query within a React component, call `useGymOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGymOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGymOptionsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGymOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GymOptionsQuery, GymOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GymOptionsQuery, GymOptionsQueryVariables>(GymOptionsDocument, options);
      }
export function useGymOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GymOptionsQuery, GymOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GymOptionsQuery, GymOptionsQueryVariables>(GymOptionsDocument, options);
        }
export type GymOptionsQueryHookResult = ReturnType<typeof useGymOptionsQuery>;
export type GymOptionsLazyQueryHookResult = ReturnType<typeof useGymOptionsLazyQuery>;
export type GymOptionsQueryResult = Apollo.QueryResult<GymOptionsQuery, GymOptionsQueryVariables>;
export const FindFirstPostDocument = gql`
    query FindFirstPost($where: PostWhereInput) {
  findFirstPost(where: $where) {
    id
    title
    content
    gym {
      name
      image
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
      viewHistory
    }
  }
}
    `;

/**
 * __useFindFirstPostQuery__
 *
 * To run a query within a React component, call `useFindFirstPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFirstPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFirstPostQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindFirstPostQuery(baseOptions?: Apollo.QueryHookOptions<FindFirstPostQuery, FindFirstPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindFirstPostQuery, FindFirstPostQueryVariables>(FindFirstPostDocument, options);
      }
export function useFindFirstPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFirstPostQuery, FindFirstPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindFirstPostQuery, FindFirstPostQueryVariables>(FindFirstPostDocument, options);
        }
export type FindFirstPostQueryHookResult = ReturnType<typeof useFindFirstPostQuery>;
export type FindFirstPostLazyQueryHookResult = ReturnType<typeof useFindFirstPostLazyQuery>;
export type FindFirstPostQueryResult = Apollo.QueryResult<FindFirstPostQuery, FindFirstPostQueryVariables>;
export const RepliesDocument = gql`
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

/**
 * __useRepliesQuery__
 *
 * To run a query within a React component, call `useRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepliesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useRepliesQuery(baseOptions?: Apollo.QueryHookOptions<RepliesQuery, RepliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepliesQuery, RepliesQueryVariables>(RepliesDocument, options);
      }
export function useRepliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepliesQuery, RepliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepliesQuery, RepliesQueryVariables>(RepliesDocument, options);
        }
export type RepliesQueryHookResult = ReturnType<typeof useRepliesQuery>;
export type RepliesLazyQueryHookResult = ReturnType<typeof useRepliesLazyQuery>;
export type RepliesQueryResult = Apollo.QueryResult<RepliesQuery, RepliesQueryVariables>;
export const CreateOneReplyDocument = gql`
    mutation CreateOneReply($data: ReplyCreateInput!) {
  createOneReply(data: $data) {
    content
    postId
    title
    userName
  }
}
    `;
export type CreateOneReplyMutationFn = Apollo.MutationFunction<CreateOneReplyMutation, CreateOneReplyMutationVariables>;

/**
 * __useCreateOneReplyMutation__
 *
 * To run a mutation, you first call `useCreateOneReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneReplyMutation, { data, loading, error }] = useCreateOneReplyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneReplyMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneReplyMutation, CreateOneReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneReplyMutation, CreateOneReplyMutationVariables>(CreateOneReplyDocument, options);
      }
export type CreateOneReplyMutationHookResult = ReturnType<typeof useCreateOneReplyMutation>;
export type CreateOneReplyMutationResult = Apollo.MutationResult<CreateOneReplyMutation>;
export type CreateOneReplyMutationOptions = Apollo.BaseMutationOptions<CreateOneReplyMutation, CreateOneReplyMutationVariables>;
export const PostsDocument = gql`
    query Posts($take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {
  posts(take: $take, skip: $skip, orderBy: $orderBy) {
    id
    title
    content
    gym {
      name
      image
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
      viewHistory
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const _CountDocument = gql`
    query _count {
  aggregatePost {
    _count {
      _all
    }
  }
}
    `;

/**
 * __use_CountQuery__
 *
 * To run a query within a React component, call `use_CountQuery` and pass it any options that fit your needs.
 * When your component renders, `use_CountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = use_CountQuery({
 *   variables: {
 *   },
 * });
 */
export function use_CountQuery(baseOptions?: Apollo.QueryHookOptions<_CountQuery, _CountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<_CountQuery, _CountQueryVariables>(_CountDocument, options);
      }
export function use_CountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<_CountQuery, _CountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<_CountQuery, _CountQueryVariables>(_CountDocument, options);
        }
export type _CountQueryHookResult = ReturnType<typeof use_CountQuery>;
export type _CountLazyQueryHookResult = ReturnType<typeof use_CountLazyQuery>;
export type _CountQueryResult = Apollo.QueryResult<_CountQuery, _CountQueryVariables>;
export const CreateOneGymDocument = gql`
    mutation CreateOneGym($data: GymCreateInput!) {
  createOneGym(data: $data) {
    id
    name
    image
    createdAt
    climbingType
  }
}
    `;
export type CreateOneGymMutationFn = Apollo.MutationFunction<CreateOneGymMutation, CreateOneGymMutationVariables>;

/**
 * __useCreateOneGymMutation__
 *
 * To run a mutation, you first call `useCreateOneGymMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneGymMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneGymMutation, { data, loading, error }] = useCreateOneGymMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneGymMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneGymMutation, CreateOneGymMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneGymMutation, CreateOneGymMutationVariables>(CreateOneGymDocument, options);
      }
export type CreateOneGymMutationHookResult = ReturnType<typeof useCreateOneGymMutation>;
export type CreateOneGymMutationResult = Apollo.MutationResult<CreateOneGymMutation>;
export type CreateOneGymMutationOptions = Apollo.BaseMutationOptions<CreateOneGymMutation, CreateOneGymMutationVariables>;
export const FindFirstGymDocument = gql`
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
  }
}
    `;

/**
 * __useFindFirstGymQuery__
 *
 * To run a query within a React component, call `useFindFirstGymQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFirstGymQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFirstGymQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindFirstGymQuery(baseOptions?: Apollo.QueryHookOptions<FindFirstGymQuery, FindFirstGymQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindFirstGymQuery, FindFirstGymQueryVariables>(FindFirstGymDocument, options);
      }
export function useFindFirstGymLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFirstGymQuery, FindFirstGymQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindFirstGymQuery, FindFirstGymQueryVariables>(FindFirstGymDocument, options);
        }
export type FindFirstGymQueryHookResult = ReturnType<typeof useFindFirstGymQuery>;
export type FindFirstGymLazyQueryHookResult = ReturnType<typeof useFindFirstGymLazyQuery>;
export type FindFirstGymQueryResult = Apollo.QueryResult<FindFirstGymQuery, FindFirstGymQueryVariables>;
export const GymImpPostsDocument = gql`
    query GymImpPosts($where: GymImpPostWhereInput) {
  gymImpPosts(where: $where) {
    id
    createdAt
    updatedAt
    deletedAt
    userName
    title
    content
    gymId
    likes {
      id
      userId
      gymImpPostId
    }
  }
}
    `;

/**
 * __useGymImpPostsQuery__
 *
 * To run a query within a React component, call `useGymImpPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGymImpPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGymImpPostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGymImpPostsQuery(baseOptions?: Apollo.QueryHookOptions<GymImpPostsQuery, GymImpPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GymImpPostsQuery, GymImpPostsQueryVariables>(GymImpPostsDocument, options);
      }
export function useGymImpPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GymImpPostsQuery, GymImpPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GymImpPostsQuery, GymImpPostsQueryVariables>(GymImpPostsDocument, options);
        }
export type GymImpPostsQueryHookResult = ReturnType<typeof useGymImpPostsQuery>;
export type GymImpPostsLazyQueryHookResult = ReturnType<typeof useGymImpPostsLazyQuery>;
export type GymImpPostsQueryResult = Apollo.QueryResult<GymImpPostsQuery, GymImpPostsQueryVariables>;
export const CreateOneGymImpPostDocument = gql`
    mutation CreateOneGymImpPost($data: GymImpPostCreateInput!) {
  createOneGymImpPost(data: $data) {
    id
  }
}
    `;
export type CreateOneGymImpPostMutationFn = Apollo.MutationFunction<CreateOneGymImpPostMutation, CreateOneGymImpPostMutationVariables>;

/**
 * __useCreateOneGymImpPostMutation__
 *
 * To run a mutation, you first call `useCreateOneGymImpPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneGymImpPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneGymImpPostMutation, { data, loading, error }] = useCreateOneGymImpPostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneGymImpPostMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneGymImpPostMutation, CreateOneGymImpPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneGymImpPostMutation, CreateOneGymImpPostMutationVariables>(CreateOneGymImpPostDocument, options);
      }
export type CreateOneGymImpPostMutationHookResult = ReturnType<typeof useCreateOneGymImpPostMutation>;
export type CreateOneGymImpPostMutationResult = Apollo.MutationResult<CreateOneGymImpPostMutation>;
export type CreateOneGymImpPostMutationOptions = Apollo.BaseMutationOptions<CreateOneGymImpPostMutation, CreateOneGymImpPostMutationVariables>;
export const CreateOneGymImpPostLikeDocument = gql`
    mutation CreateOneGymImpPostLike($data: GymImpPostLikeCreateInput!) {
  createOneGymImpPostLike(data: $data) {
    id
    userId
    gymImpPostId
  }
}
    `;
export type CreateOneGymImpPostLikeMutationFn = Apollo.MutationFunction<CreateOneGymImpPostLikeMutation, CreateOneGymImpPostLikeMutationVariables>;

/**
 * __useCreateOneGymImpPostLikeMutation__
 *
 * To run a mutation, you first call `useCreateOneGymImpPostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneGymImpPostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneGymImpPostLikeMutation, { data, loading, error }] = useCreateOneGymImpPostLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneGymImpPostLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneGymImpPostLikeMutation, CreateOneGymImpPostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneGymImpPostLikeMutation, CreateOneGymImpPostLikeMutationVariables>(CreateOneGymImpPostLikeDocument, options);
      }
export type CreateOneGymImpPostLikeMutationHookResult = ReturnType<typeof useCreateOneGymImpPostLikeMutation>;
export type CreateOneGymImpPostLikeMutationResult = Apollo.MutationResult<CreateOneGymImpPostLikeMutation>;
export type CreateOneGymImpPostLikeMutationOptions = Apollo.BaseMutationOptions<CreateOneGymImpPostLikeMutation, CreateOneGymImpPostLikeMutationVariables>;
export const DeleteManyGymImpPostLikeDocument = gql`
    mutation DeleteManyGymImpPostLike($where: GymImpPostLikeWhereInput) {
  deleteManyGymImpPostLike(where: $where) {
    count
  }
}
    `;
export type DeleteManyGymImpPostLikeMutationFn = Apollo.MutationFunction<DeleteManyGymImpPostLikeMutation, DeleteManyGymImpPostLikeMutationVariables>;

/**
 * __useDeleteManyGymImpPostLikeMutation__
 *
 * To run a mutation, you first call `useDeleteManyGymImpPostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyGymImpPostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyGymImpPostLikeMutation, { data, loading, error }] = useDeleteManyGymImpPostLikeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyGymImpPostLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyGymImpPostLikeMutation, DeleteManyGymImpPostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyGymImpPostLikeMutation, DeleteManyGymImpPostLikeMutationVariables>(DeleteManyGymImpPostLikeDocument, options);
      }
export type DeleteManyGymImpPostLikeMutationHookResult = ReturnType<typeof useDeleteManyGymImpPostLikeMutation>;
export type DeleteManyGymImpPostLikeMutationResult = Apollo.MutationResult<DeleteManyGymImpPostLikeMutation>;
export type DeleteManyGymImpPostLikeMutationOptions = Apollo.BaseMutationOptions<DeleteManyGymImpPostLikeMutation, DeleteManyGymImpPostLikeMutationVariables>;
export const GymsDocument = gql`
    query Gyms($take: Int, $skip: Int, $orderBy: [GymOrderByWithRelationInput!]) {
  gyms(take: $take, skip: $skip, orderBy: $orderBy) {
    _count {
      impPosts
    }
    id
    name
    image
    createdAt
    climbingType
  }
}
    `;

/**
 * __useGymsQuery__
 *
 * To run a query within a React component, call `useGymsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGymsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGymsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGymsQuery(baseOptions?: Apollo.QueryHookOptions<GymsQuery, GymsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GymsQuery, GymsQueryVariables>(GymsDocument, options);
      }
export function useGymsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GymsQuery, GymsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GymsQuery, GymsQueryVariables>(GymsDocument, options);
        }
export type GymsQueryHookResult = ReturnType<typeof useGymsQuery>;
export type GymsLazyQueryHookResult = ReturnType<typeof useGymsLazyQuery>;
export type GymsQueryResult = Apollo.QueryResult<GymsQuery, GymsQueryVariables>;
export const AggregateGymDocument = gql`
    query AggregateGym {
  aggregateGym {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useAggregateGymQuery__
 *
 * To run a query within a React component, call `useAggregateGymQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateGymQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateGymQuery({
 *   variables: {
 *   },
 * });
 */
export function useAggregateGymQuery(baseOptions?: Apollo.QueryHookOptions<AggregateGymQuery, AggregateGymQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AggregateGymQuery, AggregateGymQueryVariables>(AggregateGymDocument, options);
      }
export function useAggregateGymLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AggregateGymQuery, AggregateGymQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AggregateGymQuery, AggregateGymQueryVariables>(AggregateGymDocument, options);
        }
export type AggregateGymQueryHookResult = ReturnType<typeof useAggregateGymQuery>;
export type AggregateGymLazyQueryHookResult = ReturnType<typeof useAggregateGymLazyQuery>;
export type AggregateGymQueryResult = Apollo.QueryResult<AggregateGymQuery, AggregateGymQueryVariables>;