import { useQuery } from "@tanstack/react-query";
import { getNetwork } from "../apis/getNetwork";

export function useNetwork(node: string) {
  const { data: networkData, isLoading: networkLoading } = useQuery({
    queryKey: ["network", node],
    queryFn: () => getNetwork(node),
  });
  return { networkData, networkLoading };
}
