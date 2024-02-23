import ProductCard from '../ui/ProductCard';
import { ListProps } from '../../../types';

const ProductList: React.FC<ListProps> = ({ items }) => {
  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <ProductCard key={item.Id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
