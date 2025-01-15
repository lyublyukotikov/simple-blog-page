import React from "react";
import styles from "./StatisticsTable.module.scss";

interface StatisticsProps {
  totalArticles: number;
  totalCharacters: number;
  totalComments: number;
}

const StatisticsTable: React.FC<StatisticsProps> = ({
  totalArticles,
  totalCharacters,
  totalComments,
}) => {
  return (
    <div className={styles.statsContainer}>
      <h3 className={styles.title}>Статистика статей на сайте</h3>
      <table className={styles.statsTable}>
        <thead>
          <tr>
            <th>Метрика</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Количество статей</td>
            <td>{totalArticles}</td>
          </tr>
          <tr>
            <td>Общее количество символов</td>
            <td>{totalCharacters}</td>
          </tr>
          <tr>
            <td>Количество комментариев к статьям</td>
            <td>{totalComments}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
