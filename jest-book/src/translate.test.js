import { translate } from "./translate";

describe("translates", () => {
  it("translates d to half a dev day", () => {
    expect(translate("d")).toEqual({ Dev: 0.5 });
  });

  it("translates D to one dev day", () => {
    expect(translate("D")).toEqual({ Dev: 1.0 });
  });

  it("translates dD to one and a half dev days", () => {
    expect(translate("dD")).toEqual({ Dev: 1.5 });
  });

  it("translates q to half a qa day", () => {
    expect(translate("q")).toEqual({ QA: 0.5 });
  });
});
