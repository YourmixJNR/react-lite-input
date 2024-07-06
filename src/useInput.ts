import { useState, useCallback } from "react";

interface InitialValues {
  [key: string]: string; // Dynamic interface for any string keys
}

export default function useInput(initialValue: InitialValues) {
  const [values, setValues] = useState<InitialValues>(initialValue);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  return { values, handleChange };
}
