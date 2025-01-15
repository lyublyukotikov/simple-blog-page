import React from "react";

import Header from "./Header/Header";
import DescriptionDrawer from "./DescriptionDrawer/DescriptionDrawer";
import DrawerAdd from "./AddDrawer/DrawerAdd";
import StatisticsTable from "./StatisticsTable/StatisticsTable";
import { useArticlesWithComments } from "./hooks/useArticlesWithComments";
import { useStatistics } from "./hooks/useStatistics";
import ArticlePage from "./ArticlePage/ArticlePage";
import Spinner from "./Spinner/Spinner";

function App() {
  const [showDescriptionModal, setDescriptionBlog] = React.useState(false);
  const [showAddDrawer, setAddDrawer] = React.useState(false);

  const { articlesWithComments, isLoading } = useArticlesWithComments();
  const statistics = useStatistics(articlesWithComments);

  const openDescriptionBlog = () => {
    setDescriptionBlog(!showDescriptionModal);
  };

  const closeModalWindow = () => {
    setAddDrawer(false);
    setDescriptionBlog(false);
  };

  const openAddDrawer = () => {
    setAddDrawer(!showAddDrawer);
  };

  return (
    <div className={`app ${isLoading ? "loading" : ""}`}>
      {/* Загрузка или ошибка */}
      {isLoading && <Spinner />}
      
      {/* Заголовок */}
      <Header
        openDescriptionBlog={openDescriptionBlog}
        openAddDrawer={openAddDrawer}
      />

      {/* Статистика */}
      <StatisticsTable
        totalArticles={statistics.totalArticles}
        totalCharacters={statistics.totalCharacters}
        totalComments={statistics.totalComments}
      />

      {/* Контент статей */}
      {!isLoading && (
        <div className="articles">
          <ArticlePage articles={articlesWithComments} />
        </div>
      )}

      {/* Модальные окна */}
      {showDescriptionModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionDrawer closeModalWindow={closeModalWindow} />
        </div>
      )}

      {showAddDrawer && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DrawerAdd closeModalWindow={closeModalWindow} />
        </div>
      )}
    </div>
  );
}

export default App;
