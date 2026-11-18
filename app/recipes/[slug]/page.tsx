import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllRecipes, getRecipe } from "@/lib/recipes";

// Tells Next.js which recipe pages exist, so it can build them ahead of time
export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) notFound(); // shows a 404 page for addresses that don't match a file

  const { meta, content } = recipe;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">{meta.title}</h1>
      <p className="mt-2 text-gray-600">{meta.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        {meta.prepTime} prep · {meta.cookTime} cook · Serves {meta.servings}
      </p>

      <article className="prose prose-orange mt-10">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
