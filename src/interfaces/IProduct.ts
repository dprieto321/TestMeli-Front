export interface IProduct {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ProductListProps {
  products: IProduct[];
}

export interface ProductCardProps {
    product: IProduct;
  }