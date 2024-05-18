import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useMenuData() {
  const getMenuData = () => {
    try {
      const { data } = axios.get("menu.json");
      return data;
    } catch (error) {
      return error;
    }
  };

  //   const query = useQuery({
  //     queryFn: () => getMenuData,

  //     queryKey: ["munu"],
  //   });
  const menuData = getMenuData();
  return menuData;
}

export default useMenuData;
