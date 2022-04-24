import { Col, Container, Row } from "reactstrap";
import FeaturedInfo from "../featuredInfo/feturedinfo";
import Card from "../FeaturesCard/FeaturesCard";
import WidgetInfo from "../info/infowidget";
import MainChart from "../MainChart/MainGraphic";
import Api from "../Services/Api";
import { useEffect, useState } from "react";
export default function MainWrapper() {
  const [coins, set_coins] = useState()

  const ConsumoApi = async () => {
    await Api.get('/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Cbinancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d')
      .then((response) => { set_coins(response.data) })
      .catch((err) => { console.log(" o erro foi" + err) })
  }
  useEffect(() => {
    ConsumoApi()
  }, [])

  const larguraTela = window.innerWidth
  return (
    <>
      <main>
        <Container fluid>
          <FeaturedInfo larguraTela={larguraTela} dados = {coins} />
        </Container>

        <Container fluid>
          <Row xs={1} lg={3} className={larguraTela < 992 ? "gap-4" : ''}>
            <Col>
              <Card larguraTela={larguraTela} dados = {coins}
                />
                
            </Col>

            <Col lg={8}>
              <MainChart/>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <WidgetInfo />
        </Container>
      </main>
      <style jsx>{`
      main{
        position:absolute;
      }
    `}</style>
    </>
  );
}