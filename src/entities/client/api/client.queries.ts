  import { useQuery } from "@tanstack/react-query";
  import {fetchAllClients} from "./client.service.ts";

  export const useAllClientsQuery = () => {
    return useQuery({
      queryKey: ["client"], // Уникальный ключ для запроса
      queryFn: fetchAllClients, // Функция запроса данных
      staleTime: 1000 * 30 , // Время, в течение которого данные считаются свежими
      refetchOnWindowFocus: false, // обновлять данные при возврате в окно
    });
  };