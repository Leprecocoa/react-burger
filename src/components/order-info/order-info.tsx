import { useMemo } from "react";
import { TOrder, useAppSelector } from "../../utils/types";
import { OrderStatus } from "../order-status/order-status";

export function OrderInfo({ order }: { order: TOrder }) {
  const { ingredients } = useAppSelector(({ ingredients: { ingredients } }) => {
    return {
      ingredients,
    };
  });

  const orderIngredients = useMemo(
    () =>
      ingredients.filter((ingredient) =>
        order.ingredients.includes(ingredient._id)
      ),
    [order, ingredients]
  );

  const counts = useMemo(() => {
    return order.ingredients.reduce<{ [key: string]: number }>(
      (acc, ingredientId) => {
        acc[ingredientId] = (acc[ingredientId] || 0) + 1;
        return acc;
      },
      {}
    );
  }, [order]);

  const total = useMemo(
    () =>
      orderIngredients.reduce((acc, ingredient) => {
        return acc + ingredient.price * counts[ingredient._id];
      }, 0),
    [orderIngredients, counts]
  );

  return (
    <div style={{ textAlign: "center" }}>
      <div>{order.number}</div>
      <div>{order.name}</div>
      <div>
        <OrderStatus status={order.status} />
      </div>
      <div>
        <div>Состав:</div>
        <ol>
          {orderIngredients.map((ingredient, index) => (
            <li key={`${ingredient._id}${index}`}>
              {ingredient.name} | {counts[ingredient._id]}*{ingredient.price}
            </li>
          ))}
        </ol>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{order.createdAt}</div>
        <div>{total}</div>
      </div>
    </div>
  );
}
