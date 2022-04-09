import { useTokenStore } from "@/stores/token";

export default function isLog() {
  const store = useTokenStore();
  return store.token === "" ? false : store.token;
}
