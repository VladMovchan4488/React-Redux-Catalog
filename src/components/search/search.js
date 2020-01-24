// Library
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Styles
import { Li, Searching } from "../../styles/styles";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import { getSearch } from "../../redux/ducks/Products";

const Search = ({ match, history, input, getSearchValue }) => {
  // Push Search to URL
  const changeInputHandler = event => {
    input = event.target.value;
    history.push({
      pathname: match.params.category,
      search: input
    });
  };

  return (
    <Li>
      <Searching
        className="form-control form-control-sm ml-3 w-75"
        placeholder="LiveSearch by name in category"
        onChange={() => {
          getSearchValue(input);
        }}
        onInput={changeInputHandler}
        value={history.location.search.slice(1)}
      />
    </Li>
  );
};

const mapStateToProps = state => ({
  input: state.productList.input
});

const mapDispatchToProps = dispatch => ({
  getSearchValue(value) {
    dispatch(getSearch(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  input: PropTypes.string.isRequired,
  getSearchValue: PropTypes.func.isRequired
};
