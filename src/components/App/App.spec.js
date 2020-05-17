import React from "react";
import renderer from "react-test-renderer";

import App from "./index";
import appReducer from "../../reducers/appReducer";

describe("App", () => {
  describe("Reducer", () => {
    it("should set page with reducer", () => {
      const state = {
        images: [],
        term: "istanbul",
        collection: 0,
        page: 1,
        total_pages: 1,
      };
      const newState = appReducer(state, {
        type: "SET_PAGE",
        payload: { page: 2 },
      });

      expect(newState).toEqual({
        images: [],
        term: "istanbul",
        collection: 0,
        page: 2,
        total_pages: 1,
      });
    });

    it("should set page to 1 with new params", () => {
      const state = {
        images: [],
        term: "istanbul",
        collection: 0,
        page: 5,
        total_pages: 1,
      };
      const newState = appReducer(state, {
        type: "SET_PARAMS",
        payload: { term: "ankara", collection: 0 },
      });

      expect(newState).toEqual({
        images: [],
        term: "ankara",
        collection: 0,
        page: 1,
        total_pages: 1,
      });
    });
  });

  test("snapshot renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
