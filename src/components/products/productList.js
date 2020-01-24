// Library
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Components
import Product from "../product/product";
import { getProductsApi } from "../../redux/ducks/Products";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Products = ({
  match,
  products,
  history,
  getAPIproducts,
  pageSize,
  totalCount,
  currentPage
}) => {
  useEffect(() => {
    getAPIproducts();
  });

  // Sort by Name
  const resultsBySearch = products.filter(data => {
    const names = data.name.toLowerCase();
    const names2 = history.location.search.slice(1).toLowerCase();
    return ~names.indexOf(names2);
  });

  // Sort by Categories
  const result2 = resultsBySearch.filter(result => {
    if (match.params.category === undefined) {
      return true;
    }
    return result.bsr_category === match.params.category;
  });

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <Row>
      {result2.map((product, i) => (
        <Col lg={4} md={6} xs={12} key={i}>
          <Product
            name={product.name}
            img={product.img}
            price={product.price}
          />
        </Col>
      ))}
    </Row>
  );
};

const mapStateToProps = state => ({
  products: state.productList.products,
  category: state.productList.category,
  currentCategory: state.productList.currentCategory,
  pageSize: state.productList.pageSize,
  totalCount: state.productList.totalCount,
  currentPage: state.productList.currentPage
});

const mapDispatchToProps = dispatch => ({
  getAPIproducts: () => dispatch(getProductsApi())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

Products.propTypes = {
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
