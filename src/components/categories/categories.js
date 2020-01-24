// Library
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import { Li } from "../../styles/styles";
// Components
import { getCategory } from "../../redux/ducks/Products";
import { setCategoryVAL } from "../../redux/ducks/Products";

const Categories = ({
  category,
  getCategoryArr,
  products,
  history,
  setCategoryValue,
  currentCategory
}) => {
  // Function to generate unical massiv of categories
  const fillCategories = () => {
    products.map(e => {
      for (let i = 0; i < e.bsr_category.length; i++) {
        if (!category.includes(e.bsr_category)) {
          category.push(e.bsr_category);
        }
      }
      return category;
    });
  };

  useEffect(() => {}, fillCategories());

  getCategoryArr(category);

  return (
    <div>
      <Li>
        <NavLink
          to={"/" + "?" + history.location.search.slice(1)}
          onClick={() => {
            setCategoryValue(currentCategory);
          }}
        >
          <h5>All Category</h5>
        </NavLink>
      </Li>
      {category.map((category, i) => {
        return (
          <Li key={i}>
            <NavLink
              to={category + "?" + history.location.search.slice(1)}
              activeStyle={{ color: "#7d7d7d" }}
              onClick={() => {
                setCategoryValue(currentCategory);
              }}
            >
              <h5>{category}</h5>
            </NavLink>
          </Li>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  category: state.productList.category,
  products: state.productList.products,
  input: state.productList.input,
  currentCategory: state.productList.currentCategory
});

let mapDispatchToProps = dispatch => {
  return {
    getCategoryArr(category) {
      dispatch(getCategory(category));
    },
    setCategoryValue(currentCategory) {
      dispatch(setCategoryVAL(currentCategory));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

Categories.propTypes = {
  category: PropTypes.array.isRequired,
  setCategoryValue: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};
