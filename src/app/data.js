// data.js

const authors = [
  {
    id: 1,
    name: 'J.K. Rowling',
    bio: 'British author, best known for the Harry Potter series. J.K. Rowling\'s captivating storytelling has enchanted readers worldwide.',
    nationality: 'British',
    birthDate: '1965-07-31',
    books: [1, 2],
  },
  {
    id: 2,
    name: 'J.R.R. Tolkien',
    bio: 'British author and scholar, known for The Hobbit and The Lord of the Rings. Tolkien\'s richly imagined worlds continue to inspire generations of readers.',
    nationality: 'British',
    birthDate: '1892-01-03',
    books: [3, 4],
  },
  {
    id: 3,
    name: 'Moez',
    bio: 'An emerging author specializing in fantasy and adventure. Moez weaves tales of magic, courage, and friendship.',
    nationality: 'Pakistani',
    birthDate: '1980-05-15',
    books: [5],
  },
];

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    authors: [1],
    publishedDate: '1997-06-26',
    genre: 'Fantasy',
    summary: 'Harry Potter discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry. The start of an epic journey.',
  },
  {
    id: 2,
    title: 'Harry Potter and the Chamber of Secrets',
    authors: [1],
    publishedDate: '1998-07-02',
    genre: 'Fantasy',
    summary: 'Harry Potter returns to Hogwarts and faces the mysteries of the Chamber of Secrets. Dark forces threaten the wizarding world.',
  },
  {
    id: 3,
    title: 'The Hobbit',
    authors: [2],
    publishedDate: '1937-09-21',
    genre: 'Fantasy',
    summary: 'Bilbo Baggins embarks on a journey with a group of dwarves to reclaim their lost kingdom. Adventure awaits!',
  },
  {
    id: 4,
    title: 'The Lord of the Rings',
    authors: [2],
    publishedDate: '1954-07-29',
    genre: 'Fantasy',
    summary: 'Frodo Baggins undertakes an epic quest to destroy the One Ring. A tale of bravery, friendship, and sacrifice.',
  },
  {
    id: 5,
    title: 'The Lord of the Rings2',
    authors: [3],
    publishedDate: '2023-09-15',
    genre: 'Fantasy',
    summary: 'A continuation of the legendary Lord of the Rings saga. New heroes rise, and old secrets resurface.',
  },
];

export { books, authors };
