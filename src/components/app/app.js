// Library
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Products from "../products/productList";
import Search from "../search/search";
import Categories from "../categories/categories";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { Column2, Ul } from "../../styles/styles";
import {
  GlobalStyle,
  ContainerMain,
  H3,
  Head,
  Containers,
  Column
} from "../../styles/styles";

class App extends React.Component {
  // LOAD PRODUCTS

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Head>
          <H3> Amazon </H3>
        </Head>
        <ContainerMain>
          <Row>
            <Column2 lg={3}>
              <Ul variant="flush">
                <Route path="/:category?" component={Search} />
                <Route path="/:category?" component={Categories} />
              </Ul>
            </Column2>
            <Column lg={9}>
              <Containers>
                <Route path="/:category?" component={Products} />
              </Containers>
            </Column>
          </Row>
        </ContainerMain>
      </Router>
    );
  }
}

export default App;
