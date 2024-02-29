import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ListItem, ListingResponse } from '../../types';
import { filterObjects } from '../lib/utils';

const DEV_ENV = import.meta.env.DEV;
const PROD_ENV = import.meta.env.PROD;
const API_URL = 'http://localhost:3500/data';
// 'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json';

export const fetchDataFromJson = async ({ queryKey }): Promise<ListItem[]> => {
  const fetchResult = await fetch('/db.json');
  const response: ListingResponse = await fetchResult.json();
  const filteredResponse: ListItem[] = filterObjects(
    response.data,
    queryKey[1]
  );

  return filteredResponse;
};

// TODO: Current code uses db.json always. Add backend API for this.
const apiData = async (searchParsms: searchParamsProps) => {
  const query = useQuery({
    queryFn: fetchDataFromJson,
    queryKey: ['listingData', searchParsms],
    retry: false,
    refetchInterval: 60 * 10 * 1000,
  });

  return query.data;
};

export function useListingData(
  searchParsms: searchParamsProps,
  api_toggle = false
) {
  const query = useQuery({
    queryFn: fetchDataFromJson,
    queryKey: ['listingData', searchParsms],
    retry: false,
    refetchInterval: 60 * 10 * 1000,
  });

  return query;
}
