import { ReactNode, RefObject } from 'react';
export default interface ModalTemplateProps {
  drawerRef: RefObject<HTMLDivElement>;
  closeModalWindow: () => void;
  children: ReactNode;
}