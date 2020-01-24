import React from "react";
import Products from "../productList";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("Snaphot List", () => {
  const props = {
    products: [
      {
        img:
          "https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg",
        bsr_category: "Home & Kitchen",
        name: "A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge"
      }
    ],
    match: { params: {} },
    history: {
      location
    }
  };

  const wrapper = shallow(<Products.WrappedComponent {...props} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
