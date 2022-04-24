import styled from "styled-components";

export const Featured = styled.div`
    width: 70%;
    height:100%;
    padding:10px;
    margin: 68px auto 20px auto;
    @media screen and (min-width:768px) {
        width:100%;
    }
`;

export const FeaturedItem = styled.div`
    padding: 10px;
    border-radius: 10px;
    cursor: pointer; 
    box-shadow: 0px 0px 11px -1px #000000;
`;

export const FeaturedTitle = styled.span`
    font-size: 20px;
    text-align: center;
`

export const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FeaturedMoney = styled.span`
    font-size: 30px;
    font-weight: 600;
`
export const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin: left 20px;
`
export const FeaturedSub = styled.span`
    font-size:12px;
`
export const ImgLink = styled.img`
    width: 45px;
`