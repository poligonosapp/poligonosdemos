import { render } from "@testing-library/react";
import ExampleWithManyStates from "./components/ExampleWithManyStates";
import React from "react";

test("should ExampleWithManyStates", () => {
  const { baseElement } = render(<ExampleWithManyStates />);
   expect(baseElement).toBeDefined();
  // fail(true);
});
