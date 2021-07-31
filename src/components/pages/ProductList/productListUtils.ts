import { ISearchProductPayload } from "../../../api/search/search-types";
import { DIGIKALA_PRODUCTS_ROWS } from "../../../config";
import { IFormFilters } from "./ProductFilters/ProductListFilters";

export const mapFormFiltersToSearchPayload = (
  filters: IFormFilters,
): ISearchProductPayload => ({
  q: filters.q,
  page: 1,
  rows: DIGIKALA_PRODUCTS_ROWS,
  sort: filters.sort,
  has_selling_stock: filters.has_selling_stock ? 1 : undefined,
  "price[max]": filters["price[max]"]
    ? Number(filters["price[max]"])
    : undefined,
  "price[min]": filters["price[min]"]
    ? Number(filters["price[min]"])
    : undefined,
});
