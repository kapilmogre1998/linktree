import { Column } from '@ant-design/plots';


const BarChart = ({ deviceCount }) => {
  const data = [
    {  color: '#92FFC6', type: 'linux', value: deviceCount?.['linux'] || 0 },
    {  color: '#9BEBC1', type: 'mac', value: deviceCount?.['mac'] || 0 },
    {  color: '#165534', type: 'ios', value: deviceCount?.['ios'] || 0 },
    {  color: '#3EE58F', type: 'windows', value: deviceCount?.['windows'] || 0 },
    {  color: '#A1D4BA', type: 'android', value: deviceCount?.['andriod'] || 0 },
    {  color: '#21AF66', type: 'other', value: deviceCount?.['others'] || 0 },
  ];
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