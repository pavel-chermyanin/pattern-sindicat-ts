
import { axiosClientRequest } from "@shared/api/axiosClient.ts";

import {GraphEndpoint} from "../consts/graph.endpoint.ts";
import {Graph} from "../model/graph.types.ts";


export const fetchAllGraphs = async (): Promise<Graph[]> => {
  const response = await axiosClientRequest.get(GraphEndpoint.getAllGraphs);
  return response.data;
};
