export type BookType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  price: number;
  author: string;
  authorDetails: string;
  language: string[];
  publicationDate: string;
  vendor: string;
  countInStock: number;
};

export type BookCategoryType = {
  id: number;
  name: string;
};

export type CartItemType = {
  book: BookType;
  quantity: number;
  language: string;
};
