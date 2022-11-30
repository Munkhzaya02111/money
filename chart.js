var oilCanvas = document.getElementById("oilChart");


Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "United Arab Emirates",
        "Canada"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
};
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["OK", "WARNING", "CRITICAL", "UNKNOWN"],
    datasets: [
      {
        label: "# of Tomatoes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false
  }
});

var pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: oilData
});