import React from "react";

//components
import RecipeList from "../../components/RecipeList";

async function getRecipes(type = "spanish") {

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const response = await res.json();
  return response;
}

export default async function RecipeListContainer({ params }:any) {
  const recipes = await getRecipes(params.type);

  return <RecipeList recipes={recipes.meals} type={params.type || ""} />;
}