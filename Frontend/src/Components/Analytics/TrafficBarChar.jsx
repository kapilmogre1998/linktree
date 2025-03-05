import { Column } from '@ant-design/plots';

const TrafficByLinkBarChart = ({ data }) => {
    
    const linkData = [
      { color: '#92FFC6',type: data?.[0]?.title || 'Link 1', value: data?.[0]?.count || 0 },
      { color: '#9BEBC1',type: data?.[1]?.title || 'Link 2', value: data?.[1]?.count || 0 },
      { color: '#165534',type: data?.[2]?.title || 'Link 3', value: data?.[2]?.count || 0 },
      { color: '#3EE58F',type: data?.[3]?.title || 'Link 4', value: data?.[3]?.count || 0 },
      { color: '#A1D4BA',type: data?.[4]?.title || 'Link 5', value: data?.[4]?.count || 0 },
      { color: '#21AF66',type: data?.[5]?.title || 'Link 6', value: data?.[5]?.count || 0 },
    ];
  const config = {
    data: linkData,
    xField: 'type',
    yField: 'value',
    // shapeField: 'column25D',
    style: {
      fill: ({color}) => color,
    },
  };
  return <Column {...config} />;
};

export default TrafficByLinkBarChart