import { apiInstance } from "@/constant/instance";
import { AxiosRequestConfig } from "axios";
import qs from "query-string";

interface IParams {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  configs?: AxiosRequestConfig;
  body?: any;
  showError?: boolean;
  showToast?: boolean;
}
class APIManager {
  request = async ({
    url,
    method = "GET",
    body,
    configs,
    showToast = false,
    showError = true,
  }: IParams) => {
    try {
      let res;
      if (method === "GET" || method === "DELETE") {
        res = await apiInstance({
          method: method.toLowerCase(),
          url: body ? `${url}?${qs.stringify(body)}` : url,
          ...configs
        });
      } else {
        res = await apiInstance({
          method: method.toLowerCase(),
          url,
          data: body,
          ...configs
          
        });
      }

      if(res.data?.success){
        console.log(res)
      }
    } catch (e: any) {}
  };
}
