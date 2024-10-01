import { apiInstance } from "@/constant/instance";
import { STORAGE_KEYS, StorageEnhance } from "@/core/storage";
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

apiInstance.interceptors.request.use(
  (config: any) => {
    // config.url = config.baseURL + config.url;
    // console.log(config.url, "config123");
    console.log("svhsvhshvhsvhshvhs")
    if (!config.headers.Authorization) {
      // Thêm token vào header của request
      const localUser = StorageEnhance.get(STORAGE_KEYS.user);
      console.log(localUser, "localUser")
      if (localUser?.access_token) {
        config.headers.Authorization = `Bearer ${localUser?.access_token}`;
      }
    }

    // config.headers = {
    //   ...config.headers,
    //   'X-Request-Id': uuidv4(),  // Tạo một ID ngẫu nhiên
    // };

    return config;
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);
class APIManager {
  static request = async ({
    url,
    method = "GET",
    body,
    configs,
    showToast = false,
    showError = true,
  }: IParams) => {
    try {
      console.log(method, "shvhsvhshvhsvhshvs")
      let res;
      if (method === "GET" || method === "DELETE") {
        res = await apiInstance({
          method: method.toLowerCase(),
          url: body ? `${url}?${qs.stringify(body)}` : url,
          ...configs,
        });

        console.log(res, "shvhshvhsvhshv");
      } else {
        res = await apiInstance({
          method: method.toLowerCase(),
          url,
          data: body,
          ...configs,
        });
      }

      console.log(res, "shvhshvhsvhshv");

      if (res.data?.success) {
        return Promise.resolve({
          status: res.status,
          data: res.data?.data,
          message: res.data.message,
        });
      }
    } catch (e: any) {
      console.log(e, "error1");
      const { response } = e;
      if (response?.status === 401) {
        return Promise.resolve({
          status: response?.status,
          data: response?.data?.data,
          message: response?.data.message,
        });
      } else {
        return Promise.resolve({
          status: response?.status,
          data: response?.data?.data,
          message: response?.data.message,
        });
      }
    }
  };
}

export default APIManager;
