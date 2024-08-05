
import { axiosClientRequest } from "@shared/api/axiosClient.ts";

import { UserEndpoint } from "../consts/user.endpoint.ts";
import { User } from "../model/user.types.ts";


export const fetchUser = async (): Promise<User> => {
  const response = await axiosClientRequest.get(UserEndpoint.me);
  return response.data;
};
