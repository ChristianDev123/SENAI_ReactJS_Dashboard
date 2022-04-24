import React from "react";
import { Featured, FeaturedItem, FeaturedTitle, FeaturedMoneyContainer, FeaturedMoney, FeaturedMoneyRate, FeaturedSub, ImgLink  } from "./stylefeat";
import logo from '../../assets/bitcoin.gif'
import lo from '../../assets/eth-ethereum.gif'
import log from '../../assets/dog-bitcoin.gif'
import { Col, Row } from "reactstrap";

export default function FeaturedInfo(props) {
    const dados = props.dados
    return(
        <Featured>
            <Row xs={1} md={3} className={props.larguraTela < 768?'gap-4':''} >
                <Col>
                    <FeaturedItem>
                        <FeaturedTitle> <p>Bitcoin</p> </FeaturedTitle>
                        <FeaturedMoneyContainer>
                            <FeaturedMoney>{Number(dados?.[0].current_price).toLocaleString('en-US',{style:'currency',currency:"USD"})}</FeaturedMoney>
                            <FeaturedMoneyRate> <ImgLink src={logo}/></FeaturedMoneyRate>
                        </FeaturedMoneyContainer>
                        <FeaturedSub>Compared to last month</FeaturedSub>
                    </FeaturedItem>
                </Col>
                <Col>
                    <FeaturedItem>
                        <FeaturedTitle> <p>Ethereum</p> </FeaturedTitle>
                        <FeaturedMoneyContainer>
                            <FeaturedMoney>{Number(dados?.[1].current_price).toLocaleString('en-US',{style:'currency',currency:"USD"})}</FeaturedMoney>
                            <FeaturedMoneyRate><ImgLink src={lo}/></FeaturedMoneyRate>
                        </FeaturedMoneyContainer>
                        <FeaturedSub>Compared to last month</FeaturedSub>
                    </FeaturedItem>
                </Col>
                <Col>
                    <FeaturedItem>
                        <FeaturedTitle> <p>DogeCoin</p> </FeaturedTitle>
                        <FeaturedMoneyContainer>
                            <FeaturedMoney>{Number(dados?.[4].current_price).toLocaleString('en-US',{style:'currency',currency:"USD"})}</FeaturedMoney>
                            <FeaturedMoneyRate> <ImgLink src={log}/></FeaturedMoneyRate>
                        </FeaturedMoneyContainer>
                        <FeaturedSub>Compared to last month</FeaturedSub>
                    </FeaturedItem>
                </Col>
            </Row>
        </Featured>
    )
}