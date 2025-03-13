import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: import.meta.env.VITE_ACCESS_KEY,
  },
});
export default AxiosInstance;

// 722075
