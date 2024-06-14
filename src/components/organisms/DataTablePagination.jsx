/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import MessageEmptyData from "../atoms/MessageEmptyData";
import { CircularProgress } from "@mui/material";
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
  data,
  loading,
  params,
  handlePageChange,
  handlePerRowsChange,
  currentRow,
  handleRowClicked,
}) => {
  let { page, size, totalRows } = params;

  let columns = [
    {
      name: "No.",
      cell: (row, index) => page * size + parseInt(index + 1),
      width: "5em",
      right: true,
      center: true,
    },
  ];

  if (data.length > 0) {
    let keys = Object.keys(data[0]);

    keys.forEach((key) => {
      switch (key) {
        case "status":
          columns.push({
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            wrap: true,
            // Menampilkan jika terdapat anak data pada setiap kolom
            // cell: (row) => renderPillStatus(row.status),
            // center: true,
          });
          break;
        case "info":
          columns.push({
            name: "Berhasil Diproses",
            selector: (row) => row.info,
            sortable: true,
            cell: (row) => (row.info == null ? "-" : row.info),
            center: true,
          });
          break;
        case "hari":
          columns.push({
            name: "Hari",
            selector: (row) => row.hari,
            sortable: true,
            // grow: 9,
            cell: (row) => (row.hari == null ? "-" : row.hari),
            center: true,
          });
          break;
        default:
          break;
      }
    });
  }

  return (
    <section className="container w-full pt-10 m-auto overflow-hidden px-36 bg-slate-100 h-min">
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
        progressComponent={<CircularProgress />}
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
