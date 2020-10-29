import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);
  const clearInput = () => setValue('');

  return {
    bind: {
      value,
      onChange,
    },
    clearInput,
  }
};

export default useInput;