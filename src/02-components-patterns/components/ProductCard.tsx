import { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increseBy,
        product,
      }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage productImg={product.productImg} />
      <ProductName productName={product.productName} />
      <ProductActions counter={counter} increseBy={increseBy} /> */}
      </div>
    </Provider>
  );
};

