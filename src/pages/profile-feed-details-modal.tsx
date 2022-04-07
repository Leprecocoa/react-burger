import { OrderInfoModal } from "../components/order-info-modal/order-info-modal";
import { useUserInfo } from "../services/hooks/use-user-info";

export function ProfileFeedDetailsModal() {
  useUserInfo();
  return <OrderInfoModal />;
}
