import clsx from "clsx";
import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import DIcon from "./DIcon";

interface IDButtonProps {
  title: string;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

const useStyles = createUseStyles((theme) => ({
  modalParent: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    height: "0",
    transition: ".5s ease-in-out",
    overflow: "scroll",
  },
  isOpenModalParent: {
    height: "100%",
  },
  modal: {
    margin: "0 auto",
    padding: "1rem 2rem",
    width: "100%",
    maxWidth: "300px",
    fontSize: ".7rem",
    borderRadius: ".4rem",
    backgroundColor: theme.colors.commonWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: ".5s ease-in-out",
    opacity: 0,
    boxShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
  },
  isOpen: {
    margin: "100px auto",
    opacity: 1,
  },
  closeIcon: {
    cursor: "pointer",
    position: "absolute",
    left: ".8rem",
    top: ".8rem",
  },
  modalTitle: {
    fontSize: "1.5rem",
  },
  modalBody: {
    flex: 1,
  },
}));

const DModal: React.FC<IDButtonProps> = ({
  title,
  children,
  isOpen,
  className,
  onClose,
}) => {
  const classes = useStyles();

  const modalParentClasses = clsx(className, classes.modalParent, {
    [classes.isOpenModalParent]: isOpen,
  });

  const modalClasses = clsx(className, classes.modal, {
    [classes.isOpen]: isOpen,
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key === "Escape" && onClose();
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={modalParentClasses} onClick={onClose}>
      <div
        className={modalClasses}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DIcon
          className={classes.closeIcon}
          name="close"
          size="1rem"
          color="commonBlack"
          onClick={onClose}
        />
        <label className={classes.modalTitle}>{title}</label>
        <section className={classes.modalBody}>{children}</section>
      </div>
    </div>
  );
};

export default DModal;
