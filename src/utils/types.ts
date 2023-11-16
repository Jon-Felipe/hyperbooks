export type BookType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  numOfReviews: number;
  price: number;
  author: string;
  language: string[];
  publisher: string;
  publicationDate: string;
  publicationCityCountry: string;
  vendor: string;
  countInStock: number;
  format: string;
  dimensions: string;
};

export type BookCategoryType = {
  id: number;
  name: string;
  amount: number;
};

export type BookLanguageType = {
  id: number;
  language: string;
};

export type CartItemType = {
  book: BookType;
  quantity: number;
  language: string;
};
