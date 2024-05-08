import { authors, books } from "../../data";

export default function AuthorProfile({ params }) {
  const { id } = params;

  const author = authors.find((a) => a.id === parseInt(id));
  if (!author) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>Author not found</p>
      </div>
    );
  }

  const authorBooks = books.filter((book) =>
    book.authors.includes(parseInt(id))
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 mb-4">
        <img
          src={author.profilePicture || "/default-profile.png"}
          alt={`Profile picture of ${author.name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold">Author: {author.name}</h1>

      <div className="mt-4">
        <span className="font-bold">Nationality:</span> {author.nationality}
      </div>
      <div>
        <span className="font-bold">Birthdate:</span> {new Date(author.birthDate).toLocaleDateString()}
      </div>
      <div>
        <span className="font-bold">Biography:</span> {author.bio}
      </div>

      <h2 className="text-xl font-bold mt-6">Books by {author.name}</h2>
      <ul className="list-disc mt-2 text-center">
        {authorBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
