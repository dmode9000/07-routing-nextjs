"use client";
// Next
import { useRouter } from "next/navigation";
// React
import { useEffect, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
// Styles
import css from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

// Client component
export default function Modal({ children, onClose }: ModalProps) {
  const router = useRouter();
  const closeModal = onClose ? onClose : () => router.back();

  useEffect(() => {
    // closing the modal with the Escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === "Escape") closeModal();
    };
    // add and remove event keydown listener
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  // closing the modal by clicking on the backdrop
  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
}
