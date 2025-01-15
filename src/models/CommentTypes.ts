export interface Comment {
  id: string;
  content: string;
  author: string;
}

export interface CommentSectionProps {
  articleId: number;
  comments: Comment[];
}
