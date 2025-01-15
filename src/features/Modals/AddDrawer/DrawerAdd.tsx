import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { articleValidationSchema } from "../../../utils/validationSchemas";
import { OutgoingArticle } from "../../../models/ArticleTypes";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import { useAddArticleMutation } from "../../../services/api";
import Spinner from "../../../components/Spinner/Spinner";
import ErrorModal from "../../../components/ErrorDrawer/ErrorDrawer";
import DynamicButton from "../../../components/DynamicButton/DynamicButton";
import { DrawerAddProps } from "../../../models/ModalTemplateProps";
import styles from "./DrawerAdd.module.scss";

const DrawerAdd: React.FC<DrawerAddProps> = ({ closeModalWindow }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const [addArticle, { isLoading, isError }] = useAddArticleMutation();

  const handleSubmit = async (values: OutgoingArticle) => {
    try {
      await addArticle({
        ...values,
        createdAt: new Date().toISOString(),
      }).unwrap();
      closeModalWindow();
    } catch {
      console.error("Ошибка при добавлении статьи");
    }
  };

  return (
    <ModalTemplate closeModalWindow={closeModalWindow} drawerRef={drawerRef}>
      <h2 className={styles.title}>Добавление статьи в блог</h2>

      <Formik
        initialValues={{ author: "", title: "", content: "", createdAt: "" }}
        validationSchema={articleValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="author" className={styles.label}>
                Автор статьи
              </label>
              <Field
                type="text"
                id="author"
                name="author"
                className={styles.inputText}
                placeholder="Введите имя автора"
              />
              <ErrorMessage
                name="author"
                render={(msg) => <p className={styles.error}>{msg}</p>}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.label}>
                Название статьи
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className={styles.inputText}
                placeholder="Введите название статьи"
              />
              <ErrorMessage
                name="title"
                render={(msg) => <p className={styles.error}>{msg}</p>}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="content" className={styles.label}>
                Текст статьи
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                className={styles.textarea}
                rows={7}
                placeholder="Введите текст статьи"
              />
              <ErrorMessage
                name="content"
                render={(msg) => <p className={styles.error}>{msg}</p>}
              />
            </div>
            {/* окно с ошибкой */}
            {isError && <ErrorModal onClose={closeModalWindow} />}

            <div className={styles.formActions}>
              <DynamicButton label={"Добавить статью"} onClick={() => {}} />
              <DynamicButton label="Отменить" onClick={closeModalWindow} />
            </div>
            {/* окно с загрузкой */}
            {(isLoading || isSubmitting) && <Spinner />}
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  );
};

export default DrawerAdd;
