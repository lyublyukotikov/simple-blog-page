import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import DescriptionDrawer from "./features/Modals/DescriptionDrawer/DescriptionDrawer";
import DrawerAdd from "./features/Modals/AddDrawer/DrawerAdd";
import StatisticsTable from "./features/Statistics/StatisticsTable/StatisticsTable";
import { useArticlesWithComments } from "./hooks/useArticlesWithComments";
import { useStatistics } from "./hooks/useStatistics";
import ArticlePage from "./features/Articles/ArticlePage/ArticlePage";
import Spinner from "./components/Spinner/Spinner";

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
    <Router basename="/simple-blog-page">
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
        <Routes>
          {/* Страница со статьями */}
          <Route
            path="/"
            element={
              !isLoading && (
                <div className="articles">
                  <ArticlePage articles={articlesWithComments} />
                </div>
              )
            }
          />

          <Route
            path="/add-article"
            element={
              <div className="add-article">
                <DrawerAdd closeModalWindow={closeModalWindow} />
              </div>
            }
          />
        </Routes>

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
    </Router>
  );
}

export default App;
