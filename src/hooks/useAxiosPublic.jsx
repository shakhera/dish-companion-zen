import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://dish-companion-zen-server.vercel.app",
    // baseURL: "http://localhost:5000",
  });
  return axiosPublic;
};

export default useAxiosPublic;
