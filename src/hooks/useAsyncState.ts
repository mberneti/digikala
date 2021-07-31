import { useState } from "react";

export type AsyncState = "init" | "loading" | "loaded";

export const useAsyncState = (defaultValue: AsyncState = "init") => {
  return useState<AsyncState>(defaultValue);
};
