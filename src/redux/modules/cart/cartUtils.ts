import { IProduct } from "../../../api/product/product-types";
import { ISearchProductItem } from "../../../api/search/search-types";
import { ICartProduct, ICartProductsState } from "./cartType";

export const mapProductToCartItem = ({
  id,
  title,
  images,
  price,
}: IProduct | ISearchProductItem): ICartProduct => ({
  id,
  title,
  image: images.main,
  price: price.selling_price,
  quantity: 1,
});

export const getCartTotalPrice = (cartProducts: ICartProductsState): number =>
  Object.values(cartProducts).reduce((total, current) => {
    total += current.quantity * current.price;
    return total;
  }, 0);

export const getCartTotalProducts = (
  cartProducts: ICartProductsState,
): number =>
  Object.values(cartProducts).reduce((total, current) => {
    total += current.quantity;
    return total;
  }, 0);
