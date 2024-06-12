/* eslint-disable no-unused-vars */
import endpoint from "../endpoint";
import { GET, POST, PUT, PATCH, DELETE, POST_LOGIN } from "../method";

// POST_LOGIN
// const login = (dataBody) => POST_LOGIN(`${endpoint.reqToken}`, dataBody);

// GET
const getUsers = () => GET(`${endpoint.user}`);

// POST

// PUT

// PATCH

// DELETE

const AUTH_SERVICE = { getUsers };
export default AUTH_SERVICE;
