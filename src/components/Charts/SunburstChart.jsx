import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsSunburst from 'highcharts/modules/sunburst';

highchartsSunburst(Highcharts);

export const SunburstChart = ({
  onChartClick,
  chartData,
  customOptions = {},
}) => {
  const chartOptions = {
    title: {
      text: undefined,
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click(event) {
              onChartClick(event.point.id);
            },
          },
        },
      },
    },
    series: [
      {
        type: 'sunburst',
        data: chartData,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          format: '{point.name}',
          filter: {
            property: 'innerArcLength',
            operator: '>',
            value: 16,
          },
          rotationMode: 'circular',
        },
        levels: [
          {
            level: 1,
            levelIsConstant: false,
            dataLabels: {
              filter: {
                property: 'outerArcLength',
                operator: '>',
                value: 64,
              },
            },
          },
          {
            level: 2,
            colorByPoint: true,
          },
          {
            level: 3,
            colorVariation: {
              key: 'brightness',
              to: -0.5,
            },
          },
          {
            level: 4,
            colorVariation: {
              key: 'brightness',
              to: 0.5,
            },
          },
        ],
      },
    ],
    ...customOptions,
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
