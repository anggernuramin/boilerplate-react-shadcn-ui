import axios from "axios";
import { BASE_API } from "@config/env";
import { HEADERS_REQUEST } from "@utils/constant";

export const POST_LOGIN = async (path, dataBody) => {
  try {
    const response = await axios.get(`${BASE_API}${path}`, dataBody);
    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const GET = async (path) => {
  try {
    const response = await axios.get(`${BASE_API}${path}`);
    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};

// contoh jika dalam hit api membutuhkan token yang berbeda dari api lain
const tokenValidator =
  "qLuj3hnl5YkQp2f1iEhX024LYzvFjc+f0MNwGETFadb5wZ92bBTmH86TiOAlmTWSIGjqjVyy9mPK+950CpZYBeZtCMnCwtiuvRvxX9IwIlNf0KAmewbLrFZOEMyAnq3xr+EzhcHboz/4RFEsazzURqUn/6Xb0Nh0xx0DDN2ReNjp8dzclGR8Zgr8Dvp/AsEzZpnT4seHHyJs+CrvhKyfXMNGvoVEZWlchG4411KBSrYOFzATjuRqz+slIZOZKKq8OjOTDZsqgZgAoIiohgFnsUB/ValrreZ5ieSwZfBKDRA3XA==";
export const POST = async (path, dataBody) => {
  try {
    const response = await axios.post(`${BASE_API}${path}`, dataBody, {
      headers: {
        Authorization: `Bearer ${tokenValidator}`,
      },
    });

    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const PUT = async (path, dataBody) => {
  try {
    const response = await axios.put(
      `${BASE_API}${path}`,
      dataBody,
      HEADERS_REQUEST
    );
    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const PATCH = async (path, dataBody) => {
  try {
    const response = await axios.patch(
      `${BASE_API}${path}`,
      dataBody,
      HEADERS_REQUEST
    );
    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const DELETE = async (path) => {
  try {
    const response = await axios.delete(`${BASE_API}${path}`, HEADERS_REQUEST);
    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};
