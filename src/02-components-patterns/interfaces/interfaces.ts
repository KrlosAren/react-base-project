import { ReactElement } from 'react';
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  productName: string;
  productImg?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ productImg }: { productImg?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
