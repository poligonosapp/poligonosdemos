import { render } from "@testing-library/react";
import Tab1 from "./pages/Tab1";
import React from "react";

test("should Tab1", () => {
  const { baseElement } = render(<Tab1 />);
  // expect(baseElement).toBeDefined();
  fail(true);
});
