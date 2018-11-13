// Code generated by Prisma (prisma@1.20.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  comment: (where?: CommentWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  comment: (where: CommentWhereUniqueInput) => CommentPromise;
  comments: (
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Comment>;
  commentsConnection: (
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CommentConnectionPromise;
  post: (where: PostWhereUniqueInput) => PostPromise;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Post>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createComment: (data: CommentCreateInput) => CommentPromise;
  updateComment: (
    args: { data: CommentUpdateInput; where: CommentWhereUniqueInput }
  ) => CommentPromise;
  updateManyComments: (
    args: { data: CommentUpdateManyMutationInput; where?: CommentWhereInput }
  ) => BatchPayloadPromise;
  upsertComment: (
    args: {
      where: CommentWhereUniqueInput;
      create: CommentCreateInput;
      update: CommentUpdateInput;
    }
  ) => CommentPromise;
  deleteComment: (where: CommentWhereUniqueInput) => CommentPromise;
  deleteManyComments: (where?: CommentWhereInput) => BatchPayloadPromise;
  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => PostPromise;
  updateManyPosts: (
    args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }
  ) => BatchPayloadPromise;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  comment: (
    where?: CommentSubscriptionWhereInput
  ) => CommentSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "body_ASC"
  | "body_DESC"
  | "published_ASC"
  | "published_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type CommentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CommentUpdateInput {
  text?: String;
  author?: UserUpdateOneRequiredWithoutCommentsInput;
  post?: PostUpdateOneRequiredWithoutCommentsInput;
}

export type CommentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CommentCreateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput;
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  update?:
    | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    | CommentUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    | CommentUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface CommentCreateWithoutPostInput {
  text: String;
  author: UserCreateOneWithoutCommentsInput;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface PostCreateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput;
  connect?: PostWhereUniqueInput;
}

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  body?: String;
  body_not?: String;
  body_in?: String[] | String;
  body_not_in?: String[] | String;
  body_lt?: String;
  body_lte?: String;
  body_gt?: String;
  body_gte?: String;
  body_contains?: String;
  body_not_contains?: String;
  body_starts_with?: String;
  body_not_starts_with?: String;
  body_ends_with?: String;
  body_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  author?: UserWhereInput;
  comments_every?: CommentWhereInput;
  comments_some?: CommentWhereInput;
  comments_none?: CommentWhereInput;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface PostCreateWithoutCommentsInput {
  title: String;
  body: String;
  published: Boolean;
  author: UserCreateOneWithoutPostsInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
}

export interface UserCreateWithoutPostsInput {
  name: String;
  email: String;
  comments?: CommentCreateManyWithoutAuthorInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  posts?: PostCreateManyWithoutAuthorInput;
  comments?: CommentCreateManyWithoutAuthorInput;
}

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CommentCreateWithoutAuthorInput {
  text: String;
  post: PostCreateOneWithoutCommentsInput;
}

export interface PostCreateInput {
  title: String;
  body: String;
  published: Boolean;
  author: UserCreateOneWithoutPostsInput;
  comments?: CommentCreateManyWithoutPostInput;
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutAuthorDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserUpdateOneRequiredWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput;
  update?: UserUpdateWithoutCommentsDataInput;
  upsert?: UserUpsertWithoutCommentsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface UserUpdateWithoutCommentsDataInput {
  name?: String;
  email?: String;
  posts?: PostUpdateManyWithoutAuthorInput;
}

export interface CommentUpdateWithoutAuthorDataInput {
  text?: String;
  post?: PostUpdateOneRequiredWithoutCommentsInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  comments_every?: CommentWhereInput;
  comments_some?: CommentWhereInput;
  comments_none?: CommentWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface CommentCreateInput {
  text: String;
  author: UserCreateOneWithoutCommentsInput;
  post: PostCreateOneWithoutCommentsInput;
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface UserCreateWithoutCommentsInput {
  name: String;
  email: String;
  posts?: PostCreateManyWithoutAuthorInput;
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: String;
  body?: String;
  published?: Boolean;
  comments?: CommentUpdateManyWithoutPostInput;
}

export interface PostCreateWithoutAuthorInput {
  title: String;
  body: String;
  published: Boolean;
  comments?: CommentCreateManyWithoutPostInput;
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput;
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  update?:
    | CommentUpdateWithWhereUniqueWithoutPostInput[]
    | CommentUpdateWithWhereUniqueWithoutPostInput;
  upsert?:
    | CommentUpsertWithWhereUniqueWithoutPostInput[]
    | CommentUpsertWithWhereUniqueWithoutPostInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostDataInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  posts?: PostUpdateManyWithoutAuthorInput;
  comments?: CommentUpdateManyWithoutAuthorInput;
}

export interface CommentUpdateWithoutPostDataInput {
  text?: String;
  author?: UserUpdateOneRequiredWithoutCommentsInput;
}

export interface PostUpdateInput {
  title?: String;
  body?: String;
  published?: Boolean;
  author?: UserUpdateOneRequiredWithoutPostsInput;
  comments?: CommentUpdateManyWithoutPostInput;
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostDataInput;
  create: CommentCreateWithoutPostInput;
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput;
  create: PostCreateWithoutCommentsInput;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput;
  create: UserCreateWithoutCommentsInput;
}

export interface CommentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CommentWhereInput;
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
}

export interface UserUpdateWithoutPostsDataInput {
  name?: String;
  email?: String;
  comments?: CommentUpdateManyWithoutAuthorInput;
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  update?: UserUpdateWithoutPostsDataInput;
  upsert?: UserUpsertWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface PostUpdateWithoutCommentsDataInput {
  title?: String;
  body?: String;
  published?: Boolean;
  author?: UserUpdateOneRequiredWithoutPostsInput;
}

export interface PostUpdateOneRequiredWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput;
  update?: PostUpdateWithoutCommentsDataInput;
  upsert?: PostUpsertWithoutCommentsInput;
  connect?: PostWhereUniqueInput;
}

export interface PostUpdateManyMutationInput {
  title?: String;
  body?: String;
  published?: Boolean;
}

export interface CommentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  author?: UserWhereInput;
  post?: PostWhereInput;
  AND?: CommentWhereInput[] | CommentWhereInput;
  OR?: CommentWhereInput[] | CommentWhereInput;
  NOT?: CommentWhereInput[] | CommentWhereInput;
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput;
  connect?: UserWhereUniqueInput;
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutAuthorDataInput;
  create: CommentCreateWithoutAuthorInput;
}

export interface CommentUpdateManyMutationInput {
  text?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface AggregateComment {
  count: Int;
}

export interface AggregateCommentPromise
  extends Promise<AggregateComment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCommentSubscription
  extends Promise<AsyncIterator<AggregateComment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Post>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValues>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface CommentEdge {
  cursor: String;
}

export interface CommentEdgePromise extends Promise<CommentEdge>, Fragmentable {
  node: <T = Comment>() => T;
  cursor: () => Promise<String>;
}

export interface CommentEdgeSubscription
  extends Promise<AsyncIterator<CommentEdge>>,
    Fragmentable {
  node: <T = CommentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface CommentConnection {}

export interface CommentConnectionPromise
  extends Promise<CommentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<CommentEdge>>() => T;
  aggregate: <T = AggregateComment>() => T;
}

export interface CommentConnectionSubscription
  extends Promise<AsyncIterator<CommentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CommentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCommentSubscription>() => T;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  posts: <T = FragmentableArray<Post>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  comments: <T = FragmentableArray<Comment>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<PostSubscription>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  comments: <T = Promise<AsyncIterator<CommentSubscription>>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  title: String;
  body: String;
  published: Boolean;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface PostConnection {}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePost>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface Post {
  id: ID_Output;
  title: String;
  body: String;
  published: Boolean;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = User>() => T;
  comments: <T = FragmentableArray<Comment>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
  comments: <T = Promise<AsyncIterator<CommentSubscription>>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface CommentPreviousValues {
  id: ID_Output;
  text: String;
}

export interface CommentPreviousValuesPromise
  extends Promise<CommentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface CommentPreviousValuesSubscription
  extends Promise<AsyncIterator<CommentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface CommentSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CommentSubscriptionPayloadPromise
  extends Promise<CommentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Comment>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CommentPreviousValues>() => T;
}

export interface CommentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CommentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CommentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CommentPreviousValuesSubscription>() => T;
}

export interface Comment {
  id: ID_Output;
  text: String;
}

export interface CommentPromise extends Promise<Comment>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  author: <T = User>() => T;
  post: <T = Post>() => T;
}

export interface CommentSubscription
  extends Promise<AsyncIterator<Comment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
  post: <T = PostSubscription>() => T;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PostEdge {
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = Post>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
