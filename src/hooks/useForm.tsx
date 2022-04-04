import { useState } from "react";

const useForm = (
  initialState = { id: "", name: "", weightmetric: "", weightimperial: "" },
  onSubmit: any
) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;
