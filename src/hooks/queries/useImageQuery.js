import imageApi from "@/apis/image/imageApi";
import { useQuery } from "@tanstack/react-query";

export const useImageQuery = (params) => {
  console.log(params);
  const { searchValue, pageValue, perPage } = params;
  return useQuery({
    queryKey: ["images", searchValue, pageValue, perPage],
    queryFn: () => imageApi.getImagesList({ searchValue, pageValue, perPage }),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};
