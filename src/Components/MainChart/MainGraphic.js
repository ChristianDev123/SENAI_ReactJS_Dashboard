import axios from 'axios';
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
import { useEffect, useState } from 'react';
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

const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=21&interval=daily';

export default function MainChart() {
    const [dataset,setDataSet] = useState([]);
    const [labelsGrid,setLabelGrid] = useState([]);
    const [nameChart,setNameChart] = useState('BitCoin');
    
    useEffect(()=>{
        const dates = [];
        const prices = [];
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=21&interval=daily')
        .then(({data})=>{
            data.prices.map((infos,index)=>{
                if(index%2 == 0){
                    dates.push(new Date(infos[0]).toLocaleDateString())
                    prices.push(Number(infos[1]));
                }
            })
            setLabelGrid(dates)
            const objPointChart = {
                label: 'Variação da Bitcoin',
                data: prices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
            setDataSet([objPointChart]);
        })
    },[])

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
