import React from "react";
import Product from "../product";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("Snapshot my Product", () => {
  const params = {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg",
    name: "A3 Magnetic Dry",
    price: 15.79
  };

  const wrapper = shallow(
    <Product img={params.img} name={params.name} price={params.price} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
