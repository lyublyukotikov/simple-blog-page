import React, { useState } from "react";
import DynamicButton from "../UI/DynamicButton";
import styles from "./ArticleAccordion.module.scss";
import {ArticlePageProps } from "../models/ArticleTypes";
import  CommentSection  from "../CommentSection/CommentSection";

const ArticleAccordion: React.FC<ArticlePageProps> = ({ articles }) => {
  const [showFullTextId, setShowFullTextId] = useState<number | null>(null);

  const toggleFullText = (id: number) => {
    setShowFullTextId((prev) => (prev === id ? null : id));
  };

  const truncateContent = (content: string, length: number) =>
    content.length > length ? `${content.slice(0, length)}...` : content;

  return (
    <div className={styles.accordion}>
      {articles.map((article) => (
        <div key={article.id} className={styles.article}>
          <div className={styles.header}>
            <h3 className={styles.title}>{article.title}</h3>
          </div>
          <div className={styles.content}>
            <p className={styles.author}>Автор: {article.author}</p>
            <p className={styles.text}>
              {showFullTextId === article.id
                ? article.content
                : truncateContent(article.content, 100)}
            </p>
            <DynamicButton
              label={showFullTextId === article.id ? "Скрыть" : "Подробнее"}
              onClick={() => toggleFullText(article.id)}
            />
            {/* компонент с комментариями передаем id статьи и комментарий */}
            <CommentSection articleId={article.id} comments={article.comments} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleAccordion;
