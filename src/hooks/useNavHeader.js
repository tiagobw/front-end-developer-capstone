import { useState } from 'react';

export const useNavHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleIsVisible(isVisible) {
    setIsVisible(isVisible);
  }

  return {
    isVisible,
    handleIsVisible,
  };
};
