import {
  isToday,
  isYesterday,
  formatDistanceToNowStrict,
  format,
} from "date-fns";
import { ru } from "date-fns/locale";

export function formatOrderDate(date: string) {
  const orderDate = new Date(date);
  const pieces = [
    isToday(orderDate)
      ? "Сегодня"
      : isYesterday(orderDate)
      ? "Вчера"
      : formatDistanceToNowStrict(orderDate, {
          locale: ru,
          addSuffix: true,
        }),
    format(orderDate, "HH:mm 'i-'O"),
  ];
  return pieces.join(", ");
}
