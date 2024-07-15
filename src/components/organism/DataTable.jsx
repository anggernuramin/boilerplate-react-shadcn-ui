import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const DataTable = () => {
  const [editIdx, setEditIdx] = useState(-1);
  const [rows, setRows] = useState([
    {
      id: 1,
      kode: "A",
      namaLayanan: "Teller",
      sla: "2",
      parent: [
        { id: 1, kode: "A", namaLayanan: "Teller", sla: "2" },
        { id: 2, kode: "B", namaLayanan: "Customer Service", sla: "4" },
        { id: 3, kode: "C", namaLayanan: "Layanan 3", sla: "0" },
      ],
      status: "aktif",
    },
    {
      id: 2,
      kode: "B",
      namaLayanan: "Customer Service",
      sla: "4",
      parent: [
        { id: 1, kode: "A", namaLayanan: "Teller", sla: "2" },
        { id: 2, kode: "B", namaLayanan: "Customer Service", sla: "4" },
        { id: 3, kode: "C", namaLayanan: "Layanan 3", sla: "0" },
      ],
      status: "tidak-aktif",
    },
    {
      id: 3,
      kode: "C",
      namaLayanan: "Layanan 3",
      sla: "0",
      parent: [
        { id: 1, kode: "A", namaLayanan: "Teller", sla: "2" },
        { id: 2, kode: "B", namaLayanan: "Customer Service", sla: "4" },
        { id: 3, kode: "C", namaLayanan: "Layanan 3", sla: "0" },
      ],
      status: "aktif",
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

  // Handler untuk mengupdate nilai dropdown
  const handleDropdownChange = (parentIdx, idx) => {
    const updatedRows = [...editRows];
    updatedRows[idx].parent = [rows[parentIdx]];
    setEditRows(updatedRows);
  };

  // Handler untuk mengupdate status checkbox
  const handleCheckboxChange = (e, idx) => {
    const updatedRows = [...editRows];
    updatedRows[idx].status = e.target.checked ? "aktif" : "tidak-aktif";
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
    <div className="w-[60%] mx-auto h-screen flex justify-center items-center flex-col gap-3">
      <h2 className="text-3xl font-semibold text-start">Daftar Layanan</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Kode</TableHead>
            <TableHead>NAMA LAYANAN</TableHead>
            <TableHead>SLA (Tunggu)</TableHead>
            <TableHead>PARENT</TableHead>
            <TableHead>AKTIF</TableHead>
            <TableHead>AKSI</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {editRows.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.kode}
                    onChange={(e) => handleChange(e, idx, "kode")}
                  />
                ) : (
                  row.kode
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.namaLayanan}
                    onChange={(e) => handleChange(e, idx, "namaLayanan")}
                  />
                ) : (
                  row.namaLayanan
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={row.sla}
                    onChange={(e) => handleChange(e, idx, "sla")}
                  />
                ) : (
                  row.sla
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button>Select Parent</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Pilih Parent</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {rows.map((parent, parentIdx) => (
                        <DropdownMenuItem
                          key={parent.id}
                          onSelect={() => handleDropdownChange(parentIdx, idx)}
                        >
                          {parent.namaLayanan}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  row.parent.map((parent) => parent.namaLayanan).join(", ")
                )}
              </TableCell>
              <TableCell>
                {editIdx === idx ? (
                  <Checkbox
                    checked={row.status === "aktif"}
                    onChange={(e) => handleCheckboxChange(e, idx)}
                  />
                ) : (
                  <Checkbox
                    className="w-4 h-4 border-2 border-slate-800"
                    checked={false}
                    onChange={(e) => handleCheckboxChange(e, idx)}
                  />
                )}
              </TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(idx)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <Button className="mr-4" onClick={handleSave}>
          Save
        </Button>
        <Button className="mr-4" onClick={handleSend}>
          Send
        </Button>
        <Button onClick={handleReload}>Reload</Button>
      </div>
    </div>
  );
};

export default DataTable;
