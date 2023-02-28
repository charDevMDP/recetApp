import React from "react";
import Image from "next/image";
import Link from "next/link";


const RecipeList = ({ recipes, type }:any) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5 overflow-y-auto server">
      {recipes?.map((recipe:any, idx:any) => {
        return (
          <div
            className="rounded bg-gray-200 overflow-hidden"
            key={idx}
          >
            <div className="flex justify-center py-2">
            <span className="font-bold text-lg text-center">{recipe.strMeal}</span>
            </div>

            <Image
              alt="Recipe"
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className="w-full"
            />
              <div className="flex justify-center items-center py-5">
                <Link href={`/types/${type}/${recipe.idMeal}`}>
                  <button className="text-white bg-black rounded py-1 px-3 hover:bg-gray-600">
                    Ver receta
                  </button>
                </Link>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
