import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link href="/home" className="hover:text-blue-400">Home</Link>
      <Link href="/about" className="hover:text-green-400">About</Link>
    </header>
  );
}
