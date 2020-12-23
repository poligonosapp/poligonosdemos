import { render } from "@testing-library/react";
import ExampleWithManyStates from "./ExampleWithManyStates";
import React from "react";

test("should render props ExampleWithManyStates", () => {

  //act

  // set props
  const { baseElement } = render(<ExampleWithManyStates />);

  //arrange
   expect(baseElement).toBeDefined();
  // fail(true);
});
