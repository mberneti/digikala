import React, { ChangeEvent } from "react";
import { createUseStyles } from "react-jss";
import DIcon from "./DIcon";

interface IDIconProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: boolean;
}

const useStyles = createUseStyles((theme) => ({
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
    height: "2.5rem",
    position: "relative",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    cursor: "pointer",
    "& > input": {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      height: 0,
      width: 0,
    },
    "& > input:not(:checked) ~ $checkmark > *": {
      opacity: 0,
    },
  },
  checkmark: {
    marginRight: ".5rem",
    borderRadius: ".25rem",
    backgroundColor: `${theme.colors.errorLight}`,
    padding: 2,
  },
}));

const DCheckbox: React.FC<IDIconProps> = (props) => {
  const classes = useStyles();
  return (
    <label className={classes.checkBoxContainer}>
      {props.label}
      <input type="checkbox" onChange={props.onChange} checked={props.value} />
      <span className={classes.checkmark}>
        <DIcon name="check" size="16px" color="errorMain" />
      </span>
    </label>
  );
};

export default DCheckbox;
