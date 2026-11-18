import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">My Cooking Blog</h1>
      <p className="mt-4 text-lg text-gray-600">
        Recipes I love to cook and share.
      </p>

      <Link
        href="/recipes"
        className="mt-8 inline-block rounded bg-orange-600 px-5 py-3 text-white hover:bg-orange-700"
      >
        Browse recipes
      </Link>
    </main>
  );
}
