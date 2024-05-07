// authors.js
import Link from 'next/link';
import {authors} from "../data"
function Authors() {

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Authors</h1>
      <ul className="list-disc mt-4 ml-6">
      {authors.map((author) => (
  <li key={author.id}>
    
    <a href={`/authors/${author.id}`} className="text-blue-600 hover:underline">
      {author.name}
    </a>
  </li>
))}
      </ul>
    </div>
  );
}

export default Authors;
