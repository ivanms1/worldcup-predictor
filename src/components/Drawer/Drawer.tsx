import React from "react";
import Modal from "react-modal";
import clsx from "clsx";

import styles from "./Drawer.module.scss";

Modal.setAppElement("#__next");

interface SlideModal extends ReactModal.Props {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  className?: string;
  onClose: () => void;
  styles?: Record<string, string>;
}

const SlideModal: React.FunctionComponent<SlideModal> = ({
  isOpen,
  onClose,
  className,
  styles: customStyles,
  children,
  ...props
}) => {
  return (
    <Modal
      {...props}
      isOpen={isOpen}
      overlayClassName={clsx(customStyles?.Overlay, styles.Overlay)}
      bodyOpenClassName={clsx(customStyles?.ModalBodyOpen, styles.Overlay)}
      className={clsx(styles.Modal, className)}
      closeTimeoutMS={500}
      onRequestClose={onClose}
    >
      <div className={clsx(customStyles?.Content, styles.Content)}>
        {children}
      </div>
    </Modal>
  );
};

export default SlideModal;
