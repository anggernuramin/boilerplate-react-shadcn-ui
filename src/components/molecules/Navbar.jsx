import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGear,
  faGears,
  faHome,
  faExchange,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-5 py-2 overflow-hidden text-white bg-primary">
      <ul className="gap-3 flex-center">
        <li className="gap-2 flex-center">
          <FontAwesomeIcon icon={faHome} className="mb-1" />
          <Link to="/dashboard" className="text-lg">
            Bank BRI Dashboard Pusat
          </Link>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-1 text-sm flex-center">
                <FontAwesomeIcon icon={faGears} />
                Konfigurasi
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mt-1 ms-1"
                  size="1x"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 mt-2">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Mesin Tiket</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Valas</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Suku Bunga</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Materi</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Display</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Jenis Transaksi</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>User Management</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-1 text-sm flex-center">
                <FontAwesomeIcon icon={faList} />
                Laporan
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mt-1 ms-1"
                  size="1x"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-60">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Rincian Cabang Hari Ini</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Ticket Tercetak</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Jumlah Antrian Absen</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Materi</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Display</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Jenis Transaksi</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>User Management</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="flex items-center justify-between gap-1 w-96"
                variant="disabled"
              >
                BRI PUSAT
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mt-1 ms-1"
                  size="1x"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Mesin Tiket</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Valas</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Suku Bunga</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Materi</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Display</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>Jenis Transaksi</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
                  <span>User Management</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Button
            className="flex items-center justify-between gap-1 text-sm"
            variant="disabled"
          >
            <FontAwesomeIcon icon={faExchange} className="w-3 h-3 mt-[2px]" />
            Ganti Cabang
          </Button>
        </li>
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-1 text-sm flex-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            dev
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FontAwesomeIcon icon={faGear} className="w-4 h-4 mr-2" />
              <span>Mesin Tiket</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
