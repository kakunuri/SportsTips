import React from "react";
import { GraphContainer } from "./styles";
import Chart from "react-apexcharts";

let graphColors=["#85bb65", "#00a2ed"];
function generateGraphInputs({
  title = "Sample Graph",
  xLabel = "X Axis",
  yLabels = ["Y Axis"],
  xAxisOptions = {},
  yAxisOptions = {},
  type = ["line"],
  xKey = "x",
  yKeys = ["y"],
  data = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ],
  tooltipFormat = "{x},{y}",
}) {
  return {
    series: yKeys.map((yKey, index) => {
      return {
        name: yLabels[index],
        type: type[index],
        data: data.map((dataPoint) => {
          return dataPoint[yKey];
        }),
      };
    }),
    options: {
      colors:graphColors,
      chart: {
        zoom: {
          enabled: true,
        },
        stacked: false
      },
      xaxis: {
        ...xAxisOptions,
        categories: data.map((dataPoint) => {
          return dataPoint[xKey];
        }),
        title: {
          text: xLabel,
        },
      },
      yaxis: yLabels.map((yLabel, index) => {
        return  {
          ...yAxisOptions,
          opposite:index===1,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: graphColors[index]
          },
          labels: {
            style: {
              colors: graphColors[index]
            }
          },
          title: {
            text: yLabel,
            style: {
              color: graphColors[index]
            }
          }
        }
      }),
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: title,
        align: "left",
        style: {
          fontSize: "24px",
          fontFamily: "Quicksand",
          fontWeight: "normal",
        },
      },
      grid: {
        row: {
          opacity: 0.5,
        },
      },
    },
  };
}

function Graph(props) {
  let graphInputs = generateGraphInputs(props);
  console.log(graphInputs);
  return (
    <GraphContainer>
      <Chart {...graphInputs} height={"300"} />
    </GraphContainer>
  );
}

export default Graph;
