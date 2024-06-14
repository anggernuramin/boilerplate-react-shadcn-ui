/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PAYMENT from "../../services/payment";
import DataTablePagination from "../../components/organisms/DataTablePagination";

const ValidatorPembayaran = () => {
  const navigate = useNavigate();
  const [currentRow, setCurrentRow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    page: 0,
    size: 10,
    totalRows: 0,
  });
  let [dataPembayaran, setDataPembayaran] = useState([]);

  let fetchData = async (params) => {
    setLoading(true);

    // data payload pagination
    let data = {
      layananId: "0",
      tanggalAwal: "2024-02-25",
      tanggalAkhir: "2024-06-14",
      format: "table",
    };
    await PAYMENT.getListValidatorPembayaran(data, params).then(
      (result) => {
        if (result.data.status == "OK") {
          setDataPembayaran(result.data.data);
          setParams({
            ...params,
            totalRows: result.data.paging.totalElement,
            size: result.data.paging.pageSize,
          });
        }
        setLoading(false);
      },

      (err) => {
        setLoading(false);
        if (err.status == 401) {
          navigate("/login");
          navigate(0);
        } else if (err.status == 403) {
          navigate(-1);
        }
      }
    );
    setLoading(false);
  };

  let handleSubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fetchData(params);
  };

  //   Event ketika memilih halaman
  let handlePageChange = (child) => {
    let _params = { ...params, page: child - 1 };
    setParams(_params);
    fetchData(_params);
  };

  //   Event untuk mengubah halaman
  let handlePerRowsChange = (child) => {
    let _params = { ...params, size: child };
    setParams(_params);
    fetchData(_params);
  };

  //   Form untuk memberikan payload data
  let handleSubmitValidator = (child) => {};

  let handleRowClicked = (child) => {
    setCurrentRow(child);
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return (
    <>
      <div className="p-3 rounded shadow">
        <DataTablePagination
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
    </>
  );
};

export default ValidatorPembayaran;
