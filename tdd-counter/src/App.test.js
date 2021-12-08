import Counter from "./Counter";
// import App from "./App";

import { shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  it("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  it("render a button with text of 'Increment", () => {
    expect(wrapper.find("#increment-btn").text()).toContain("Increment");
  });

  it("render a button with text of 'Decrement", () => {
    expect(wrapper.find("#decrement-btn").text()).toContain("Decrement");
  });

  it("render the initial value of state in a div", () => {
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });

  it("render the click event of increment button and increment value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
  });

  it("render the click event of decrement button and decrement value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });

  test("do not decrement below zero", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });
});
