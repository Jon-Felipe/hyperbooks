import { BookCategoryType, BookType } from './types';

export const dummy_books: BookType[] = [
  {
    id: 1,
    title: 'Work for Money, Design for Love',
    image: '',
    category: 'Business & Money',
    rating: 5,
    price: 22.0,
  },
  {
    id: 2,
    title: 'Very Nice: A novel Marcy Dermansky',
    image: '',
    category: 'Literature & Fiction',
    rating: 4,
    price: 18.9,
  },
  {
    id: 3,
    title: 'The Psychology of Graphic Design Pricing',
    image: '',
    category: 'Graphic Design',
    rating: 1,
    price: 20.59,
  },
  {
    id: 4,
    title: 'Juliet the Maniac: A Novel',
    image: '',
    category: 'Literature & Fiction',
    rating: 3,
    price: 9.99,
  },
  {
    id: 5,
    title: 'Logo Design Love: A Guide to Creating Iconic Brand Identities',
    image: '',
    category: 'Graphic Design',
    rating: 5,
    price: 24.91,
  },
  {
    id: 6,
    title: 'Thinking with Type, 2nd revised and expanded',
    image: '',
    category: 'Graphic Design',
    rating: 2,
    price: 12.04,
  },
];

export const popularBooks: BookCategoryType[] = [
  {
    id: 1,
    name: 'Biographies & memoirs',
  },
  {
    id: 2,
    name: 'Business & Money',
  },
  {
    id: 3,
    name: "Children's books",
  },
  {
    id: 4,
    name: 'Computers & technology',
  },
  {
    id: 5,
    name: 'Parenting & families',
  },
];

export const fictionBooks: BookCategoryType[] = [
  {
    id: 1,
    name: 'Adult',
  },
  {
    id: 2,
    name: "Children's & Young",
  },
  {
    id: 3,
    name: 'General Fiction',
  },
  {
    id: 4,
    name: 'Literature & Fiction',
  },
];

export const nonFictionBooks: BookCategoryType[] = [
  {
    id: 1,
    name: 'Archaeology',
  },
  {
    id: 2,
    name: 'Architecture',
  },
  {
    id: 3,
    name: 'Business & Economics',
  },
  {
    id: 4,
    name: 'Politics & Social Sciences',
  },
  {
    id: 5,
    name: 'Current Events',
  },
  {
    id: 6,
    name: 'Self-Help',
  },
  {
    id: 7,
    name: 'Humor & Entertainment',
  },
];
