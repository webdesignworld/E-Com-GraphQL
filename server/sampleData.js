
const books = [
  {
    id: '1',
    author: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    description:
      'A novel about the serious issues of rape and racial inequality told through the eyes of young Scout Finch.',
    genre: 'Fiction',
    ISBN: '978-0-06-112008-4',
    status: 'Published',
  },
  {
    id: '2',
    author: 'George Orwell',
    title: '1984',
    description:
      'A dystopian novel set in a totalitarian society under constant surveillance.',
    genre: 'Dystopian Fiction',
    ISBN: '978-0-452-28423-4',
    status: 'Published',
  },
  {
    id: '3',
    author: 'Jane Austen',
    title: 'Pride and Prejudice',
    description:
      'A romantic novel exploring manners, marriage, and morality in early 19th-century England.',
    genre: 'Romantic Fiction',
    ISBN: '978-0-19-953556-9',
    status: 'In Producation',
  },
  {
    id: '4',
    author: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    description:
      'A novel set in the Jazz Age, exploring themes of wealth, class, and the American Dream.',
    genre: 'Classic Fiction',
    ISBN: '978-0-7432-7356-5',
    status: 'Published',
  },
  {
    id: '5',
    author: 'Herman Melville',
    title: 'Moby-Dick',
    description:
      'An epic tale of the quest to capture a legendary white whale, interwoven with themes of fate, revenge, and the sea.',
    genre: 'Adventure Fiction',
    ISBN: '978-0-14-243724-7',
    status: 'Published',
  },
];


const authors = [
  {
    id: '1',
    name: 'Harper Lee',
    email: 'harper.lee@gmail.com',
    phone: '123-456-7890',
  },
  {
    id: '2',
    name: 'George Orwell',
    email: 'george.orwell@gmail.com',
    phone: '234-567-8901',
  },
  {
    id: '3',
    name: 'Jane Austen',
    email: 'jane.austen@gmail.com',
    phone: '345-678-9012',
  },
  {
    id: '4',
    name: 'F. Scott Fitzgerald',
    email: 'scott.fitzgerald@gmail.com',
    phone: '456-789-0123',
  },
  {
    id: '5',
    name: 'Herman Melville',
    email: 'herman.melville@gmail.com',
    phone: '567-890-1234',
  },
];

module.exports = { books, authors };

      