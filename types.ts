export interface ListItem {
  // userId: number,
  // id: number,
  // title: string,
  // body: string
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  SalePrice: number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

export interface ListProps {
  items: ListItem[];
}

export interface ListingResponse {
  data: ListItem[];
}