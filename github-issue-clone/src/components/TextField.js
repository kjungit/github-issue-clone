import cx from "clsx";
import { forwardRef } from "react";
import styles from "./TextField.module.css";

export default forwardRef(function TextField(
  { type = "input", name, placeholder, onChange, value, error },
  ref,
) {
  return type === "input" ? (
    <input
      onChange={onChange}
      value={value}
      name={name}
      ref={ref}
      className={cx(styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
      type="text"
      placeholder={placeholder}
    />
  ) : (
    <textarea
      onChange={onChange}
      value={value}
      name={name}
      ref={ref}
      className={cx(styles.input, styles.textarea, styles.border, {
        [styles.error]: Boolean(error),
      })}
      cols="30"
      rows="10"
      placeholder={placeholder}
    ></textarea>
  );
});

// export default forwardRef(TextField)
