/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import MessageEmptyData from "../atoms/MessageEmptyData";
import { CircularProgress } from "@mui/material";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// custom style header
let customStyles = {
  headCells: {
    style: {
      justifyContent: "center",
      fontWeight: "bolder",
    },
  },
};

let conditionalOverdue = [
  {
    when: (row) => row.overdue,
    style: {
      backgroundColor: "#dc3545",
      color: "#efefef",
    },
  },
];

const DataTablePagination = ({
  statusAksi,
  data,
  loading,
  params,
  handlePageChange,
  handlePerRowsChange,
  currentRow,
  handleRowClicked,
}) => {
  const navigate = useNavigate();
  let { page, size, totalRows } = params;
  // const handleAdd = () => {};

  const handleEdit = (row) => {
    // redirect ke page edit
    navigate(`/vehicle/detail/${row.IME}`);
  };

  const handleDelete = () => {
    // redirect ke page delete
  };

  const handleDetail = () => {
    // redirect ke page detail
  };

  let columns = [
    {
      name: "No.",
      cell: (row, index) => (page - 1) * size + parseInt(index + 1),
      width: "5em",
      right: true,
      center: true,
    },
  ];

  if (data?.length > 0) {
    let keys = Object.keys(data[0]);

    keys.forEach((key) => {
      switch (key) {
        case "NOP":
          columns.push({
            name: "Nop",
            selector: (row) => row.NOP,
            sortable: true,
            wrap: true,
            center: true,
            // Menampilkan jika terdapat anak data pada setiap kolom
            // cell: (row) => renderPillStatus(row.status),
            // center: true,
          });
          break;
        case "JEK":
          columns.push({
            name: "Jenis Kendaraan",
            selector: (row) => row.JEK,
            sortable: true,
            center: true,

            cell: (row) =>
              row.JEK ? row.JEK : <span className="w-full text-center">-</span>,
          });
          break;
        case "C_NAME":
          columns.push({
            name: "Perusahaan",
            selector: (row) => row.C_NAME,
            sortable: true,
            center: true,

            // grow: 9,
            // cell: (row) => (row.hari == null ? "-" : row.hari),
            // center: true,
          });
          break;
        case "BAT_VOLT":
          columns.push({
            name: "Vot Baterai",
            selector: (row) => row.BAT_VOLT,
            sortable: true,
            center: true,
          });
          break;
        default:
          break;
      }
    });
  }

  // menampilkan action modal
  switch (statusAksi) {
    case "nonAction":
      break;
    case "editOnly":
      columns.push({
        name: "Action",
        cell: (row) => (
          <div
            className="flex w-full cursor-pointer justify-evenly"
            onClick={() => handleEdit(row)}
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
            onClick={() => handleDetail(row)}
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
              onClick={() => handleEdit(row)}
            />
            <PencilIcon
              className="w-5 h-5 text-blue-700 cursor-pointer"
              title="Ubah"
              onClick={() => handleEdit(row)}
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
              onClick={() => handleDetail(row)}
            />
            |
            <PencilIcon
              className="w-5 h-5 text-orange-500 cursor-pointer"
              title="Ubah"
              onClick={() => handleEdit(row)}
            />
            |
            <TrashIcon
              className="w-5 h-5 text-red-700 cursor-pointer"
              title="Hapus"
              onClick={() => handleDelete(row)}
            />
          </div>
        ),
        allowOverflow: true,
        // button: true,
      });
      break;
  }

  return (
    <section className="w-full m-auto overflow-hidden bg-slate-100 ">
      <DataTable
        columns={columns}
        data={data || []}
        defaultSortFieldId={1}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        responsive
        highlightOnHover
        striped
        customStyles={customStyles}
        progressPending={loading}
        progressComponent={
          <div className="flex items-center justify-center w-full h-[90vh] bg-transparent">
            <CircularProgress />
          </div>
        }
        noDataComponent={<MessageEmptyData />}
        expandableRows
        expandableRowExpanded={(row) => row === currentRow}
        onRowExpandToggled={(bool, row) => handleRowClicked(row)}
        expandOnRowClicked
        onRowClicked={(row) => handleRowClicked(row)}
        //   expandableRowsComponent={(row) =>renderExpandableComponent(row, tipe, handleSubmitValidator)
        //   }
        conditionalRowStyles={conditionalOverdue}
      />
    </section>
  );
};

export default DataTablePagination;
