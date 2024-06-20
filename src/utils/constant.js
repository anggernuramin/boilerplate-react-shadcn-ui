// token dummy
localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1IiwicGFzc3dvcmQiOiIkMmEkMTQkRlpLSGtHYm5PUmtJVGlnbnJ0WFdZT2xHcXlaNG1DVGFLWkdRV2Q4Y3Y5UlpkMElRaHpuUk8iLCJlbWFpbCI6ImZ1QGZ1LmNvbSIsImV4cCI6MTcxOTQ3MjQ2N30.zmwIRYqsfgT8z_U7Gm3yhWCon-t3TaH9DIaqFNiRONc"
);

const token = localStorage.getItem("token");
export const HEADERS_REQUEST = {
  headers: {
    Authorization: `${token}`,
  },
};
