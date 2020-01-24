import React from "react";
import Categories from "../categories";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

const props = {
  category: [],
  products: [],
  currentCategory: "",
  getCategoryArr() {},
  setCategoryValue() {},
  history: {
    location
  }
};

describe("test Search", () => {
  const wrapper = shallow(<Categories.WrappedComponent {...props} />);

  it("TEST spapshot to component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
