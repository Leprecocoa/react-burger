import { useMemo } from "react";
import { useAppSelector } from "../../utils/types";

export function useOrderData(orderId: string) {
  const { order, ingredients } = useAppSelector(
    ({ orders: { orders }, ingredients: { ingredients } }) => {
      return {
        ingredients,
        order: orders[orderId],
      };
    }
  );

  const orderIngredients = useMemo(
    () =>
      ingredients.filter((ingredient) =>
        order ? order.ingredients.includes(ingredient._id) : false
      ),
    [order, ingredients]
  );

  const { orderIngredientsSlice, orderIngredientsRest } = useMemo(() => {
    return {
      orderIngredientsSlice: orderIngredients.slice(0, 5),
      orderIngredientsRest: orderIngredients.slice(5),
    };
  }, [orderIngredients]);

  const orderIngredientCounts = useMemo(() => {
    return order
      ? order.ingredients.reduce<{ [key: string]: number }>(
          (acc, ingredientId) => {
            acc[ingredientId] = (acc[ingredientId] || 0) + 1;
            return acc;
          },
          {}
        )
      : {};
  }, [order]);

  const orderTotal = useMemo(
    () =>
      orderIngredients.reduce((acc, ingredient) => {
        return acc + ingredient.price * orderIngredientCounts[ingredient._id];
      }, 0),
    [orderIngredients, orderIngredientCounts]
  );

  return { order, orderIngredients, orderIngredientCounts, orderTotal, orderIngredientsSlice, orderIngredientsRest };
}
