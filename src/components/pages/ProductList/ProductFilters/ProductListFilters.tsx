import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  ISearchProductPayload,
  SortEnum,
} from "../../../../api/search/search-types";
import DBox from "../../../../core/DBox";
import DCheckbox from "../../../../core/DCheckbox";
import useDebounce from "../../../../hooks/useDebounce";
import { mapFormFiltersToSearchPayload } from "../productListUtils";
import { useProductFiltersStyles } from "./useProductFiltersStyles";

export interface IFormFilters {
  q: string;
  has_selling_stock: false;
  sort: SortEnum;
  "price[min]": string;
  "price[max]": string;
}

const filtersInitialValues: IFormFilters = {
  q: "",
  has_selling_stock: false,
  sort: SortEnum.mostRelevant,
  "price[min]": "",
  "price[max]": "",
};

interface IProps {
  isLoading: boolean;
  onFilter: (searchPayload: ISearchProductPayload) => void;
}

function ProductListFilters({ isLoading, onFilter }: IProps) {
  const classes = useProductFiltersStyles();

  const [filters, setFilters] = useState<IFormFilters>(filtersInitialValues);
  const debouncedQuery = useDebounce<string>(filters.q, 500);

  const handleInputChange =
    (key: keyof IFormFilters, forceUpdate = false) =>
    (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setFilters((oldState) => ({
        ...oldState,
        [key]: event.target.value,
      }));
      if (forceUpdate) {
        const searchPayload = mapFormFiltersToSearchPayload({
          ...filters,
          [key]: event.target.value,
        });
        onFilter(searchPayload);
      }
    };

  const handleCheckBoxInputChange =
    (key: keyof IFormFilters) => (event: ChangeEvent<HTMLInputElement>) => {
      setFilters((oldState) => ({
        ...oldState,
        [key]: !!event.target.checked,
      }));
      const searchPayload = mapFormFiltersToSearchPayload({
        ...filters,
        [key]: !!event.target.checked,
      });
      onFilter(searchPayload);
    };

  const getPage = useCallback(
    (page: number = 1) => {
      const searchPayload = mapFormFiltersToSearchPayload(filters);
      searchPayload.page = page;
      searchPayload.q = debouncedQuery;
      onFilter(searchPayload);
    },
    [debouncedQuery, filters, onFilter],
  );

  useEffect(() => {
    getPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  const onEnterHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    getPage();
  };

  return (
    <>
      <DBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.searchInputContainer}
      >
        <input
          placeholder="جستجو در دیجی‌کالا …"
          type="text"
          className={classes.searchInput}
          onChange={handleInputChange("q")}
          value={filters.q}
        />
        <DBox
          mt={1}
          display="flex"
          alignItems="space-between"
          justifyContent="space-between"
          className={classes.maxMinInputsContainer}
        >
          <div>
            <input
              placeholder="حداقل قیمت"
              type="number"
              className={classes.searchInput}
              onChange={handleInputChange("price[min]")}
              value={filters["price[min]"]}
              onKeyDown={onEnterHandler}
            />
          </div>
          <div>
            <input
              placeholder="حداکثر قیمت"
              type="number"
              className={classes.searchInput}
              onChange={handleInputChange("price[max]")}
              value={filters["price[max]"]}
              onKeyDown={onEnterHandler}
            />
          </div>
        </DBox>
        <DBox
          display="flex"
          alignItems="space-between"
          justifyContent="space-between"
          width="100%"
          mb={1.5}
        >
          <DCheckbox
            label="کالاهای موجود"
            onChange={handleCheckBoxInputChange("has_selling_stock")}
            value={filters.has_selling_stock}
          />
          <select
            className={classes.selectBox}
            onChange={handleInputChange("sort", true)}
            value={filters.sort}
          >
            <option value="22">مرتبط‌ترین</option>
            <option value="4">پربازدیدترین</option>
            <option value="27">پیشنهادات خریداران</option>
          </select>
        </DBox>
        <button className={classes.searchButton} onClick={() => getPage()}>
          جستجو
        </button>
      </DBox>
    </>
  );
}

export default ProductListFilters;
