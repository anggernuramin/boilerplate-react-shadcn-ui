import Clock from "@/components/atoms/Clock";
import InlineEditTable from "../../components/organism/InlineEditTable";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Teller",
    paymentStatus: "13 menit 56 detik",
    totalAmount: "3 menit 11 detik",
    paymentMethod: "2718 tiket",
  },
  {
    invoice: "Teller",
    paymentStatus: "13 menit 56 detik",
    totalAmount: "3 menit 11 detik",
    paymentMethod: "2718 tiket",
  },
];
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import ColumnChart from "@/components/molecules/ColumnChart";
import PieChart from "@/components/molecules/PieChart";
const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section className="container flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full mt-10">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] flex justify-between text-left font-normal bg-white ",
                !date && "text-muted-foreground"
              )}
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <CalendarIcon className="w-4 h-4 mr-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Clock />
      </div>
      <div className="w-full my-5 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>LAYANAN</TableHead>
              <TableHead>RATA-RATA DURASI TUNGGU</TableHead>
              <TableHead>RATA-RATA DURASI PELAYANAN</TableHead>
              <TableHead>TOTAL TIKET</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ColumnChart />
      <div className="w-full my-5 border">
        <div className="text-left bg-[#F5F5F5] p-3">TELLER (2679 Tiket)</div>

        <PieChart />
      </div>

      <section className=" w-[50%] overflow-hidden">
        <InlineEditTable />
      </section>
    </section>
  );
};

export default Dashboard;
