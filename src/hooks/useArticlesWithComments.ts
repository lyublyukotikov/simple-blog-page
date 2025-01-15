import { useMemo } from "react";
import { useGetArticlesQuery, useGetCommentsQuery } from "../services/api";
import { IncomingArticle } from "../models/ArticleTypes";

export const useArticlesWithComments = (): {
  articlesWithComments: IncomingArticle[];
  isLoading: boolean;
  error: boolean;
} => {
  const {
    data: articles,
    isLoading: isArticlesLoading,
    error: articlesError,
  } = useGetArticlesQuery();
  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError,
  } = useGetCommentsQuery();

  const isLoading = isArticlesLoading || isCommentsLoading;
  const error = !!(articlesError || commentsError);

  const articlesWithComments = useMemo(() => {
    if (!articles || !comments) return [];
    return articles.map((article) => ({
      ...article,
      comments: comments.filter((comment) => comment.articleId === article.id),
    }));
  }, [articles, comments]);

  return { articlesWithComments, isLoading, error };
};
