import { render } from "@testing-library/react";
import Tab1 from "./pages/Tab1";
import React from "react";

import {Tab1Component} from "./components/Tab1Component";

test("should Tab1Component", () => {
  const { baseElement } = render(<Tab1Component />);
   expect(baseElement).toBeDefined();
  // fail(true);
});
