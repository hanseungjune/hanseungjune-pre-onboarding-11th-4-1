import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
  private BASE_URL = `http://localhost:4000/sick`;

  protected axiosInstance = axios.create({
    baseURL: this.BASE_URL,
  });

  get = (
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> => this.axiosInstance.get(path, config);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HttpClient();
