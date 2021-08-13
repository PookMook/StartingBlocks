import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("/api/graphql" as string, {
      method: "POST",
      credentials: "include",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  /** ID of the user */
  id: Scalars['ID'];
  /** Name of the user */
  name: Scalars['String'];
};

export type LoadAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type LoadAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string }> };


export const LoadAllUsersDocument = `
    query LoadAllUsers {
  users {
    name
  }
}
    `;
export const useLoadAllUsersQuery = <
      TData = LoadAllUsersQuery,
      TError = unknown
    >(
      variables?: LoadAllUsersQueryVariables, 
      options?: UseQueryOptions<LoadAllUsersQuery, TError, TData>
    ) => 
    useQuery<LoadAllUsersQuery, TError, TData>(
      ['LoadAllUsers', variables],
      fetcher<LoadAllUsersQuery, LoadAllUsersQueryVariables>(LoadAllUsersDocument, variables),
      options
    );