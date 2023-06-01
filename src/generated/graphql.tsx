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

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AggregatePreferredDayAndTime = {
  __typename?: 'AggregatePreferredDayAndTime';
  _avg?: Maybe<PreferredDayAndTimeAvgAggregate>;
  _count?: Maybe<PreferredDayAndTimeCountAggregate>;
  _max?: Maybe<PreferredDayAndTimeMaxAggregate>;
  _min?: Maybe<PreferredDayAndTimeMinAggregate>;
  _sum?: Maybe<PreferredDayAndTimeSumAggregate>;
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
  Posts: Array<Post>;
  _count?: Maybe<GymCount>;
  climbingType: ClimbingType;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
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
  Posts: Scalars['Int']['output'];
};

export type GymCountAggregate = {
  __typename?: 'GymCountAggregate';
  _all: Scalars['Int']['output'];
  climbingType: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type GymCountOrderByAggregateInput = {
  climbingType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GymCreateInput = {
  Posts?: InputMaybe<PostCreateNestedManyWithoutGymInput>;
  climbingType: ClimbingType;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GymCreateManyInput = {
  climbingType: ClimbingType;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GymCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<GymCreateWithoutPostsInput>;
};

export type GymCreateOrConnectWithoutPostsInput = {
  create: GymCreateWithoutPostsInput;
  where: GymWhereUniqueInput;
};

export type GymCreateWithoutPostsInput = {
  climbingType: ClimbingType;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GymGroupBy = {
  __typename?: 'GymGroupBy';
  _avg?: Maybe<GymAvgAggregate>;
  _count?: Maybe<GymCountAggregate>;
  _max?: Maybe<GymMaxAggregate>;
  _min?: Maybe<GymMinAggregate>;
  _sum?: Maybe<GymSumAggregate>;
  climbingType: ClimbingType;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type GymMaxAggregate = {
  __typename?: 'GymMaxAggregate';
  climbingType?: Maybe<ClimbingType>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GymMaxOrderByAggregateInput = {
  climbingType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GymMinAggregate = {
  __typename?: 'GymMinAggregate';
  climbingType?: Maybe<ClimbingType>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GymMinOrderByAggregateInput = {
  climbingType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GymOrderByWithAggregationInput = {
  _avg?: InputMaybe<GymAvgOrderByAggregateInput>;
  _count?: InputMaybe<GymCountOrderByAggregateInput>;
  _max?: InputMaybe<GymMaxOrderByAggregateInput>;
  _min?: InputMaybe<GymMinOrderByAggregateInput>;
  _sum?: InputMaybe<GymSumOrderByAggregateInput>;
  climbingType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GymOrderByWithRelationInput = {
  Posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  climbingType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GymRelationFilter = {
  is?: InputMaybe<GymWhereInput>;
  isNot?: InputMaybe<GymWhereInput>;
};

export enum GymScalarFieldEnum {
  ClimbingType = 'climbingType',
  Id = 'id',
  Image = 'image',
  Name = 'name'
}

export type GymScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GymScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GymScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GymScalarWhereWithAggregatesInput>>;
  climbingType?: InputMaybe<EnumClimbingTypeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type GymSumAggregate = {
  __typename?: 'GymSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type GymSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GymUpdateInput = {
  Posts?: InputMaybe<PostUpdateManyWithoutGymNestedInput>;
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymUpdateManyMutationInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<GymWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GymCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<GymCreateWithoutPostsInput>;
  update?: InputMaybe<GymUpdateWithoutPostsInput>;
  upsert?: InputMaybe<GymUpsertWithoutPostsInput>;
};

export type GymUpdateWithoutPostsInput = {
  climbingType?: InputMaybe<EnumClimbingTypeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GymUpsertWithoutPostsInput = {
  create: GymCreateWithoutPostsInput;
  update: GymUpdateWithoutPostsInput;
};

export type GymWhereInput = {
  AND?: InputMaybe<Array<GymWhereInput>>;
  NOT?: InputMaybe<Array<GymWhereInput>>;
  OR?: InputMaybe<Array<GymWhereInput>>;
  Posts?: InputMaybe<PostListRelationFilter>;
  climbingType?: InputMaybe<EnumClimbingTypeFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
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
  createManyPost: AffectedRowsOutput;
  createManyPreferredDayAndTime: AffectedRowsOutput;
  createOneGym: Gym;
  createOnePost: Post;
  createOnePreferredDayAndTime: PreferredDayAndTime;
  deleteManyGym: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyPreferredDayAndTime: AffectedRowsOutput;
  deleteOneGym?: Maybe<Gym>;
  deleteOnePost?: Maybe<Post>;
  deleteOnePreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  updateManyGym: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyPreferredDayAndTime: AffectedRowsOutput;
  updateOneGym?: Maybe<Gym>;
  updateOnePost?: Maybe<Post>;
  updateOnePreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  upsertOneGym: Gym;
  upsertOnePost: Post;
  upsertOnePreferredDayAndTime: PreferredDayAndTime;
};


export type MutationCreateManyGymArgs = {
  data: Array<GymCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPreferredDayAndTimeArgs = {
  data: Array<PreferredDayAndTimeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneGymArgs = {
  data: GymCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOnePreferredDayAndTimeArgs = {
  data: PreferredDayAndTimeCreateInput;
};


export type MutationDeleteManyGymArgs = {
  where?: InputMaybe<GymWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManyPreferredDayAndTimeArgs = {
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type MutationDeleteOneGymArgs = {
  where: GymWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOnePreferredDayAndTimeArgs = {
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type MutationUpdateManyGymArgs = {
  data: GymUpdateManyMutationInput;
  where?: InputMaybe<GymWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManyPreferredDayAndTimeArgs = {
  data: PreferredDayAndTimeUpdateManyMutationInput;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type MutationUpdateOneGymArgs = {
  data: GymUpdateInput;
  where: GymWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOnePreferredDayAndTimeArgs = {
  data: PreferredDayAndTimeUpdateInput;
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type MutationUpsertOneGymArgs = {
  create: GymCreateInput;
  update: GymUpdateInput;
  where: GymWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOnePreferredDayAndTimeArgs = {
  create: PreferredDayAndTimeCreateInput;
  update: PreferredDayAndTimeUpdateInput;
  where: PreferredDayAndTimeWhereUniqueInput;
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
  preferredDayAndTimes: Array<PreferredDayAndTime>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type PostPreferredDayAndTimesArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PreferredDayAndTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
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
  preferredDayAndTimes: Scalars['Int']['output'];
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
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type PostCreateNestedOneWithoutPreferredDayAndTimesInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPreferredDayAndTimesInput>;
  create?: InputMaybe<PostCreateWithoutPreferredDayAndTimesInput>;
};

export type PostCreateOrConnectWithoutGymInput = {
  create: PostCreateWithoutGymInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPreferredDayAndTimesInput = {
  create: PostCreateWithoutPreferredDayAndTimesInput;
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
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type PostUpdateOneRequiredWithoutPreferredDayAndTimesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPreferredDayAndTimesInput>;
  create?: InputMaybe<PostCreateWithoutPreferredDayAndTimesInput>;
  update?: InputMaybe<PostUpdateWithoutPreferredDayAndTimesInput>;
  upsert?: InputMaybe<PostUpsertWithoutPreferredDayAndTimesInput>;
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
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutGymInput = {
  create: PostCreateWithoutGymInput;
  update: PostUpdateWithoutGymInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutPreferredDayAndTimesInput = {
  create: PostCreateWithoutPreferredDayAndTimesInput;
  update: PostUpdateWithoutPreferredDayAndTimesInput;
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
  preferredDayAndTimes?: InputMaybe<PreferredDayAndTimeListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type PreferredDayAndTime = {
  __typename?: 'PreferredDayAndTime';
  dayAndTime: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
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
  dayAndTime: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
};

export type PreferredDayAndTimeCountOrderByAggregateInput = {
  dayAndTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeCreateInput = {
  dayAndTime: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutPreferredDayAndTimesInput;
};

export type PreferredDayAndTimeCreateManyInput = {
  dayAndTime: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
};

export type PreferredDayAndTimeCreateManyPostInput = {
  dayAndTime: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
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
  dayAndTime: Scalars['String']['input'];
};

export type PreferredDayAndTimeGroupBy = {
  __typename?: 'PreferredDayAndTimeGroupBy';
  _avg?: Maybe<PreferredDayAndTimeAvgAggregate>;
  _count?: Maybe<PreferredDayAndTimeCountAggregate>;
  _max?: Maybe<PreferredDayAndTimeMaxAggregate>;
  _min?: Maybe<PreferredDayAndTimeMinAggregate>;
  _sum?: Maybe<PreferredDayAndTimeSumAggregate>;
  dayAndTime: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
};

export type PreferredDayAndTimeListRelationFilter = {
  every?: InputMaybe<PreferredDayAndTimeWhereInput>;
  none?: InputMaybe<PreferredDayAndTimeWhereInput>;
  some?: InputMaybe<PreferredDayAndTimeWhereInput>;
};

export type PreferredDayAndTimeMaxAggregate = {
  __typename?: 'PreferredDayAndTimeMaxAggregate';
  dayAndTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type PreferredDayAndTimeMaxOrderByAggregateInput = {
  dayAndTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeMinAggregate = {
  __typename?: 'PreferredDayAndTimeMinAggregate';
  dayAndTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type PreferredDayAndTimeMinOrderByAggregateInput = {
  dayAndTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
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
  dayAndTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PreferredDayAndTimeOrderByWithRelationInput = {
  dayAndTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
};

export enum PreferredDayAndTimeScalarFieldEnum {
  DayAndTime = 'dayAndTime',
  Id = 'id',
  PostId = 'postId'
}

export type PreferredDayAndTimeScalarWhereInput = {
  AND?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  OR?: InputMaybe<Array<PreferredDayAndTimeScalarWhereInput>>;
  dayAndTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
};

export type PreferredDayAndTimeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PreferredDayAndTimeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PreferredDayAndTimeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PreferredDayAndTimeScalarWhereWithAggregatesInput>>;
  dayAndTime?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
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
  dayAndTime?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPreferredDayAndTimesNestedInput>;
};

export type PreferredDayAndTimeUpdateManyMutationInput = {
  dayAndTime?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  dayAndTime?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  dayAndTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
};

export type PreferredDayAndTimeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateGym: AggregateGym;
  aggregatePost: AggregatePost;
  aggregatePreferredDayAndTime: AggregatePreferredDayAndTime;
  findFirstGym?: Maybe<Gym>;
  findFirstGymOrThrow?: Maybe<Gym>;
  findFirstPost?: Maybe<Post>;
  findFirstPostOrThrow?: Maybe<Post>;
  findFirstPreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  findFirstPreferredDayAndTimeOrThrow?: Maybe<PreferredDayAndTime>;
  getGym?: Maybe<Gym>;
  getPost?: Maybe<Post>;
  getPreferredDayAndTime?: Maybe<PreferredDayAndTime>;
  groupByGym: Array<GymGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByPreferredDayAndTime: Array<PreferredDayAndTimeGroupBy>;
  gym?: Maybe<Gym>;
  gyms: Array<Gym>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  preferredDayAndTime?: Maybe<PreferredDayAndTime>;
  preferredDayAndTimes: Array<PreferredDayAndTime>;
};


export type QueryAggregateGymArgs = {
  cursor?: InputMaybe<GymWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAggregatePreferredDayAndTimeArgs = {
  cursor?: InputMaybe<PreferredDayAndTimeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryFindFirstGymArgs = {
  cursor?: InputMaybe<GymWhereUniqueInput>;
  distinct?: InputMaybe<Array<GymScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GymOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
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


export type QueryGetGymArgs = {
  where: GymWhereUniqueInput;
};


export type QueryGetPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryGetPreferredDayAndTimeArgs = {
  where: PreferredDayAndTimeWhereUniqueInput;
};


export type QueryGroupByGymArgs = {
  by: Array<GymScalarFieldEnum>;
  having?: InputMaybe<GymScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GymOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GymWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryGroupByPreferredDayAndTimeArgs = {
  by: Array<PreferredDayAndTimeScalarFieldEnum>;
  having?: InputMaybe<PreferredDayAndTimeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PreferredDayAndTimeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreferredDayAndTimeWhereInput>;
};


export type QueryGymArgs = {
  where: GymWhereUniqueInput;
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

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

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

export type CreateOnePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreateOnePostMutation = { __typename?: 'Mutation', createOnePost: { __typename?: 'Post', title: string, content: string, gymId: number, climbingType: ClimbingType, belayMonths: number, experienceMonths: number, grade: string, preferredDayAndTimes: Array<{ __typename?: 'PreferredDayAndTime', dayAndTime: string }> } };

export type PostsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string, content: string, grade: string, experienceMonths: number, belayMonths: number, createdAt: any, climbingType: ClimbingType, gym: { __typename?: 'Gym', name: string }, preferredDayAndTimes: Array<{ __typename?: 'PreferredDayAndTime', id: number, dayAndTime: string }> }> };


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
export const PostsDocument = gql`
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