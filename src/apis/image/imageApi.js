import AxiosInstance from "../http";

const imageApi = {
  async getImagesList({ page = 1, params }) {
    const { searchValue, perPage } = params;
    const response = await AxiosInstance.get("/search/photos", {
      params: {
        ...AxiosInstance.defaults.params,
        query: searchValue,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  },
};
export default imageApi;
