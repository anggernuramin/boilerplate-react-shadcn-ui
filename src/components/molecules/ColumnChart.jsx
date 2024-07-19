import Chart from "react-apexcharts";

const ColumnChart = () => {
  const chartData = {
    series: [
      {
        name: "Jumlah Ticket",
        data: [10, 15, 8, 12, 20, 7, 13, 14, 18, 16],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%", // Adjust the width of the bars
          endingShape: "rounded",
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#000"],
        },
        formatter: function (val) {
          return val;
        },
      },
      xaxis: {
        categories: [
          "BRI KK Obi",
          "BRI Unit Jonggol",
          "Service 3",
          "Service 4",
          "Service 5",
          "Service 6",
          "Service 7",
          "Service 8",
          "Service 9",
          "Service 10",
        ],
        labels: {
          style: {
            fontWeight: "bold",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
          style: {
            fontSize: "12px",
            colors: ["#000"],
          },
        },
        title: {
          text: "Jumlah (Ticket)",
          style: {
            fontSize: "12px",
          },
        },
      },
      title: {
        text: "Top 10 Jumlah Ticket Terbanyak",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          textDecoration: "underline",
          border: "2px solid #7CB5EC",
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
      tooltip: {
        enabled: true,
        theme: "dark",
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return val;
          },
        },
        marker: {
          show: true,
          // fillColors: ["#7CB5EC"], // Customize marker color if needed
        },
      },
      colors: ["#7CB5EC"], // Color of the bars
    },
  };

  return (
    <div className="w-full my-5">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default ColumnChart;
