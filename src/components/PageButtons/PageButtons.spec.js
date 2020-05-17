import React, { useReducer } from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PageButtons from "./";
import { appReducer, initialState } from "../../reducers/appReducer";

configure({ adapter: new Adapter() });

it("previous button is disabled on page 1", () => {
  const wrapper = mount(<PageButtons state={{ page: 1 }} />);
  wrapper.find("button").at(0).simulate("click");
  expect(wrapper.find("button").at(0).prop("disabled")).toBe(true);
});

it("previous button is enabled on page 2", () => {
  const wrapper = mount(
    <PageButtons state={{ page: 2 }} dispatch={() => true} />
  );
  wrapper.find("button").at(0).simulate("click");
  expect(wrapper.find("button").at(0).prop("disabled")).toBe(false);
});
