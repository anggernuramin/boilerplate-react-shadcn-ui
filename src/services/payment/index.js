/* eslint-disable no-unused-vars */
import endpoint from "../endpoint";
import { GET, POST, PUT, PATCH, DELETE, POST_LOGIN } from "../method";

// POST_LOGIN
// const login = (dataBody) => POST_LOGIN(`${endpoint.reqToken}`, dataBody);

// GET
const getListValidatorPembayaran = (dataBody, param) =>
  POST(
    `${endpoint.endPointListValidatorPayment}?page=${param.page}&size=${param.size}`,
    dataBody,
    "validator"
  );

// POST

// PUT

// PATCH

// DELETE

const PAYMENT = { getListValidatorPembayaran };
export default PAYMENT;
