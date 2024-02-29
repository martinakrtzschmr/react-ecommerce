export interface ListItem {
  id: number;
  dateListed: string;
  title: string;
  tescription: string;
  salePrice: number;
  thumbnailURL: string;
  pictureURL: string;
  location: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  yearBuilt: number;
}

export interface ListProps {
  items?: ListItem[];
}

export interface ListingResponse {
  data: ListItem[];
}