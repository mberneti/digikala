export interface IProduct {
  id: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  status: string; // FIXME: replace with actual status types
  images: {
    main: string;
  };
  price: {
    selling_price: number;
    rrp_price: number;
  };
}

export interface IGetProductDetailsResult {
  product: IProduct;
}
