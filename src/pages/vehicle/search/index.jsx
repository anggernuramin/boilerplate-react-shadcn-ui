/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import VEHICLE from "../../../services/vehicle";
import DataTablePagination from "../../../components/organisms/DataTablePagination";
import useDebounce from "../../../hooks/UseDebounce";

const SearchVehicleHistory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("query");
  const navigate = useNavigate();
  const [currentRow, setCurrentRow] = useState(null);
  const [loading, setLoading] = useState(false);

  // sesauikan data params yang dibutuhkan
  const [params, setParams] = useState({
    search: "",
    page: 1,
    size: 10,
  });

  const [dataPembayaran, setDataPembayaran] = useState([]);

  // Menentukan delay saat hit api search
  const debouncedQuery = useDebounce(query, 500);

  const fetchData = async (params) => {
    setLoading(true);

    await VEHICLE.getVehicleList(params)
      .then((result) => {
        if (result.data.response?.error == 1) {
          // navigate("/login");
          // navigate();
          return;
        }
        setDataPembayaran(result?.data.response?.data);
        setParams({
          ...params,
          page: result?.data.response.count[0].PageIndex,
          totalRows: result?.data.response.count[0].TotalData,
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  //   Event ketika memilih halaman
  let handlePageChange = (child) => {
    let _params = { ...params, page: child - 1 };
    setParams(_params);
    fetchData(_params);
  };

  //   Event untuk mengubah halaman
  let handlePerRowsChange = (child) => {
    const newParams = { ...params, size: child };
    setParams(newParams);
    fetchData(newParams);
  };

  //   Form untuk memberikan payload data
  let handleSubmitValidator = (child) => {};

  let handleRowClicked = (row) => {
    setCurrentRow(row);
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  useEffect(() => {
    if (debouncedQuery) {
      const updatedParams = { ...params, search: debouncedQuery };
      setParams(updatedParams);
      fetchData(updatedParams);
    } else {
      const updatedParams = { ...params, search: "", page: 1, size: 10 };
      setParams(updatedParams);
      fetchData(updatedParams);
    }
  }, [debouncedQuery]);

  const changeSearchParams = (query) => {
    setSearchParams({ query: query });
  };
  const handleKeywordChange = (e) => {
    query = e.target.value;
    changeSearchParams(query);
  };

  return (
    <section className="container p-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-medium ">Data Table Component </h1>
        <div>
          <label className="flex items-center w-full gap-2 input input-bordered">
            <input
              type="search"
              autoFocus
              value={query}
              onChange={handleKeywordChange}
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
      </div>
      <div className="p-3 rounded shadow">
        <DataTablePagination
          statusAksi={""}
          currentRow={currentRow}
          tipe="payment"
          data={dataPembayaran}
          loading={loading}
          params={params}
          handlePageChange={handlePageChange}
          handlePerRowsChange={handlePerRowsChange}
          handleRowClicked={handleRowClicked}
          handleSubmitValidator={handleSubmitValidator}
        />
      </div>
      <Outlet />
    </section>
  );
};

export default SearchVehicleHistory;