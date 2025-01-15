import React from "react";
import { useAddCommentMutation } from "../../../services/api";
import { Comment } from "../../../models/CommentTypes";
import NoCommentsMessage from "../../../components/NoCommentsMessage/NoCommentsMessage";
import AddCommentForm from "../AddCommentForm/AddCommentForm"; 
import styles from "./CommentSection.module.scss";

interface CommentSectionProps {
  articleId: number;
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({
  articleId,
  comments,
}) => {
  const [addComment] = useAddCommentMutation();

  const handleAddComment = async (values: {
    username: string;
    newComment: string;
  }) => {
    try {
      await addComment({
        articleId,
        comment: {
          content: values.newComment,
          author: values.username,
        },
      });
    } catch (error) {
      alert("Ошибка при добавлении комментария.");
    }
  };

  return (
    <div className={styles.commentsSection}>
      <h4>Комментарии:</h4>
      <div className={styles.commentsContainer}>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.author}:</strong> {comment.content}
              </li>
            ))}
          </ul>
        ) : (
          <NoCommentsMessage />
        )}
      </div>

      <AddCommentForm onSubmit={handleAddComment} />
    </div>
  );
};

export default CommentSection;
