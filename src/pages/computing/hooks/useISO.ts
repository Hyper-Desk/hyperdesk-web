import { useQuery } from "@tanstack/react-query";
import { getISO } from "../apis/getISO";

export function useISO(node: string) {
  const { data: isoData, isLoading: isoLoading } = useQuery({
    queryKey: ["iso", node],
    queryFn: () => getISO(node),
  });
  return { isoData, isoLoading };
}
