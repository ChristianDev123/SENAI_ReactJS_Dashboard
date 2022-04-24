import React from 'react';
import { Uppercase } from './infoCoinsCss';


export default function Infocoin({coin, index}) {
    console.log(coin, index)

    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '4%'}} className='me-2'/>
                <span>
                    {coin.name} <Uppercase>{coin.symbol}</Uppercase>
                </span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}
            </td>
            <td>{coin.market_cap}</td>
            <td>{coin.total_volume}</td>
            <td>{coin.circulating_supply}</td>
        </tr>
    )
}
