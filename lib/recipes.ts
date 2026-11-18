import fs from "fs";
import path from "path";
import matter from "gray-matter";

const recipesFolder = path.join(process.cwd(), "content");

export type RecipeMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  prepTime: string;
  cookTime: string;
  servings: number;
};

// Every recipe's info, newest first (for the list page)
export function getAllRecipes(): RecipeMeta[] {
  const files = fs.readdirSync(recipesFolder).filter((f) => f.endsWith(".mdx"));

  const recipes = files.map((file) => {
    const raw = fs.readFileSync(path.join(recipesFolder, file), "utf8");
    const { data } = matter(raw);
    return { slug: file.replace(".mdx", ""), ...data } as RecipeMeta;
  });

  return recipes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// One recipe's info plus its text (for the recipe page)
export function getRecipe(slug: string) {
  const filePath = path.join(recipesFolder, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { meta: { slug, ...data } as RecipeMeta, content };
}
