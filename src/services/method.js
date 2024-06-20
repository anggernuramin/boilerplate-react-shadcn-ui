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
    const response = await axios.get(`${BASE_API}${path}`, HEADERS_REQUEST);
    if (response.status !== 200) {
      return response.data;
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const POST = async (path, dataBody) => {
  try {
    const response = await axios.post(
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
