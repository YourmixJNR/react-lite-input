import { useState, useCallback } from "react";

interface InitialValues {
  [key: string]: string; // Dynamic interface for any string keys
}

export default function useInput(initialValue: InitialValues) {
  const [values, setValues] = useState<InitialValues>(initialValue);

  const handleLiteChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  return { values, handleLiteChange };
}
