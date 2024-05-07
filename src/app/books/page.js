// pages/index.js
import Link from 'next/link';
import {books,authors} from "../data"
function Books() {


  
  
  const getAuthorName = (authorId) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : 'Unknown Author';
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Books</h1>
      <table className="min-w-full mt-4 bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Authors</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
           <tr key={book.id}>
           <td className="p-2 border">{book.title}</td>
           <td className="p-2 border">
             {book.authors.map((authorId) => (
               <a key={authorId} href={`/authorsProfile/${authorId}`}>
                 <p className="text-blue-600 hover:underline">{getAuthorName(authorId)}</p> 
               </a>
             ))}
           </td>
         </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
