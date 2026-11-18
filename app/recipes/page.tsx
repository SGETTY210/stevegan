import Link from "next/link";
import { getAllRecipes } from "@/lib/recipes";

export default function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">All Recipes</h1>

      <ul className="mt-8 space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link
              href={`/recipes/${recipe.slug}`}
              className="block rounded-lg border border-gray-200 p-5 hover:border-orange-400"
            >
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="mt-1 text-gray-600">{recipe.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                {recipe.prepTime} prep · {recipe.cookTime} cook
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
