import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductActions } from './ProductActions';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImg';
import { ProductName } from './ProductName';
export { ProductActions } from './ProductActions';
// export { ProductCard } from './ProductCard';
export { ProductImage } from './ProductImg';
export { ProductName } from './ProductName';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductName,
  Buttons: ProductActions,
});

export default ProductCard;
