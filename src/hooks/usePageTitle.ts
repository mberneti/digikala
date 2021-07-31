import { useEffect } from "react";

const setPageTitle = (pageTitle?: string) => {
  if (pageTitle) {
    document.title = pageTitle;
  }
};

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    setPageTitle(pageTitle);
  }, [pageTitle]);

  return { setPageTitle };
}
