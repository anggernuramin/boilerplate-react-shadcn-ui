import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTable = () => {
  const [editIdx, setEditIdx] = useState(-1);
  const [rows, setRows] = useState([
    {
      id: 1,
      invoice: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      id: 2,
      invoice: "INV002",
      status: "Pending",
      method: "PayPal",
      amount: "$150.00",
    },
    {
      id: 3,
      invoice: "INV003",
      status: "Overdue",
      method: "Bank Transfer",
      amount: "$300.00",
    },
  ]);
  const [editRows, setEditRows] = useState([...rows]);

  // Handler untuk mengubah mode edit
  const handleEdit = (idx) => {
    setEditIdx(idx);
  };

  // Handler untuk menyimpan perubahan global
  const handleSave = () => {
    setRows(editRows);
    setEditIdx(-1);
  };

  // Handler untuk mengupdate nilai input
  const handleChange = (e, idx, key) => {
    const updatedRows = [...editRows];
    updatedRows[idx][key] = e.target.value;
    setEditRows(updatedRows);
  };

  // Handler untuk mengirim data
  const handleSend = () => {
    // Tambahkan logika pengiriman data di sini
    console.log("Data dikirim: ", editRows);
  };

  // Handler untuk memuat ulang data
  const handleReload = () => {
    setEditRows([...rows]);
    setEditIdx(-1);
  };

  return (
    <div className="w-[60%] mx-auto">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {editRows.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.invoice}
                    onChange={(e) => handleChange(e, idx, "invoice")}
                  />
                ) : (
                  row.invoice
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.status}
                    onChange={(e) => handleChange(e, idx, "status")}
                  />
                ) : (
                  row.status
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.method}
                    onChange={(e) => handleChange(e, idx, "method")}
                  />
                ) : (
                  row.method
                )}
              </TableCell>
              <TableCell className="text-right">
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.amount}
                    onChange={(e) => handleChange(e, idx, "amount")}
                  />
                ) : (
                  row.amount
                )}
              </TableCell>
              <TableCell className="text-right">
                <button onClick={() => handleEdit(idx)}>Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <button className="mr-4" onClick={handleSave}>
          Save
        </button>
        <button className="mr-4" onClick={handleSend}>
          Send
        </button>
        <button onClick={handleReload}>Reload</button>
      </div>
    </div>
  );
};

export default DataTable;
