import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-orange-600">
          My Cooking Blog
        </Link>

        <nav className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="/recipes" className="hover:text-orange-600">Recipes</Link>
        </nav>
      </div>
    </header>
  );
}
