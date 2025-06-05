import { Slot } from "expo-router";
import RouteGuard from "./(tabs)/RouteGuard";

export default function RootLayout() {
  return (
    <RouteGuard>
      <Slot />
    </RouteGuard>
  );
}
