import { ProductCard } from '../components/';
import { ProductActions } from '../components/ProductActions';
import { ProductImage } from '../components/ProductImg';
import { ProductName } from '../components/ProductName';

const product = {
  id: '1',
  productName: 'Coffee Mug - Card',
  productImg: 'https://dummyimage.com/300x300.png',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title='Product.title' />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductName title='' />
          <ProductActions />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductName title={'Mi Taza favorita'} />
          <ProductActions />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
