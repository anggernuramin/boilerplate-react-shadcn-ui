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
      justifyContent: "center",
      alignItems: "center",
      padding: "8px", // tambahkan padding jika diperlukan
    },
  },
  cells: {
    style: {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      borderInline: "1px solid rgba(0,0,0,.1)",
      paddingInline: "8px",
      paddingBlock: "0px",
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
      cell: (row) => (
        <div className="w-full text-lg text-center">{row.kode_layanan}</div>
      ),
    },
    {
      name: "Nama Layanan",
      cell: (row) => (
        <EditableCell
          value={row.nama_layanan}
          onChange={(value) => handleEdit(row.ID, "nama_layanan", value)}
          editing={row.editing}
          type="text"
        />
      ),
    },
    {
      name: "SLA Layanan",
      cell: (row) => (
        <EditableCell
          value={row.sla_layanan}
          onChange={(value) => handleEdit(row.ID, "sla_layanan", value)}
          editing={row.editing}
          type="number"
        />
      ),
    },
    {
      name: "Nama Parent",
      cell: (row) => (
        <EditableCell
          value={row.parent_id}
          displayValue={row.nama_parent}
          onChange={(value) => handleEdit(row.ID, "parent_id", value)}
          editing={row.editing && !row.nama_parent}
          type="select"
          selectOptions={parent.map((p) => ({ value: p.ID, label: p.value }))}
        />
      ),
    },
    {
      name: "Aktif",
      cell: (row) => (
        <EditableCell
          value={row.aktif === "1"}
          onChange={(value) => handleEdit(row.ID, "aktif", value ? "1" : "0")}
          editing={row.editing}
          type="checkbox"
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
  displayValue,
  onChange,
  editing,
  type,
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

  const renderEditableCell = () => {
    if (!editing) {
      return (
        <div className="p-1 overflow-hidden border border-transparent rounded cursor-pointer w-[100%]">
          {type === "checkbox" ? (
            <input
              type="checkbox"
              checked={value}
              readOnly
              className="border rounded outline-none"
            />
          ) : (
            displayValue || value
          )}
        </div>
      );
    }

    switch (type) {
      case "text":
      case "number":
        return (
          <input
            type={type}
            value={value}
            onChange={handleInputChange}
            className="p-1 overflow-hidden border rounded outline-none border-slate-500 w-[100%]"
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={value}
            onChange={handleCheckboxChange}
            className="border rounded outline-none w-[100%]"
          />
        );
      case "select":
        return (
          <select
            value={value}
            onChange={handleSelectChange}
            className="p-1 border rounded outline-none border-slate-500 w-[100%]"
          >
            {selectOptions &&
              selectOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        );
      default:
        return null;
    }
  };

  return <div className="relative">{renderEditableCell()}</div>;
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
