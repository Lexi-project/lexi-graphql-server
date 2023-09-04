import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ConversationContent = {
  __typename?: 'ConversationContent';
  personName: Scalars['String']['output'];
  utterance: Scalars['String']['output'];
};

export type Exersice = {
  __typename?: 'Exersice';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  exerciseContent: FillBlankExercise;
  id: Scalars['ID']['output'];
};

export type ExersiceInput = {
  characters?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  context: Scalars['String']['input'];
  exerciseType: ExersiceType;
  isColloquial: Scalars['Boolean']['input'];
  level: Scalars['String']['input'];
};

export enum ExersiceType {
  FillBlank = 'FILL_BLANK',
  YesNo = 'YES_NO'
}

export type FillBlankExercise = {
  __typename?: 'FillBlankExercise';
  replacements: Array<Array<FillBlankExerciseItem>>;
};

export type FillBlankExerciseItem = {
  __typename?: 'FillBlankExerciseItem';
  answer: Scalars['String']['output'];
  hint: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  length: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  exercise?: Maybe<Exersice>;
};


export type QueryExerciseArgs = {
  exerciseConfiguration: ExersiceInput;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ConversationContent: ResolverTypeWrapper<ConversationContent>;
  Exersice: ResolverTypeWrapper<Exersice>;
  ExersiceInput: ExersiceInput;
  ExersiceType: ExersiceType;
  FillBlankExercise: ResolverTypeWrapper<FillBlankExercise>;
  FillBlankExerciseItem: ResolverTypeWrapper<FillBlankExerciseItem>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  ConversationContent: ConversationContent;
  Exersice: Exersice;
  ExersiceInput: ExersiceInput;
  FillBlankExercise: FillBlankExercise;
  FillBlankExerciseItem: FillBlankExerciseItem;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Query: {};
  String: Scalars['String']['output'];
}>;

export type ConversationContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationContent'] = ResolversParentTypes['ConversationContent']> = ResolversObject<{
  personName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  utterance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExersiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Exersice'] = ResolversParentTypes['Exersice']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exerciseContent?: Resolver<ResolversTypes['FillBlankExercise'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FillBlankExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FillBlankExercise'] = ResolversParentTypes['FillBlankExercise']> = ResolversObject<{
  replacements?: Resolver<Array<Array<ResolversTypes['FillBlankExerciseItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FillBlankExerciseItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['FillBlankExerciseItem'] = ResolversParentTypes['FillBlankExerciseItem']> = ResolversObject<{
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  exercise?: Resolver<Maybe<ResolversTypes['Exersice']>, ParentType, ContextType, RequireFields<QueryExerciseArgs, 'exerciseConfiguration'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  ConversationContent?: ConversationContentResolvers<ContextType>;
  Exersice?: ExersiceResolvers<ContextType>;
  FillBlankExercise?: FillBlankExerciseResolvers<ContextType>;
  FillBlankExerciseItem?: FillBlankExerciseItemResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

