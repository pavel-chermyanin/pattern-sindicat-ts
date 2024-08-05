import { useQuery } from "@tanstack/react-query";

import { fetchUser } from "./user.service.ts";
// import {User} from "./user.types.ts";

// Хук для получения данных о пользователе
export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"], // Уникальный ключ для запроса
    queryFn: fetchUser, // Функция запроса данных
    staleTime: 1000 * 60 * 5, // Время, в течение которого данные считаются свежими
    // cacheTime: 1000 * 60 * 10, // Время хранения данных в кэше
    refetchOnWindowFocus: false, // Не обновлять данные при возврате в окно
  });
};
