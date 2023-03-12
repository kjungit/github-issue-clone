import styles from "./CreateIssue.module.css";
import cx from "clsx";
import Button from "../components/Button";
import { useRef } from "react";
import TextField from "../components/TextField";
import { useForm } from "../hooks";
import axios from "axios";
import { GITHUB_API } from "../api";
import { useNavigate } from "react-router";

export default function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initaialValues: { title: "", body: "" },
      onSubmit: async () => {
        try {
          const response = await axios.post(
            `${GITHUB_API}/repos/kjungit/github-issue-clone/issues`,
            inputValues,
            {
              headers: {
                Authorization: process.env.REACT_APP_GITHUB_TOKEN,
                "Content-Type": "application/json",
              },
            },
          );
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
      validate,
      onErrors: () => console.log("error"),
      refs: { title: inputRef, body: textareaRef },
      onSuccess: (result) => {
        console.log({ result });
        navigate("/", { replace: true });
      },
    },
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Title"
            value={inputValues.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            ref={textareaRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />

          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{ backgroundColor: "#238636", color: "#fff" }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function validate(values) {
  let errors = {};
  // 입력값이 없으면 errors{title: ""}
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }
  // 입력값이 있으면 빈객체
  return errors;
}
