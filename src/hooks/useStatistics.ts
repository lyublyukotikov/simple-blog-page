import { useMemo } from "react";
import { IncomingArticle } from "../models/ArticleTypes";

export const useStatistics = (articles: IncomingArticle[]) => {
  return useMemo(() => {
    const totalArticles = articles.length;
    const totalCharacters = articles.reduce(
      (sum, article) => sum + article.content.length,
      0
    );
    const totalComments = articles.reduce(
      (sum, article) => sum + (article.comments?.length || 0),
      0
    );

    return { totalArticles, totalCharacters, totalComments };
  }, [articles]);
};
