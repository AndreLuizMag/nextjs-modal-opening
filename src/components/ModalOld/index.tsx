import { HTMLAttributes, FC, ReactNode } from "react";
import "./style.scss";
import Link from "next/link";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ModalOld: FC<ModalProps> = ({ children }) => {
  return (
    <Link
      href="/"
      className="modal__background width-100 ps-fixed top-0 left-0 ds-flex flow-col-nw justify-start align-center p-block-16 text-decoration-none"
    >
      <div className="modal__content container-md ds-flex-center">
        {children}
      </div>
    </Link>
  );
};

export default ModalOld;
