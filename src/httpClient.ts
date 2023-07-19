/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
  private BASE_URL = `http://localhost:4000/sick`;

  protected axiosInstance = axios.create({
    baseURL: this.BASE_URL,
  });

  private cache = new Map<string, { data: any; timestamp: number }>();
  private cacheExpireTime = 60 * 60 * 1000;

  async get(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    const cacheKey = JSON.stringify({ path, config });
    const cachedResponse = this.cache.get(cacheKey);

    if (cachedResponse) {
      if (Date.now() - cachedResponse.timestamp < this.cacheExpireTime) {
        return cachedResponse.data;
      }
      this.cache.delete(cacheKey);
    }

    const response = await this.axiosInstance.get(path, config);
    this.cache.set(cacheKey, { data: response, timestamp: Date.now() });
    return response;
  }
}

export default new HttpClient();
