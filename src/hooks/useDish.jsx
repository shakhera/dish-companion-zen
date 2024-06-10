import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useDish = () => {
  const axiosPublic = useAxiosPublic();

  const { data: dishes = [], refetch } = useQuery({
    queryKey: ["dishes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/dishes");
      return res.data;
    },
  });

  return [dishes, refetch];
};

export default useDish;
