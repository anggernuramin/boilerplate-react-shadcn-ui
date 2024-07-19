import Chart from "react-apexcharts";

const PieChart = () => {
  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Teller", "Transfer", "Deposit", "Withdrawal", "Other"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      title: {
        text: "Rata-Rata Durasi Pelayanan Jenis Transaksi Teller",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val} min`;
          },
        },
      },
      colors: ["#FF4560", "#008FFB", "#00E396", "#775DD0", "#546E7A"],
    },
  };

  return (
    <div className="w-full my-5">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PieChart;
