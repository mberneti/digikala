export interface ICartProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface ICartProductsState {
  [productId: string]: ICartProduct;
}

export interface ICartState {
  version: string;
  products: ICartProductsState;
}
