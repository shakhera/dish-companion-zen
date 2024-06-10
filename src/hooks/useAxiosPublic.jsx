import axios from "axios";

const useAxiosPublic = () => {
  // const baseURL: "http://localhost:5000",
  const axiosPublic = axios.create({
    baseURL: "chef.json",
  });
  return axiosPublic;
};

export default useAxiosPublic;
