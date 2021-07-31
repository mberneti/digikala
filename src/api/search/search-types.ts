import { IProduct } from "../product/product-types";

export enum SortEnum {
  mostViews = 4,
  mostRelevant = 22,
  customersRecommendation = 27,
}

export interface ISearchProductPayload {
  page: number;
  rows: number;
  "price[min]"?: number;
  "price[max]"?: number;
  has_selling_stock?: 1;
  sort: SortEnum;
  q: string;
}

interface ISellingOption {
  title: string;
}

interface IFilters {
  has_selling_stock: {
    title: string;
    options: Array<ISellingOption>;
    type: string; // FIXME: replace with actual selling types
  };
  price: {
    title: string;
    options: {
      min: number;
      max: number;
    };
    type: string; // FIXME: replace with actual price types
  };
}

export interface IPager {
  current_page: number;
  total_pages: number;
  total_items: number;
}

export interface ISearchProductItem
  extends Pick<
    IProduct,
    "id" | "title" | "rating" | "status" | "images" | "price"
  > {}

export interface ISearchResultResult {
  filters: IFilters;
  products: Array<ISearchProductItem>;
  pager: IPager;
}
