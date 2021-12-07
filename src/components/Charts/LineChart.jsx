import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const LineChart = ({ chartData, customOptions = {} }) => {
  const chartOptions = {
    series: [
      {
        data: chartData,
      },
    ],
    ...customOptions,
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
