import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { IColor } from "../theme/colors";

interface IDIconProps {
  isLoading: boolean;
  bgColor?: IColor;
  color?: IColor;
  className?: string;
}

const useStyles = createUseStyles((theme) => ({
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  loading: ({
    bgColor = "grayscaleBackground",
    color = "errorMain",
  }: IDIconProps) => ({
    border: `3px solid ${theme.colors[bgColor]}`,
    "border-top": `3px solid ${theme.colors[color]}`,
    "border-right": `3px solid ${theme.colors[color]}`,
    "border-radius": "50%",
    width: "24px",
    height: "24px",
    animation: "$spin 0.75s linear infinite",
    display: "block",
  }),
  deactive: {
    transition: ".2s ease-out",
    opacity: 0,
    transform: "translateY(0)",
  },
  active: {
    transform: "translateY(10px)",
    opacity: 1,
  },
}));

const DLoading: React.FC<IDIconProps> = (props) => {
  const classes = useStyles(props);
  const loadingContainerClasses = clsx(classes.deactive, {
    [classes.active]: props.isLoading,
  });
  return (
    <div className={loadingContainerClasses}>
      <div className={classes.loading} />
    </div>
  );
};

export default DLoading;
