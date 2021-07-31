import { filterResponse } from "../axios-instance";
import { axiosInstance } from "../axios-instance";
import { ISearchProductPayload, ISearchResultResult } from "./search-types";
import qs from "query-string";
import { CancelToken } from "axios";

export const searchProducts = async (
  searchPayload: Partial<ISearchProductPayload>,
  cancelToken: CancelToken,
): Promise<ISearchResultResult> => {
  return await axiosInstance
    .get("search/?" + qs.stringify(searchPayload), {
      cancelToken,
    })
    .then(filterResponse);
};
