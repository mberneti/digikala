import React from "react";
import { createUseStyles } from "react-jss";

interface IDButtonProps {
  onClick?: () => void;
  className?: string;
}

const useStyles = createUseStyles((theme) => ({
  button: {
    cursor: "pointer",
    fontSize: ".7rem",
    textDecoration: "unset",
    padding: "0 12px",
    borderRadius: "2rem",
    color: theme.colors.commonWhite,
    backgroundColor: theme.colors.commonBlack,
    fontWeight: "bold",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const DButton: React.FC<IDButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <span onClick={props.onClick} className={classes.button}>
      {props.children}
    </span>
  );
};

export default DButton;
