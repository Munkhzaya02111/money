var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Хувцас", "Хоол хүнс", "Гоо сайхан", "UNKNOWN", "mnnn"],
    datasets: [
      {
        label: "# of Tomatoes",
        data: [12, 19, 3, 5, 3],
        backgroundColor: [
          "#FD3C4A",
          "#7F3DFF",
          "#FCAC12",
          "#0077FF",
          "#00A86B",
        ],
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false,
  },
});
