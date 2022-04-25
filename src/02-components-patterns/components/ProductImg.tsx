import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ productImg = '' }) => {
  const { product } = useContext(ProductContext);
  let imgToShow = '';

  if (productImg) {
    imgToShow = productImg;
  } else if (product.productImg) {
    imgToShow = product.productImg;
  } else {
    imgToShow = noImage;
  }

  return <img className={styles.productImg} src={imgToShow} alt='coffe mug' />;
};
