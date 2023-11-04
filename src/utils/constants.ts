import { BookCategoryType, BookLanguageType, BookType } from './types';

export const dummy_books: BookType[] = [
  {
    id: 1,
    title: 'Work for Money, Design for Love',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illum, repellat aspernatur impedit nam saepe blanditiis, quam asperiores quis facere unde corporis aliquam, quibusdam officiis laudantium provident id odit dolorum veritatis illo! Doloribus sit maxime facilis, adipisci ullam quae voluptatum et facere amet incidunt voluptate veritatis alias magnam, quam inventore quia dicta numquam ad unde aliquid non. Quidem minima voluptatem asperiores eveniet tenetur, maiores ad mollitia velit. Voluptate, maiores impedit.',
    image: '',
    category: 'Business & Money',
    rating: 5,
    numOfReviews: 3714,
    price: 22.0,
    author: 'John Doe',
    authorDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur facilis adipisci nihil commodi voluptate odio animi incidunt numquam repellendus cum fugiat, aut amet modi esse veritatis earum obcaecati. Repudiandae harum vel sint deleniti perferendis.',
    language: ['English', 'Spanish', 'Portuguese', 'Italian'],
    publicationDate: '23 Nov 2023',
    vendor: 'Thriftbooks',
    countInStock: 6,
  },
  {
    id: 2,
    title: 'Very Nice: A novel Marcy Dermansky',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illum, repellat aspernatur impedit nam saepe blanditiis, quam asperiores quis facere unde corporis aliquam, quibusdam officiis laudantium provident id odit dolorum veritatis illo! Doloribus sit maxime facilis, adipisci ullam quae voluptatum et facere amet incidunt voluptate veritatis alias magnam, quam inventore quia dicta numquam ad unde aliquid non. Quidem minima voluptatem asperiores eveniet tenetur, maiores ad mollitia velit. Voluptate, maiores impedit.',
    image: '',
    category: 'Literature & Fiction',
    rating: 4,
    numOfReviews: 2498,
    price: 18.9,
    author: 'John Doe',
    authorDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur facilis adipisci nihil commodi voluptate odio animi incidunt numquam repellendus cum fugiat, aut amet modi esse veritatis earum obcaecati. Repudiandae harum vel sint deleniti perferendis.',
    language: ['English', 'Spanish', 'Portuguese', 'Italian'],
    publicationDate: '23 Nov 2023',
    vendor: 'Thriftbooks',
    countInStock: 6,
  },
  {
    id: 3,
    title: 'The Psychology of Graphic Design Pricing',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illum, repellat aspernatur impedit nam saepe blanditiis, quam asperiores quis facere unde corporis aliquam, quibusdam officiis laudantium provident id odit dolorum veritatis illo! Doloribus sit maxime facilis, adipisci ullam quae voluptatum et facere amet incidunt voluptate veritatis alias magnam, quam inventore quia dicta numquam ad unde aliquid non. Quidem minima voluptatem asperiores eveniet tenetur, maiores ad mollitia velit. Voluptate, maiores impedit.',
    image: '',
    category: 'Graphic Design',
    rating: 1,
    numOfReviews: 17,
    price: 20.59,
    author: 'John Doe',
    authorDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur facilis adipisci nihil commodi voluptate odio animi incidunt numquam repellendus cum fugiat, aut amet modi esse veritatis earum obcaecati. Repudiandae harum vel sint deleniti perferendis.',
    language: ['English', 'Spanish', 'Portuguese', 'Italian'],
    publicationDate: '23 Nov 2023',
    vendor: 'Thriftbooks',
    countInStock: 6,
  },
  {
    id: 4,
    title: 'Juliet the Maniac: A Novel',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illum, repellat aspernatur impedit nam saepe blanditiis, quam asperiores quis facere unde corporis aliquam, quibusdam officiis laudantium provident id odit dolorum veritatis illo! Doloribus sit maxime facilis, adipisci ullam quae voluptatum et facere amet incidunt voluptate veritatis alias magnam, quam inventore quia dicta numquam ad unde aliquid non. Quidem minima voluptatem asperiores eveniet tenetur, maiores ad mollitia velit. Voluptate, maiores impedit.',
    image: '',
    category: 'Literature & Fiction',
    rating: 3,
    numOfReviews: 554,
    price: 9.99,
    author: 'John Doe',
    authorDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur facilis adipisci nihil commodi voluptate odio animi incidunt numquam repellendus cum fugiat, aut amet modi esse veritatis earum obcaecati. Repudiandae harum vel sint deleniti perferendis.',
    language: ['English', 'Spanish', 'Portuguese', 'Italian'],
    publicationDate: '23 Nov 2023',
    vendor: 'Thriftbooks',
    countInStock: 6,
  },
  {
    id: 5,
    title: 'Logo Design Love: A Guide to Creating Iconic Brand Identities',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illum, repellat aspernatur impedit nam saepe blanditiis, quam asperiores quis facere unde corporis aliquam, quibusdam officiis laudantium provident id odit dolorum veritatis illo! Doloribus sit maxime facilis, adipisci ullam quae voluptatum et facere amet incidunt voluptate veritatis alias magnam, quam inventore quia dicta numquam ad unde aliquid non. Quidem minima voluptatem asperiores eveniet tenetur, maiores ad mollitia velit. Voluptate, maiores impedit.',
    image: '',
    category: 'Graphic Design',
    rating: 5,
    numOfReviews: 185,
    price: 24.91,
    author: 'John Doe',
    authorDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur facilis adipisci nihil commodi voluptate odio animi incidunt numquam repellendus cum fugiat, aut amet modi esse veritatis earum obcaecati. Repudiandae harum vel sint deleniti perferendis.',
    language: ['English', 'Spanish', 'Portuguese', 'Italian'],
    publicationDate: '23 Nov 2023',
    vendor: 'Thriftbooks',
    countInStock: 6,
  },
  {
    id: 6,
    title: 'Thinking with Type, 2nd revised and expanded',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur illum, repellat aspernatur impedit nam saepe blanditiis, quam asperiores quis facere unde corporis aliquam, quibusdam officiis laudantium provident id odit dolorum veritatis illo! Doloribus sit maxime facilis, adipisci ullam quae voluptatum et facere amet incidunt voluptate veritatis alias magnam, quam inventore quia dicta numquam ad unde aliquid non. Quidem minima voluptatem asperiores eveniet tenetur, maiores ad mollitia velit. Voluptate, maiores impedit.',
    image: '',
    category: 'Graphic Design',
    rating: 2,
    numOfReviews: 56,
    price: 12.04,
    author: 'John Doe',
    authorDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur facilis adipisci nihil commodi voluptate odio animi incidunt numquam repellendus cum fugiat, aut amet modi esse veritatis earum obcaecati. Repudiandae harum vel sint deleniti perferendis.',
    language: ['English', 'Spanish', 'Portuguese', 'Italian'],
    publicationDate: '23 Nov 2023',
    vendor: 'Thriftbooks',
    countInStock: 6,
  },
];

export const popularBooks: BookCategoryType[] = [
  {
    id: 1,
    name: 'Biographies & memoirs',
    amount: 55,
  },
  {
    id: 2,
    name: 'Business & Money',
    amount: 39,
  },
  {
    id: 3,
    name: "Children's books",
    amount: 22,
  },
  {
    id: 4,
    name: 'Computers & technology',
    amount: 13,
  },
  {
    id: 5,
    name: 'Parenting & families',
    amount: 7,
  },
];

export const bookLanguages: BookLanguageType[] = [
  {
    id: 1,
    name: 'English',
  },
  {
    id: 2,
    name: 'German',
  },
  {
    id: 3,
    name: 'French',
  },
  {
    id: 4,
    name: 'Spanish',
  },
  {
    id: 5,
    name: 'Turkish',
  },
];
