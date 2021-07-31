import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { IColor } from "../theme/colors";
import * as CSS from "csstype";

interface IDBoxProps
  extends Pick<
    CSS.StandardLonghandProperties,
    | "cursor"
    | "flexGrow"
    | "width"
    | "height"
    | "fontSize"
    | "display"
    | "alignItems"
    | "justifyContent"
    | "flexDirection"
    | "position"
  > {
  bgColor?: IColor;
  color?: IColor;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  className?: string;
  flex?: CSS.Property.Flex;
  onClick?: () => void;
}

const useStyles = createUseStyles((theme) => ({
  box: (props: IDBoxProps) => ({
    flex: props.flex,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
    color: props.color && theme.colors[props.color],
    backgroundColor: props.bgColor && theme.colors[props.bgColor],
    position: props.position,
    display: props.display,
    flexDirection: props.flexDirection,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    marginTop: props.mt && `${props.mt}rem`,
    marginRight: props.mr && `${props.mr}rem`,
    marginBottom: props.mb && `${props.mb}rem`,
    marginLeft: props.ml && `${props.ml}rem`,
    paddingTop: props.pt && `${props.pt}rem`,
    paddingRight: props.pr && `${props.pr}rem`,
    paddingBottom: props.pb && `${props.pb}rem`,
    paddingLeft: props.pl && `${props.pl}rem`,
  }),
}));

const DBox: React.FC<IDBoxProps> = ({ children, ...props }) => {
  const classes = useStyles(props);
  const boxClasses = clsx(props.className, classes.box);

  return (
    <div className={boxClasses} onClick={props.onClick}>
      {children}
    </div>
  );
};

export default DBox;
