// app/layout.js
import Link from 'next/link';
import './globals.css'; 

export const metadata = {
  title: 'My Library App',
  description: 'A simple library application with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
       
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Library App</div>
            <nav className="hidden md:block"> 
              <ul className="flex space-x-6"> 
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="hover:text-blue-600">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link href="/books" className="hover:text-blue-600">
                    Books
                  </Link>
                </li>
              </ul>
            </nav>
           
            <button className="md:hidden text-xl">
              ☰
            </button>
          </div>
        </header>

      
        <main className="container mx-auto p-6 flex-grow">{children}</main>

       
        <footer className="bg-white shadow-md p-4 text-center  bottom-0 w-full">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} My Library App. All rights reserved.</p>
            <p className="text-gray-500">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
