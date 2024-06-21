/* eslint-disable no-unused-vars */
import endpoint from "../endpoint";
import { GET, POST, PUT, PATCH, DELETE, POST_LOGIN } from "../method";

// POST_LOGIN
// const login = (dataBody) => POST_LOGIN(`${endpoint.reqToken}`, dataBody);

// GET
const getVehicleList = (param) =>
  GET(
    `${
      endpoint.vehicleEngineHistory
    }?SEARCH=${param.search.toUpperCase()}&PAGE=${param.page}&PERPAGE=${
      param.size
    }`
  );

// POST

// PUT

// PATCH

// DELETE

const VEHICLE = { getVehicleList };
export default VEHICLE;
