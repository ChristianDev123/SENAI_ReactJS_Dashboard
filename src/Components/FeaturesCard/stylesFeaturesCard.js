import styled from "styled-components";

export const FeatureCard = styled.div`
    box-shadow: 2px 4px 10px 1px rgb(201,201,201,0.47);
    padding:10px;
    height:100%;
    display:flex;
`;

export const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    color: gray;
`;

export const Title = styled.h1`
    font-size:16px;
    font-weight:500;
`;

export const Bottom = styled.div`
    width:100%;
    height:100%;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    gap:15px;
`;

export const FeaturedChart = styled.div`
    width:70%;
    height:100%;
    @media screen and (max-width:350px) {
        width:100%;
    }
    @media screen and (min-width:992px) {
        width:40%;
    }
`;

export const SubTitle = styled.p`
    font-weight:600;
    font-size: 25px;
    color:white;
    display:none;
    @media screen and (min-width: 768px) {
        display:inline;
    }
`;

export const Value = styled.p`
    font-size:25px;
`;

export const Summary = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    @media screen and (min-Width:992px) {
        align-items: flex-end; 
    }
`;

export const Item = styled.div`
    text-align:center;
    &.positive{
        color:green;
    }
    &.negative{
        color:red;
    }
`;

export const ItemTitle = styled.div`
    font-size:14px;
    color:gray;
    @media screen and (min-width: 768px) {
        font-size:18px;
    }
`;

export const ItemResult = styled.div`
    margin-top:10px;
    font-size:14px;
`;

export const ResultValue = styled.div`
    @media screen and (min-width:768px) {
        font-size:22px;
    }
`;
