import { ProfileFeedPage } from "../components/profile-feed-page/profile-feed-page";
import { useUserInfo } from "../services/hooks/use-user-info";

export function ProfileFeed() {
  useUserInfo();
  return <ProfileFeedPage />;
}
