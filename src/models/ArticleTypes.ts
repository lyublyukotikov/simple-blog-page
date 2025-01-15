import { Comment } from "./CommentTypes";

export interface IncomingArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  comments: Comment[];
}

export interface OutgoingArticle {
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export interface ArticlePageProps {
  articles: IncomingArticle[];
}
