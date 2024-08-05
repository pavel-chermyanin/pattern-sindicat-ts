
import { axiosClientRequest } from "@shared/api/axiosClient.ts";
import {ClientEndpoint} from "../consts/client.endpoint.ts";
import {Client} from "../model/client.types.ts";

export const fetchAllClients = async (): Promise<Client[]> => {
  const response = await axiosClientRequest.get(ClientEndpoint.getClients);
  return response.data;
};
