import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const DEV_ENV = import.meta.env.DEV;
const PROD_ENV = import.meta.env.PROD;
const API_URL = 'http://localhost:3500/data';
// 'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json';

const fetchData = async () => {
  console.log('DEV_ENV: ', DEV_ENV);
  if (DEV_ENV || PROD_ENV) { // TODO: Current code uses db.json always. Add backend API for this.
    const res = await fetch('/db.json');
    const data = await res.json();
    return data.data;
  }

  const response = await axios.get(API_URL, {
    // responseType: 'json',
    // headers: {
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   'Access-Control-Allow-Origin': '*',
    // },
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
