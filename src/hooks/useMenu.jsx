import axios from "axios";
import { useEffect, useState } from "react";

function useMenu() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    axios
      .get("menu.json")
      .then((res) => setMenu(res.data))
      .catch((error) => console.log(error));
  }, []);
  return menu;
}

export default useMenu;