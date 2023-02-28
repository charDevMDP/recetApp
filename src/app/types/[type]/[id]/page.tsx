import Image from "next/image";
import Link from "next/link";

async function getRecipeDetails(id:number) {
  // await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
}

export default async function Page({ params }:any) {
  const recipeDetails = await getRecipeDetails(params.id);
  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
    .filter(Boolean);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="p-5">
        <Image
          alt="Recipe"
          width={500}
          height={500}
          src={details.strMealThumb}
          className="rounded-lg"
        />
      </div>
      <div className="p-5">
        <h1 className="text-center md:text-left pb-5 md:pb-0">
          Nombre de la Receta:{" "}
          <span className="font-bold text-md">{details.strMeal}</span>
        </h1>

        <div className="tags mt-3">
          <p className="mb-3">Lista Ingredientes:</p>
          {ingredients.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-500 text-white px-2 py-1 inline-block rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="bg-red-500 mt-3 px-4 py-2 cursor-pointer text-white w-full md:w-40 text-center rounded-md hover:bg-opacity-50">
          <Link 
            target="_blank"
            rel="noreferrer" 
            href={details.strYoutube}
          >
            Ver Video Tutorial
          </Link>
        </div>
      </div>
    </div>
  );
}