import { useState } from "react";

export default function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const clear = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    clear,
  };
}
