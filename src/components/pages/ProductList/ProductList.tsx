import { useEffect, useRef, useState } from "react";
import { ISearchProductPayload } from "../../../api/search/search-types";
import DBox from "../../../core/DBox";
import DLoading from "../../../core/DLoading";
import { usePageTitle } from "../../../hooks/usePageTitle";
import useScroll, { IOnScrollState } from "../../../hooks/useScroll";
import ProductListFilters from "./ProductFilters/ProductListFilters";
import ProductListItem from "./ProductListItem";
import { useProductListStyles } from "./useProductListStyles";
import { useSearchProducts } from "./useSearchProducts";

function ProductList() {
  usePageTitle("محصولات | فروشگاه اینترنتی دیجیکالا");
  const classes = useProductListStyles();

  const scrollRef = useRef<HTMLDivElement>(null);

  const [payload, setPayload] = useState<ISearchProductPayload>();

  const { requestState, loadProducts, loadMore, pagination, products } =
    useSearchProducts();

  const onScroll = ({ isReachedEnd }: IOnScrollState) => {
    if (isLoading) {
      return;
    }
    if (
      payload &&
      isReachedEnd &&
      pagination.current_page < pagination.total_items
    ) {
      loadMore(payload);
    }
  };
  const { handleWheelChange } = useScroll({
    scrollRef,
    scrollOffset: 300,
    onScroll,
  });

  useEffect(() => {
    loadProducts(payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);

  const isLoading = requestState === "loading";

  console.log(products);

  return (
    <div
      ref={scrollRef}
      onTouchMove={handleWheelChange}
      onScroll={handleWheelChange}
      className={classes.productsListScroll}
    >
      <ProductListFilters onFilter={setPayload} isLoading={isLoading} />
      <section className={classes.products}>
        {Object.values(products).map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </section>
      <DBox
        pt={1}
        pb={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <DLoading isLoading={isLoading} />
      </DBox>
    </div>
  );
}

export default ProductList;
