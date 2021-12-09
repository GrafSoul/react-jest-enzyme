import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import PersonList from "./PersonList";

describe("testing App", () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("renders person list", () => {
    const personlList = appWrapper.find(PersonList);
    expect(personlList).toHaveLength(1);
  });

  it("has state, not zero", () => {
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it("has a people property on state", () => {
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it("passes people property of state to personalList as prop", () => {
    const personlList = appWrapper.find(PersonList);
    expect(personlList.props().people).toEqual(appWrapper.state().people);
  });
});
