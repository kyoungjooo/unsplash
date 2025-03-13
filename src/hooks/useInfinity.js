import { useInfiniteQuery } from "@tanstack/react-query";
import imageApi from "@/apis/image/imageApi";

const useInfinity = (params) => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: ["images", params],
    queryFn: ({ pageParam = 1 }) =>
      imageApi.getImagesList({ page: pageParam, params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => lastPage.page + 1,
  });
  return { data, fetchNextPage, isLoading, hasNextPage };
};

export default useInfinity;
