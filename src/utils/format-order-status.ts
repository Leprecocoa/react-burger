import { TOrder } from "./types";

export function formatOrderStatus(status: TOrder["status"]) {
  switch (status) {
    case "created":
      return "Создан";
    case "pending":
      return "Готовится";
    case "done":
      return "Выполнен";
    default:
      return "Неизвестный статус";
  }
}
