import { Column } from '@ant-design/plots';

const data = [
  { color: '#92FFC6',type: '1-3秒', value: 0.16 },
  { color: '#9BEBC1',type: '4-10秒', value: 0.125 },
  { color: '#165534',type: '11-30秒', value: 0.24 },
  { color: '#3EE58F',type: '31-60秒', value: 0.19 },
  { color: '#A1D4BA',type: '1-3分', value: 0.22 },
  { color: '#21AF66',type: '3-10分', value: 0.05 },
];

const BarChart = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    // shapeField: 'column25D',
    style: {
      fill: ({color}) => color,
    },
  };
  return <Column {...config} />;
};

export default BarChart