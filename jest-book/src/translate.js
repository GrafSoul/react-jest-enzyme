// import jsonpath from "jsonpath";

// const user = {
//   name: "Juntao Qiu",
//   address: "Xian, Shaanxi, China",
//   projects: [
//     { name: "ThoughtWorks University" },
//     { name: "ThoughtWorks Core Business Beach" },
//   ],
// };
// const result = jsonpath.query(user, "$.projects");
// console.log(JSON.stringify(result));

const dict = {
  d: {
    status: "Dev",
    effort: 0.5,
  },
  D: {
    status: "Dev",
    effort: 1.0,
  },
  q: {
    status: "QA",
    effort: 0.5,
  },
  Q: {
    status: "QA",
    effort: 1.0,
  },
};

const parse = (c) => dict[c];

export const translate = (input) => {
  const items = input.split("");
  return items.reduce((accumulator, current) => {

    const { status, effort } = parse(current);

    accumulator[status] = (accumulator[status] || 0) + effort;
    
    return accumulator;

  }, {});
};
