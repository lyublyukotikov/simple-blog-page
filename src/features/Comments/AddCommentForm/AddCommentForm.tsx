import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DynamicButton from "../../../components/DynamicButton/DynamicButton";
import { commentValidationSchema } from "../../../utils/validationSchemas";
import styles from "../CommentSection/CommentSection.module.scss";

interface AddCommentFormProps {
  onSubmit: (values: { username: string; newComment: string }) => Promise<void>;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", newComment: "" }}
      validationSchema={commentValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.addComment}>
          <div className={styles.inputContainer}>
            <Field
              type="text"
              name="username"
              placeholder="Ваше имя..."
              className={styles.inputField}
            />
            <ErrorMessage
              name="username"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.inputContainer}>
            <Field
              type="text"
              name="newComment"
              placeholder="Напишите комментарий..."
              className={styles.inputField}
            />
            <ErrorMessage
              name="newComment"
              component="div"
              className={styles.error}
            />
          </div>

          <DynamicButton
            label={isSubmitting ? "Добавление..." : "Добавить"}
            onClick={() => {}}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddCommentForm;
