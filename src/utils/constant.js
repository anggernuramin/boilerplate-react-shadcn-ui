const token = localStorage.getItem("token");
export const HEADERS_REQUEST = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
