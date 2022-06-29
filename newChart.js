Highcharts.chart("container", {
  title: {
    text: null,
  },

  credits: {
    text: "created by",
    href: "https://www.linkedin.com/in/burhan-mansoori-4b0256187/",
    position: {
      align: "left",
      x: "10",
    },
    style: {
      color: "red",
      fontSize: "14px",
      fontWeight: "bolder",
      textDecoration: "underline",
    },
  },

  yAxis: {
    title: {
      text: null,
    },
  },
  /////// secondry YAxis //////

  xAxis: {
    categories: [
      "26-may",
      "27-may",
      "28-may",
      "29-may",
      "30-may",
      "31-may",
      "01-jun",
      "02-jun",
      "03-jun",
      "04-jun",
      "05-jun",
      "06-jun",
      "07-jun",
      "08-jun",
      "09-jun",
    ],
  },
  series: [
    {
      type: "column",
      name: "Allied Health Professional",
      data: [80, 60, 10, 90, 75, 80, 115, 80, 102, 50, 15, 24, 80, 75, 10],
    },
    {
      type: "column",
      name: "Doctor",
      data: [80, 60, 10, 90, 75, 80, 115, 80, 102, 50, 15, 24, 80, 75, 10],
    },
    {
      type: "column",
      name: "Nurses & Midwives",
      data: [80, 60, 10, 90, 75, 80, 115, 80, 102, 50, 15, 24, 80, 75, 10],
    },
    {
      type: "spline",
      name: "Express Adoption Rate",
      data: [60, 40, 60, 90, 85, 40, 95, 50, 82, 50, 15, 34, 70, 55, 10],
      marker: {
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[3],
        fillColor: "black",
      },
    },
  ],
});
