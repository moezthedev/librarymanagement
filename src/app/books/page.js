import Link from 'next/link';
import { books, authors } from '../data';

function Books() {
  const getAuthorName = (authorId) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : 'Unknown Author';
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Books</h1>
      <div className="overflow-x-auto"> 
        <table className="w-full mt-4 bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Authors</th>
              <th className="p-2 border">Published Date</th>
              <th className="p-2 border">Genre</th>
             
              <th className="p-2 border hidden md:table-cell">Summary</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-100">
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">
                  {book.authors.map((authorId) => (
                    <Link key={authorId} href={`/authorsProfile/${authorId}`}>
                      <span className="text-blue-600 hover:underline">{getAuthorName(authorId)}</span>
                    </Link>
                  ))}
                </td>
                <td className="p-2 border">{new Date(book.publishedDate).toLocaleDateString()}</td>
                <td className="p-2 border">{book.genre}</td>
               
                <td className="p-2 border hidden md:table-cell">
                  {book.summary.length > 50 ? `${book.summary.substring(0, 50)}...` : book.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Books;
