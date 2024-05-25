import axios from "axios";

export const useSequre = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
function useAxiosSequre() {
  return useSequre;
}

export default useAxiosSequre;
