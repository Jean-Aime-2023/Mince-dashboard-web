// FakeData.js
export const barChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Steps A",
        data: [3000, 4000, 5000, 4500, 6000, 8000, 7000,5000, 4500, 6000, 8000, 7000],
        backgroundColor: "#5547D7",
        borderColor: "transparent",
        borderWidth: 1,
      },
      {
        label: "Steps B",
        data: [2000, 3000, 4000, 3500, 5000, 7000, 6000,4000, 3500, 5000, 7000, 6000],
        backgroundColor: "#BABABA", // Different background color for the second dataset
        borderColor: "transparent",
        borderWidth: 1,
      },
    ],
  };
  