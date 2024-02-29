import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardFooter } from '../ui/card';
import { ListItem } from '../../../types';

interface ProductCard {
  data: ListItem;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <Link href='/'>
      <Card className='rounded-none border-2'>
        <CardContent className='pt-4'>
          <div className='aspect-square relative bg-foreground/5 dark:bg-backgrond'>
            <img
              src={data.pictureURL}
              className='aspect-square object-cover transition-all duration-300 hover:scale-105'
              loading='lazy'
              height={350}
              width={350}
            />
          </div>
        </CardContent>
        <CardFooter className='flex-col items-start'>
          <div>
            <p className='font-semibold text-lg'>{data.title}</p>
            <p className='font-semibold text-lg'>{data.location}</p>
            <p className='text-sm text-primary/80'>{data.dateListed}</p>
            <p className='text-sm text-primary/80'>
              {data.salePrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <p className='text-sm text-primary/80'>
              Bathrooms: {data.bathrooms}
            </p>
            <p className='text-sm text-primary/80'>
              Bedrooms: {data.bathrooms}
            </p>
          </div>
          <div className='flex items-center justify-between'></div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
