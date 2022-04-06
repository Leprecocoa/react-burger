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

  const { sliceOfIngredients, restOfIngredients } = useMemo(() => {
    return {
      sliceOfIngredients: orderIngredients.slice(0, 5),
      restOfIngredients: orderIngredients.slice(5),
    };
  }, [orderIngredients]);

  const counts = useMemo(() => {
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

  const total = useMemo(
    () =>
      orderIngredients.reduce((acc, ingredient) => {
        return acc + ingredient.price * counts[ingredient._id];
      }, 0),
    [orderIngredients, counts]
  );

  return { order, orderIngredients, counts, total, sliceOfIngredients, restOfIngredients };
}
