/* eslint-disable no-unused-vars */
import endpoint from "../endpoint";
import { GET, POST, PUT, PATCH, DELETE, POST_LOGIN } from "../method";

// POST_LOGIN
// const login = (dataBody) => POST_LOGIN(`${endpoint.reqToken}`, dataBody);

// GET
const getListHistoryEngine = (param) =>
  GET(
    `${endpoint.vehicleEngineHistory}?SEARCH=${param.search}&PAGE=${param.page}&PERPAGE=${param.size}&DATE=${param.date}`
  );

// POST

// PUT

// PATCH

// DELETE

const VEHICLE = { getListHistoryEngine };
export default VEHICLE;
