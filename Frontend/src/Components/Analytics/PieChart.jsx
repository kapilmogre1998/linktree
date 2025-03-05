import { Pie } from '@ant-design/plots';

const PieChart = ({ data }) => {
  const config = {
    data: [
      { color: '#3EE58F', type: `Youtube - ${data?.find(item => item.type == 'YOUTUBE')?.count || 0}`, value: data?.find(item => item.type == 'YOUTUBE')?.count || 0 },
      { color: '#94E9B8', type: `Facebook - ${data?.find(item => item.type == 'FACEBOOK')?.count || 0}`, value: data?.find(item => item.type == 'FACEBOOK')?.count || 0 },
      { color: '#21AF66', type: `Instagram - ${data?.find(item => item.type == 'FACEBOOK')?.count || 0}`, value: data?.find(item => item.type == 'INSTAGRAM')?.count || 0 },
      { color: '#165534', type: `Other - ${data?.find(item => item.type == 'FACEBOOK')?.count || 0}`, value: data?.find(item => item.type == 'OTHER')?.count || 0 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    legend: {
      color: {
        title: true,
        position: 'right',
        rowPadding: 12,
        colorField: 'color'
      },
    },
    style: {
      fill: ({color}) => color,
    },
    radius: 1
  };
  return <Pie {...config} />;
};

export default PieChart;