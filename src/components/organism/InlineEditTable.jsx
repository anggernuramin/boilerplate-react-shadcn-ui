import { useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "../ui/button";

const dataLayanan = [
  {
    ID: "1",
    kode_layanan: "A",
    nama_layanan: "Teller",
    sla_layanan: "2",
    parent_id: "1",
    tampilkan: "1",
    aktif: "1",
    nama_parent: "Teller",
  },
  {
    ID: "2",
    kode_layanan: "B",
    nama_layanan: "Customer Service",
    sla_layanan: "2",
    parent_id: "2",
    tampilkan: "1",
    aktif: "1",
    nama_parent: "Customer Service",
  },
  {
    ID: "3",
    kode_layanan: "C",
    nama_layanan: "Layanan 3",
    sla_layanan: "0",
    parent_id: "3",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "Layanan 3",
  },
  {
    ID: "4",
    kode_layanan: "D",
    nama_layanan: "Layanan 4",
    sla_layanan: "0",
    parent_id: "0",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "",
  },
  {
    ID: "5",
    kode_layanan: "E",
    nama_layanan: "Layanan 5",
    sla_layanan: "0",
    parent_id: "0",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "",
  },
  {
    ID: "6",
    kode_layanan: "F",
    nama_layanan: "Layanan 6",
    sla_layanan: "0",
    parent_id: "0",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "",
  },
  {
    ID: "7",
    kode_layanan: "G",
    nama_layanan: "Layanan 7",
    sla_layanan: "0",
    parent_id: "0",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "",
  },
  {
    ID: "8",
    kode_layanan: "H",
    nama_layanan: "Layanan 8",
    sla_layanan: "0",
    parent_id: "0",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "",
  },
  {
    ID: "9",
    kode_layanan: "I",
    nama_layanan: "Layanan 9",
    sla_layanan: "0",
    parent_id: "0",
    tampilkan: "0",
    aktif: "0",
    nama_parent: "",
  },
];

const parent = [
  {
    ID: "1",
    value: "Teller",
  },
  {
    ID: "2",
    value: "Customer Service",
  },
  {
    ID: "3",
    value: "Layanan 3",
  },
];

const customStyles = {
  headCells: {
    style: {
      border: "1px solid rgba(0,0,0,.1)",
      fontWeight: "700",
      fontSize: ".9rem",
      textAlign: "center",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      padding: "8px", // tambahkan padding jika diperlukan
    },
  },
  cells: {
    style: {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      borderInline: "1px solid rgba(0,0,0,.1)",
      padding: "8px",
      textAlign: "center",
    },
  },
};

const InlineEditTable = () => {
  const [data, setData] = useState(dataLayanan);

  const toggleEditing = (id) => {
    const newData = data.map((item) =>
      item.ID === id ? { ...item, editing: !item.editing } : item
    );
    setData(newData);
  };

  const handleEdit = (id, field, value) => {
    const newData = data.map((item) =>
      item.ID === id ? { ...item, [field]: value } : item
    );
    setData(newData);
  };

  const columns = [
    {
      name: "Kode Layanan",
      selector: "kode_layanan",
      cell: (row) => <div>{row.kode_layanan}</div>,
    },
    {
      name: "Nama Layanan",
      selector: "nama_layanan",
      cell: (row) => (
        <EditableCell
          value={row.nama_layanan}
          onChange={(value) => handleEdit(row.ID, "nama_layanan", value)}
          editing={row.editing}
        />
      ),
    },
    {
      name: "SLA Layanan",
      selector: "sla_layanan",
      cell: (row) => (
        <EditableCell
          value={row.sla_layanan}
          onChange={(value) => handleEdit(row.ID, "sla_layanan", value)}
          editing={row.editing}
        />
      ),
    },
    {
      name: "Nama Parent",
      selector: "nama_parent",
      cell: (row) => (
        <EditableCell
          value={row.nama_parent}
          onChange={(value) => handleEdit(row.ID, "parent_id", value)}
          editing={row.editing}
          selectOptions={
            row.nama_parent == ""
              ? parent.map((p) => ({ value: p.ID, label: p.value }))
              : null
          }
        />
      ),
    },
    {
      name: "Aktif",
      selector: "aktif",
      cell: (row) => (
        <EditableCell
          value={row.aktif === "1"} // Convert to boolean for checkbox
          onChange={(value) => handleEdit(row.ID, "aktif", value ? "1" : "0")} // Convert boolean to string "1" or "0"
          editing={row.editing}
          checkbox
        />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <EditButton
          row={row}
          toggleEditing={() => toggleEditing(row.ID)}
          editing={row.editing}
        />
      ),
      button: true,
    },
  ];

  return (
    <>
      <h2 className="mb-3">Daftar Layanan</h2>
      <DataTable
        className="custom-data-table"
        data={data}
        columns={columns}
        customStyles={customStyles}
        fixedHeader
      />
      <div className="flex gap-5 mt-5">
        <Button>RELOAD</Button>
        <Button>SAVE</Button>
        <Button>SEND</Button>
      </div>
    </>
  );
};

const EditableCell = ({
  value,
  onChange,
  editing,
  checkbox,
  selectOptions,
}) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };

  const handleSelectChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      {editing ? (
        selectOptions ? (
          <select
            value={value} // Memastikan nilai yang ditampilkan adalah nilai saat ini
            onChange={handleSelectChange} // Menangani perubahan di dropdown
            className="p-1 border rounded outline-none border-slate-500 w-[100%]"
          >
            {selectOptions.map((option) => (
              <option key={option.ID} value={option.value}>
                {option.label} {/* Menampilkan nama parent */}
              </option>
            ))}
          </select>
        ) : checkbox ? (
          <input
            type="checkbox"
            checked={value}
            onChange={handleCheckboxChange}
            className="border rounded outline-none w-[100%]"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className="p-1 overflow-hidden border rounded outline-none  border-slate-500 w-[100%]"
          />
        )
      ) : (
        <div className="p-1 overflow-hidden border border-transparent rounded cursor-pointer w-[100%]">
          {checkbox ? (
            value ? (
              <input
                type="checkbox"
                checked={true}
                onChange={handleCheckboxChange}
                className="border rounded outline-none"
              />
            ) : (
              <input
                type="checkbox"
                checked={false}
                onChange={handleCheckboxChange}
                className="border rounded outline-none"
              />
            )
          ) : (
            value
          )}
        </div>
      )}
    </div>
  );
};

const EditButton = ({ row, toggleEditing, editing }) => {
  const handleClick = () => {
    toggleEditing(row.ID);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      {editing ? "Simpan" : "Edit"}
    </button>
  );
};

export default InlineEditTable;
