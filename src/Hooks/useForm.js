import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, SetFormState] = useState(initialState);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    SetFormState(initialState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
