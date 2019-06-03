import Mock from "mockjs";
// var Random = Mock.Random();
// console.log(Random);
const data = Mock.mock({
  "items|12": [
    {
      id: "@id",
      name: " @cname",
      date: "@datetime",
      age: "@natural(10,100)",
      title: "@sentence(3, 10)",
      "status|1": ["success", "fail", "confirm"],
      city: "@city",
      province: "@province",
      address: "@county(true)",
      zip: "@zip"
    }
  ]
});

export default [
  {
    url: "/democrud/datalist",
    type: "get",
    response: config => {
      console.log(config);
      const items = data.items;
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      };
    }
  }
];
