import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createGlobalStyle } from "styled-components";
import Container from "react-bootstrap/Container";

// Custom Styles by Header
export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: RGBA(0, 0, 0, 0.03);
    font-family: "PT Sans Narrow", sans-serif;
  }
`;

export const ContainerMain = styled(Container)`
  padding: 0;
`;

export const H3 = styled.h3`
  margin-left: auto;
  margin-right: auto;
`;

export const Head = styled.div`
  height: 60px;
  opacity: 0.9;
  color: #fff;
  align-items: center;
  display: flex;
  left: 0;
  top: 0;
  z-index: 99999999999999;
  width: 100%;
  border-bottom-right-radius: 50px 20px;
  border-bottom-left-radius: 50px 20px;
  background-image: linear-gradient(
    to bottom,
    rgb(89, 88, 88),
    rgb(101, 100, 100),
    rgb(112, 111, 111),
    rgb(124, 123, 123),
    rgb(136, 135, 135),
    rgb(147, 147, 147),
    rgb(159, 158, 158),
    rgb(170, 170, 170),
    rgb(182, 182, 182),
    rgb(194, 194, 194),
    rgb(205, 205, 205),
    rgb(217, 217, 217)
  );
`;

// Custom Styles by Products
export const BlockImage = styled(Card.Header)`
  padding: 0;
  border-top-right-radius: 18px !important;
  border-top-left-radius: 18px !important;
`;

export const Column = styled(Col)`
  margin-top: 40px;
`;

export const Image = styled(Card.Img)`
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  height: 182px;
`;

export const Price = styled(Card.Text)`
  padding-top: 12px;
`;

export const Title = styled(Card.Text)`
  height: 150px;
  overflow-y: hidden;
`;

export const Item = styled(Card)`
  border: 2px solid #cccccc !important;
  border-top-left-radius: 19px !important;
  border-top-right-radius: 19px !important;
  margin-bottom: 15%;
  height: 470px;
  cursor: pointer;
  box-shadow: 14px 14px 18px 2px rgba(189, 189, 189, 0.69);
  &:hover {
    border: 2px solid #656565 !important;
  }
`;

export const CardFooter = styled(Card.Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Containers = styled(Container)``;

export const Column3 = styled(Row)`
  margin-right: 0px;
  margin-left: 0px;
`;

// Custom Styles by Category and Search
export const Li = styled.div`
  background-color: #efefef;
  text-decorarion: none;
  cursor: pointer;
  padding-bottom: 20px;
  &:hover {
    color: #797979;
  }
  &:active {
    color: #797979;
  }
`;

export const Column2 = styled(Col)`
  margin-top: 45px;
`;

export const Ul = styled.ul`
  border-bottom: 1px solid #bfbfbf;
  border-top: 1px solid #bfbfbf;
  padding-left: 117px;
  margin-left: -100px;
`;

export const Searching = styled.input`
  margin-left: 0px !important;
  margin-top: 20px;
`;
