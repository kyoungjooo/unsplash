import { useInfiniteQuery } from "@tanstack/react-query";
import imageApi from "@/apis/image/imageApi";

const useInfinity = (params) => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: ["images", params],
    queryFn: ({ pageParam = 1 }) =>
      imageApi.getImagesList({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      const totalPages = lastPage?.total_pages || 1;
      return currentPage < totalPages ? currentPage + 1 : null;
    },
  });
  return { data, fetchNextPage, isLoading, hasNextPage };
};

export default useInfinity;
