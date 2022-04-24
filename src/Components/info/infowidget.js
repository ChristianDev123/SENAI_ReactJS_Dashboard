import React from "react";
import {
    Container,  
    TableWrapper,  
    Title, 
    TitleTable
}from "./infowidgetsm";
import Infocoin from "./infoCoin";
import { Col, Row } from "reactstrap";

export default function WidgetInfo({coins}){   
    const titulos = ['#', 'Name', 'Price', 'Price Change']
    return(
        <TableWrapper>
            <Row>
                <Col xs={12}>
                    <TitleTable>The main cryptocurrencies on the market</TitleTable>     
                </Col>
                <Col>
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                {titulos.map((title,index) => (
                                    <td key={index}>{title}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="shadow p-3 mb-5 bg-white rounded">
                            {/* {coins.map((coin, index) =>(
                                <Infocoin coin={coin} key={index} index={index + 1}/>
                            ))} */}
                        </tbody>   
                    </table>
                </Col>
            </Row>
        </TableWrapper>
    );
}