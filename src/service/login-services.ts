import { apiService } from "./base-services";

export const loginApiCall = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await apiService<any>({
      method: "POST",
      url: "/v1/login",
      data,
    });
    return response;
  } catch (error: any) {
    return error?.response?.data;
  }
};
