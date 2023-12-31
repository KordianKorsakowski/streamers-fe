import { useState } from 'react';
import { createContainer } from 'unstated-next';
interface SnackBarInterface {
  text: string;
  type: 'success' | 'info' | 'error';
}

const SnackbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState<SnackBarInterface>();
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const setSnackbar = (data: SnackBarInterface) => {
    setInfo({ text: data.text, type: data.type });
    onOpen();
  };
  return {
    isOpen,
    onOpen,
    onClose,
    setSnackbar,
    info,
  };
};

const useSnackbarContainer = createContainer(SnackbarContainer);
export const useSnackbar = useSnackbarContainer.useContainer;
export const SnackbarProvider = useSnackbarContainer.Provider;
