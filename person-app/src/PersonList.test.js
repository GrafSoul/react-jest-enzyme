import React from "react";
import { shallow } from "enzyme";

import PersonList from "./PersonList";

describe("testing PersonList", () => {
  it("render a ul element", () => {
    const personListWrapper = shallow(<PersonList />);
    const peopleListUls = personListWrapper.find("ul");
    expect(peopleListUls).toHaveLength(1);
  });

  // Zero
  it("render no li elements when no people exists", () => {
    const people = [];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");
    expect(peopleListItems).toHaveLength(0);
  });

  // One
  it("render one li elements when one people exists", () => {
    const people = [{ firstaName: "Alex", lastName: "Dou" }];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");
    expect(peopleListItems).toHaveLength(1);
  });

  // Mahy
  it("render li elements for each people that exits", () => {
    const people = [
      { firstaName: "Alex", lastName: "Doubson" },
      { firstaName: "Chavi", lastName: "Chaize" },
      { firstaName: "Kurt", lastName: "Cravetz" },
    ];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");
    expect(peopleListItems).toHaveLength(3);
  });

  it("render the first and last name of a person", () => {
    const people = [{ firstName: "Alex", lastName: "Doubson" }];
    const personListWrapper = shallow(<PersonList people={people} />);
    expect(personListWrapper.find("li").text()).toContain(people[0].firstName);
    expect(personListWrapper.find("li").text()).toContain(people[0].lastName);
  });
});
