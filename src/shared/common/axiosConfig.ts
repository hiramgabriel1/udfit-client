import { URLS } from "./config";
import axios from "axios";

export const InstancesAxiosFetch = {
  instanceLocalAPI: axios.create({
    baseURL: URLS.DEV,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json"
    }
  }),

  instanceProduccionAPI: axios.create({
    baseURL: `${URLS.PRODUCCTION}`,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json"
    }
  }),
};
