// app/authors/[id]/page.js
import { authors, books } from "../../data";

export default  function AuthorProfile({ params }) {
  const { id } = params;
console.log(id)
  const author = authors.find((a) => a.id === parseInt(id));
  if (!author) {
    return <p>Author not found</p>;
  }

  const authorBooks = books.filter((book) =>
    book.authors.includes(parseInt(id))
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{author.name}'s Books</h1>
      <ul className="list-disc mt-4 ml-6">
        {authorBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
