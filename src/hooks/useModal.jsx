import { useCallback, useState } from "react";

const defineInitialState = (defaultValue) => {
  if (typeof defaultValue === "boolean") {
    return false;
  }

  return true;
};

export default function useModal(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defineInitialState(defaultValue));

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { isOpen, open, close };
}
