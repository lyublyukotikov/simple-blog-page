import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OutgoingArticle, IncomingArticle } from "../models/ArticleTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6786ccd9f80b78923aa83033.mockapi.io/articals/",
  }),
  tagTypes: ["Articals"],
  endpoints: (builder) => ({
    getArticles: builder.query<IncomingArticle[], void>({
      query: () => "Articals",
      providesTags: ["Articals"],
    }),
    getComments: builder.query<any[], void>({
      query: () => "comments",
      providesTags: ["Articals"],
    }),
    addArticle: builder.mutation<void, OutgoingArticle>({
      query: (newArticle) => ({
        url: "Articals",
        method: "POST",
        body: newArticle,
      }),
      invalidatesTags: ["Articals"],
    }),
    addComment: builder.mutation<void, { articleId: number; comment: { content: string; author: string } }>({
      query: ({ articleId, comment }) => ({
        url: `comments`,
        method: "POST",
        body: { ...comment, articleId },
      }),
      invalidatesTags: ["Articals"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetCommentsQuery,
  useAddArticleMutation,
  useAddCommentMutation,
} = api;
