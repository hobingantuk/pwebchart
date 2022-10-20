const pieChart = {
  chart: null,
  data: [
    ["Product", "Sales"],
    ["Rent", 1600000],
    ["Utilities", 400000],
    ["Savings", 300000],
    ["Transport", 500000],
    ["Entertainment", 800000],
    ["Food", 3000000],
  ],
  element: "#pie-chart",
  options: {
    title: "Expenses per month",
    width: 500,
    height: 300,
  },
};

const barChart = {
  chart: null,
  data: [
    ["Product", "Sales"],
    ["Laptops", 1708],
    ["Desktops", 1457],
    ["Cameras", 660],
    ["Phones", 1507],
    ["Accessories", 768],
  ],
  element: "#bar-chart",
  options: {
    title: "2022 Units Sold in store",
    width: 500,
    height: 300,
  },
};

const geoChart = {
  chart: null,
  data: [
    ["Country", "Population"],
    ["China", 1425887337],
    ["India", 1417173173],
    ["United States", 338289857],
    ["Indonesia", 275501339],
    ["Pakistan", 235824862],
  ],
  element: "#geo-chart",
  options: {
    title: "Top 5 Nation Largest population",
    width: 500,
    height: 300,
    colorAxis: { colors: ["green", "red"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  },
};

// https://developers.google.com/chart/interactive/docs/gallery/piechart
// https://developers.google.com/chart/interactive/docs/gallery/barchart
// https://developers.google.com/chart/interactive/docs/gallery/linechart
// https://developers.google.com/chart/interactive/docs/reference#draw
// https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
const init = () => {
  pieChart.chart = new google.visualization.PieChart(
    document.querySelector(pieChart.element)
  );
  pieChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    pieChart.options
  );

  barChart.chart = new google.visualization.BarChart(
    document.querySelector(barChart.element)
  );
  barChart.chart.draw(
    google.visualization.arrayToDataTable(barChart.data),
    barChart.options
  );
  geoChart.chart = new google.visualization.GeoChart(
    document.querySelector(geoChart.element)
  );

  geoChart.chart.draw(
    google.visualization.arrayToDataTable(geoChart.data),
    geoChart.options
  );
};

// https://developers.google.com/chart/interactive/docs/quick_start
google.charts.load("current", {
  packages: ["corechart", "geochart"],
  callback: init,
  mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
});

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// document.querySelector("#update-pie-chart").addEventListener("click", () => {
//   pieChart.data = [
//     ["Product", "Sales"],
//     ["Laptops", 1508],
//     ["Desktops", 1497],
//     ["Cameras", 360],
//     ["Phones", 1790],
//     ["Accessories", 518],
//   ];
//   pieChart.chart.draw(
//     google.visualization.arrayToDataTable(pieChart.data),
//     pieChart.options
//   );
// });
