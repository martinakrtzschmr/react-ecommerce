import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardFooter } from './card';

import { ListItem } from '../../../types';

interface ProductCard {
  data: ListItem;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <Link
      href='/'
      className='outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg border-2'
    >
      <Card className='rounded-lg border-2'>
        <CardContent className='pt-4'>
          <div className='aspect-square relative bg-foreground/5 dark:bg-backgrond rounded-lg'>
            <image
              href={data.ThumbnailURL}
              className='aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105'
            />
          </div>
        </CardContent>
        <CardFooter className='flex-col items-start'>
          <div>
            <p className='font-semibold text-lg'>{data.Location}</p>
            <p className='text-sm text-primary/80'>{data.DateListed}</p>
          </div>
          <div className='flex items-center justify-between'>{data?.SalePrice}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
