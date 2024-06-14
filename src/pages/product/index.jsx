import { useEffect, useState } from "react";
import PRODUCT from "../../services/product";
import CustomDataTable from "../../components/organisms/DataTable";
import { Box, Modal } from "@mui/material";

const Product = () => {
  const [datas, setDatas] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const products = await PRODUCT.getAllProduct();
        setDatas(products?.data);
        setFiltered(products?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  const handleFilterData = (e) => {
    const value = e.target.value;
    const newData = datas.filter((item) => {
      return item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    setFiltered(newData);
  };

  const handleAdd = () => {};
  const handleDelete = () => {};
  const handleEdit = () => {
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <section className="container w-full pt-10 m-auto overflow-hidden px-36 bg-slate-100 h-min">
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-medium ">Data Table Component </h1>
        <label className="w-[25%]  flex items-center gap-2 input input-bordered">
          <input
            type="search"
            onChange={(e) => handleFilterData(e)}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <section className="table overflow-x-auto">
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ width: 200 }} className="w-1/2 bg-white">
            <h2 id="parent-modal-title">Text in a modal</h2>
            <p id="parent-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            {/* <ChildModal /> */}
          </Box>
        </Modal>
        <CustomDataTable
          statusAksi="editOnly"
          //   statusFilter={true}
          data={filtered}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        ></CustomDataTable>
        {/* 
        {selectedRows.length > 0 && (
          <DataTable
            title="Selected Rows"
            data={selectedRows}
            columns={columns}
          ></DataTable>
        )} */}
      </section>
    </section>
  );
};

export default Product;
