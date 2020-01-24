import React from "react";
import Search from "../search";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("Snaphot List", () => {
  const props = {
    match: { params: { products: "" } },
    history: {
      location
    },
    getSearchValue() {},
    input: ""
  };

  const wrapper = shallow(<Search.WrappedComponent {...props} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
