/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { formatRupiah } from "../../utils/formatRupiah";

// style custom untuk header table
let customStyles = {
  headCells: {
    style: {
      justifyContent: "center",
      backgroundColor: "#f3f3f3",
    },
  },
};

const CustomDataTable = ({
  data,
  statusAksi,
  statusFilter,
  handleEdit,
  handleAdd,
  handleDetail,
  handleDelete,
}) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, updateResetPaginationToggle] = useState(false);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  const paginationComponentOptions = {
    rowsPerPageText: "Baris per Halaman",
    rangeSeparatorText: "dari",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Semua",
  };

  // * Start Filter Search
  const filteredItems = data?.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(filterText.toLowerCase())
    )
  );

  // Text filter reset
  const handleClear = () => {
    if (filterText) {
      updateResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  // const FilterComponent = ({ filterText, onFilter, onClear }) => (
  //   <form onSubmit={(e) => onFilter(e)}>
  //     <div className="p-inputgroup">
  //       <InputText
  //         placeholder="Search"
  //         defaultValue={filterText}
  //         onBlur={onFilter}
  //         id="cari"
  //         onInput={(e) => (e.target.value == "" ? setFilterText("") : false)}
  //       />
  //       <Button
  //         icon="pi pi-search"
  //         className="p-button-warning"
  //         onClick={onFilter}
  //       />
  //     </div>
  //   </form>
  // );

  const columns = useMemo(() => [
    {
      name: "No.",
      cell: (row, index) => (page - 1) * rowPerPage + index + 1,
      width: "5em",
      center: true,
    },
  ]);

  if (data.length > 0) {
    // mengambil key dari value object data array of object
    let keys = Object?.keys(data[0]);

    // tampilkan kolom sesuai dengan key diatas
    keys.forEach((key) => {
      switch (key) {
        case "itle":
          columns.push({
            name: "Title",
            selector: (row) => row.title,
            cell: (row) =>
              row.title ? (
                row.title
              ) : (
                <span className="w-full text-center">-</span>
              ),
            sortable: true,
            center: true,
          });
          break;
        case "price":
          columns.push({
            name: "Price",
            selector: (row) => row.price,
            cell: (row) =>
              row.price ? (
                formatRupiah(row.price)
              ) : (
                <span className="w-full text-center">-</span>
              ),
            sortable: true,
            center: true,
          });
          break;
        case "category":
          columns.push({
            name: "Category",
            selector: (row) => row.category,
            cell: (row) =>
              row.description ? (
                <p className="line-clamp-2">{row.description}</p>
              ) : (
                <span className="w-full text-center">-</span>
              ),
            sortable: true,
            center: true,
          });
          break;
        case "description":
          columns.push({
            name: "Description",
            selector: (row) => row.description,
            cell: (row) =>
              row.category ? (
                row.category
              ) : (
                <span className="w-full text-center">-</span>
              ),
            sortable: true,
            center: true,
          });
          break;
        default:
          break;
      }
    });
  }

  // menampilkan aksi crud pada column sesuai dengan statusAksi yang dikirim
  switch (statusAksi) {
    case "nonAction":
      break;
    case "editOnly":
      columns.push({
        name: "Action",
        cell: (row) => (
          <div
            className="flex w-full cursor-pointer justify-evenly"
            onClick={(e) => handleEdit(row)}
          >
            <PencilIcon className="w-5 h-5 text-orange-500" title="Ubah" />
          </div>
        ),
        allowOverflow: true,
        button: true,
      });
      break;
    case "detailOnly":
      columns.push({
        name: "Action",
        cell: (row) => (
          <div
            className="flex w-full cursor-pointer justify-evenly"
            onClick={(e) => handleDetail(row)}
          >
            <EyeIcon className="w-5 h-5 text-blue-700" title="Detail" />
          </div>
        ),
        allowOverflow: true,
        button: true,
      });
      break;
    case "editAndDetail":
      columns.push({
        name: "Aksi",
        cell: (row) => (
          <div className="flex w-full justify-evenly">
            <EyeIcon
              className="w-5 h-5 text-orange-500 cursor-pointer"
              title="Detail"
              onClick={(e) => handleEdit(row)}
            />
            |{" "}
            <PencilIcon
              className="w-5 h-5 text-blue-700 cursor-pointer"
              title="Ubah"
              onClick={(e) => handleEdit(row)}
            />
          </div>
        ),
        allowOverflow: true,
        button: true,
      });
      break;
    default:
      columns.push({
        name: "Aksi",
        cell: (row) => (
          <div className="flex w-full justify-evenly">
            <EyeIcon
              className="w-5 h-5 text-blue-700 cursor-pointer"
              title="Detail"
              onClick={(e) => handleDetail(row)}
            />
            |
            <PencilIcon
              className="w-5 h-5 text-orange-500 cursor-pointer"
              title="Ubah"
              onClick={(e) => handleEdit(row)}
            />
            |
            <TrashIcon
              className="w-5 h-5 text-red-700 cursor-pointer"
              title="Hapus"
              onClick={(e) => handleDelete(row)}
            />
          </div>
        ),
        allowOverflow: true,
        // button: true,
      });
      break;
  }

  // Menampilkan jika data table yang dikirim kosong
  const EmptyComponent = () => {
    return (
      <div className="p-5">
        <h1>Tidak ada data untuk ditampilkan</h1>
      </div>
    );
  };

  if (statusFilter) {
    return (
      <DataTable
        columns={columns}
        data={data.length >= 1 ? filteredItems : data}
        defaultSortFieldId={1}
        pagination
        onChangePage={(pageIndex) => setPage(pageIndex)}
        onChangeRowsPerPage={(rowPerPage) => setRowPerPage(rowPerPage)}
        paginationResetDefaultPage={resetPaginationToggle}
        paginationComponentOptions={paginationComponentOptions}
        responsive
        striped
        subHeader
        // subHeaderComponent={getSubHeaderComponent()}
        customStyles={customStyles}
        className="my-2"
        // progressPending={isLoading}
        noDataComponent={<EmptyComponent />}
      />
    );
  } else {
    return (
      <DataTable
        columns={columns}
        data={data.length >= 1 ? filteredItems : data}
        defaultSortFieldId={1}
        pagination
        onChangePage={(pageIndex) => setPage(pageIndex)}
        onChangeRowsPerPage={(rowPerPage) => setRowPerPage(rowPerPage)}
        paginationResetDefaultPage={resetPaginationToggle}
        paginationComponentOptions={paginationComponentOptions}
        responsive
        customStyles={customStyles}
        // className="my-2"
        // progressPending={isLoading}
        noDataComponent={<EmptyComponent />}
      />
    );
  }
};

export default CustomDataTable;
