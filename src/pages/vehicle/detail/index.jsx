import { Box, Modal, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const DetailVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isOpen = true;
  return (
    <>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] bg-slate-100 shadow-md p-5 rounded-md">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            <h2>ID = {id}</h2>
          </Typography>
          <button
            className="px-5 py-2 mt-5 font-serif text-white rounded-md bg-primary"
            onClick={() => navigate("/vehicle")}
          >
            Close
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default DetailVehicle;
