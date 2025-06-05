import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuth = true;
  useEffect(() => {
    if (!isAuth) {
      const timer = setTimeout(() => {
        router.replace("/auth");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isAuth, router]);
  if (!isAuth) return null;
  return <>{children}</>;
}
