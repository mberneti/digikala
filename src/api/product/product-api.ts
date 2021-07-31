import { CancelToken } from "axios";
import { axiosInstance, filterResponse } from "../axios-instance";
import { IGetProductDetailsResult } from "./product-types";

export const getProductDetails = async (
  productId: number,
  cancelToken: CancelToken,
): Promise<IGetProductDetailsResult> => {
  return await axiosInstance
    .get(`product/${productId}/`, { cancelToken })
    .then(filterResponse);
};
