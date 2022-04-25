import { useState } from 'react';

const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increseBy,
  };
};

export default useProduct;
