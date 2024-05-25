import { useContext } from "react";
import { userContext } from "../provider/AuthProvider";

function useAuth() {
  const users = useContext(userContext);
  return users;
}

export default useAuth;
