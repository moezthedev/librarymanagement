"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import { authors } from '../data';

function Authors() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Authors</h1>
      <ul className="list-disc mt-4 ml-6">
        {authors.map((author) => (
          <AuthorListItem key={author.id} author={author} />
        ))}
      </ul>
    </div>
  );
}

function AuthorListItem({ author }) {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <li>
      <div className="flex flex-col space-y-2">
        <Link href={`/authorsProfile/${author.id}`} className="text-blue-600 hover:underline">
          {author.name}
        </Link>
        <div>
          <span className="font-bold">Nationality:</span> {author.nationality}
        </div>
        <div>
          <span className="font-bold">Birthdate:</span> {new Date(author.birthDate).toLocaleDateString()}
        </div>
        <div>
          <span className="font-bold">Bio:</span> {showFullBio ? author.bio : `${author.bio.substring(0, 50)}...`}
          <button
            onClick={toggleBio}
            className="ml-2 text-blue-600 hover:underline focus:outline-none"
          >
            {showFullBio ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Authors;
