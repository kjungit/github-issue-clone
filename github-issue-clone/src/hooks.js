import { useState } from "react";

export function useForm({
  initaialValues,
  validate,
  refs,
  onSuccess, // 성공
  onErrors, // 애러
  onSubmit, // 값이 전달될 때 어떤 함수/ 네트워크를 호출해?
}) {
  const [inputValues, setInputValues] = useState(initaialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult);
    // const refs = { title: inputRef, body: textareaRef };
    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);
      onErrors();
      refs[key].current.focus();
      // ref control
      setIsSubmitting(false);
      return;
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (error) {
        onErrors();
      }
      return;
    }
  }

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
}
