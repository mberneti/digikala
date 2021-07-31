import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { IColor } from "../theme/colors";

interface IDIconProps {
  name: string;
  size: string;
  color: IColor;
  weight?: string;
  className?: string;
  onClick?: () => void;
}

const useStyles = createUseStyles((theme) => ({
  iconContainer: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: ({ color, size, weight }: IDIconProps) => ({
    color: theme.colors[color],
    fontSize: size,
    fontWeight: weight || "normal",
  }),
}));

const DIcon: React.FC<IDIconProps> = (props) => {
  const classes = useStyles(props);

  const fontIconClassName = `icon-${props.name}`;

  const iconClasses = clsx(props.className, fontIconClassName, classes.icon);

  return (
    <div className={classes.iconContainer} onClick={props.onClick}>
      <span className={iconClasses} />
    </div>
  );
};

export default DIcon;
