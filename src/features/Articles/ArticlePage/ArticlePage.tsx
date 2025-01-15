import React from "react";
import ArticleAccordion from "../ArticleCard/ArticleAccordion";
import styles from "./ArticlePage.module.scss";
import { ArticlePageProps } from "../../../models/ArticleTypes";

const ArticlePage: React.FC<ArticlePageProps> = ({ articles }) => {
  return (
    <div className={styles.articlePage}>
      <h1 className={styles.title}>Список статей</h1>
      <ArticleAccordion articles={articles} />
    </div>
  );
};

export default ArticlePage;
