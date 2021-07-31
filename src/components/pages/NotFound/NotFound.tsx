import React from "react";
import { usePageTitle } from "../../../hooks/usePageTitle";
import { useNotFoundStyles } from "./useNotFoundStyles";

function NotFound() {
  usePageTitle("صفحه‌ای یافت نشد | فروشگاه اینترنتی دیجیکالا");
  const classes = useNotFoundStyles();
  return <h1 className={classes.title}>صفحه‌ی مورد نظر یافت نشد!</h1>;
}

export default NotFound;
