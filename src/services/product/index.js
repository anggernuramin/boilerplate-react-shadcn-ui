/* eslint-disable no-unused-vars */
import endpoint from "../endpoint";
import { GET, POST, PUT, PATCH, DELETE, POST_LOGIN } from "../method";

// POST_LOGIN
// const login = (dataBody) => POST_LOGIN(`${endpoint.reqToken}`, dataBody);

// GET
const getAllProduct = () => GET(`${endpoint.products}`);

// POST

// PUT

// PATCH

// DELETE

const PRODUCT = { getAllProduct };
export default PRODUCT;
