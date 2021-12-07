import Highcharts from 'highcharts';

import data1 from '../../../public/mocks/chart1.json';
import data2 from '../../../public/mocks/chart2.json';
import data3 from '../../../public/mocks/chart3.json';
import { LineChart } from './LineChart';

const charts = [data1, data2, data3];

Highcharts.Pointer.prototype.reset = () => {};

Highcharts.Point.prototype.highlight = function (event) {
  this.onMouseOver();
  this.series.chart.tooltip.refresh(this);
  this.series.chart.xAxis[0].drawCrosshair(event, this);
};

export const SynchronizedCharts = ({ variables }) => {
  const options = {
    chart: {
      height: '30%',
    },
    xAxis: {
      visible: true,
      crosshair: true,
      type: 'datetime',
      tickWidth: 0,
      tickLength: 0,
    },
    yAxis: [
      {
        gridLineWidth: 1,
        tickWidth: 1,
        tickLength: 78,
        tickmarkPlacement: 'on',
        tickPixelInterval: 60,
        title: { enabled: false },
        labels: {
          align: 'left',
          x: -60,
          y: -10,
        },
      },
      {
        gridLineWidth: 2,
        tickWidth: 2,
        tickLength: 78,
        tickmarkPlacement: 'on',
        tickPixelInterval: 60,
        title: { enabled: false },
        labels: {
          align: 'right',
          x: 60,
          y: -10,
        },
        opposite: true,
      },
    ],
    legend: { enabled: false },
    marker: { enabled: false },
    plotOptions: {
      line: { marker: { enabled: false } },
      column: { pointWidth: 6 },
    },
    tooltip: {
      enabled: true,
      useHTML: true,
      shared: true,
      borderRadius: 3,
      shape: 'rectangle',
      shadow: false,
      padding: 20,
    },
  };

  const onMouseMove = (e) => {
    let point = null;
    let event = null;

    e.persist();
    Highcharts.charts.forEach((chart) => {
      if (!chart) return;
      event = chart.pointer.normalize(e);
      point = chart.series[0].searchPoint(event, true);
      if (point) {
        point.highlight(e);
      }
    });
  };

  return (
    <div onMouseMove={onMouseMove} onTouchMove={onMouseMove}>
      {variables.map(({ value, label }) => {
        const randomNumber = Math.floor(Math.random() * charts.length);
        const data = charts.find((_, index) => index == randomNumber);
        return (
          <LineChart
            key={value}
            customOptions={{ ...options, title: { text: label } }}
            chartData={data}
          />
        );
      })}
    </div>
  );
};
