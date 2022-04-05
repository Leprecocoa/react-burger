import { TOrder } from "../../utils/types"
type TOrderStatusProps = {
    status: TOrder["status"]
}
export function OrderStatus({ status }: TOrderStatusProps) {
    switch (status) {
        case "created":
            return <div>Создан</div>
        case "pending":
            return <div>Готовится</div>
        case "done":
            return <div>Выполнен</div>
        default:
            return <div>Неизвестный статус</div>
    }
}