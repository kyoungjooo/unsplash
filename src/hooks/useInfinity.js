import { useInfiniteQuery } from "@tanstack/react-query";
import imageApi from "@/apis/image/imageApi";

const useInfinity = ({ searchValue, perPage }) => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: ["images", searchValue],
    queryFn: ({ pageParam = 1 }) =>
      imageApi.getImagesList({ searchValue, pageValue: pageParam, perPage }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.nextPage || null;
    },
  });
  return { data, fetchNextPage, isLoading, hasNextPage };
};

export default useInfinity;
