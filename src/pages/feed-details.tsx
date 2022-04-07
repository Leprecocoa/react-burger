import { useParams } from "react-router-dom";
import { OrderDetails } from "../components/order-details/order-details";
import { useWsFeed } from "../services/hooks/use-ws-feed";

export function FeedDetails() {
  useWsFeed();
  const { id } = useParams<{ id: string }>();
  return <OrderDetails orderId={id} />;
}
