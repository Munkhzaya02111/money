// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

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
          "#00A86B"
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderWidth: 0.5
      }
    ]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false
  }
});

var pieChart = new Chart(oilCanvas, {
  type: "doughnut",
  data: oilData
});
