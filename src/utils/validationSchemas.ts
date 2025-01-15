import * as Yup from "yup";

export const articleValidationSchema = Yup.object({
  author: Yup.string()
    .required("Имя автора обязательно")
    .min(2, "Имя должно содержать не менее 2 символов")
    .max(20, "Имя должно содержать не более 20 символов"),
  title: Yup.string()
    .required("Название статьи обязательно")
    .min(5, "Название должно содержать не менее 5 символов")
    .max(50, "Название должно содержать не более 50 символов"),
  content: Yup.string()
    .required("Текст статьи обязателен")
    .min(10, "Текст статьи должен содержать не менее 50 символов"),
});

export const commentValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "не менее 3 символов")
    .max(50, "много символов ай-ай-ай")
    .required("Введите ваше имя"),
  newComment: Yup.string()
    .min(5, "не менее 5 символов")
    .required("Введите комментарий")
    .max(200, "много символов ай-ай-ай")
});