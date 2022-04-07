import { useParams } from "react-router-dom";
import { OrderDetails } from "../components/order-details/order-details";
import { useUserInfo } from "../services/hooks/use-user-info";
import { useWsProfileFeed } from "../services/hooks/use-ws-profile-feed";

export function ProfileFeedDetails() {
  useWsProfileFeed();
  useUserInfo();
  const { id } = useParams<{ id: string }>();
  return <OrderDetails orderId={id} />;
}
