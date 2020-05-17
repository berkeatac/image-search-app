import React from "react";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./index";
import Header from "../Header";

configure({ adapter: new Adapter() });

describe("App", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the page buttons", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });
});
