import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from 'reactstrap';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function MainChart() {
    const [dataset,setDataSet] = useState([
        {
          label: 'Variação da BitCoin',
          data: [5,10,15,20,25,30,35],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]);
    const [labelsGrid,setLabelGrid] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
    const [nameChart,setNameChart] = useState('BitCoin')
    return (
            <Line options={{
                responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: nameChart,
                        }
                    }
                }} 
            data={{labels:labelsGrid,datasets:dataset}} />
    );
}
