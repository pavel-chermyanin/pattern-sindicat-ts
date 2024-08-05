import { useQuery } from "@tanstack/react-query";

import {fetchAllGraphs} from "./graph.service.ts";

export const useAllGraphsQuery = () => {
  return useQuery({
    queryKey: ["graph"], // Уникальный ключ для запроса
    queryFn: fetchAllGraphs, // Функция запроса данных
    staleTime: 1000 * 30, // Время, в течение которого данные считаются свежими
    refetchOnWindowFocus: false, // обновлять данные при возврате в окно
  });
};