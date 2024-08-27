import { useQuery } from "@tanstack/react-query";
import { getStorage } from "../apis/getStorage";

export function useStorage(node: string) {
  const { data: storageData, isLoading: storageLoading } = useQuery({
    queryKey: ["storage", node],
    queryFn: () => getStorage(node),
  });
  return { storageData, storageLoading };
}
