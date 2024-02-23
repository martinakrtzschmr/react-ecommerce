import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ListingResponse } from '../../types';

const API_URL =
  //'https://jsonplaceholder.typicode.com/posts';
  'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json';

const fetchData = async () => {
  const response = await axios.get(API_URL, {
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return response.data;
};

export function useListingData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['listingData'],
  });

  return query;
}
