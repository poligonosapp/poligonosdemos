const { render } = require("testing-library/react");
const Tab1 = require("./Tab1");
// import React from "react";

test("should Tab1", () => {
  const { baseElement } = render(<Tab1 />);
  expect(baseElement).toBeDefined();
  fail(true);
});
