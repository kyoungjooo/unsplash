import AxiosInstance from "../http";

const imageApi = {
  async getImagesList(params) {
    const { searchValue, pageValue, perPage } = params;
    const response = await AxiosInstance.get("/search/photos", {
      params: {
        ...AxiosInstance.defaults.params,
        query: searchValue,
        page: pageValue,
        per_page: perPage,
      },
    });
    return response.data;
  },
};
export default imageApi;
