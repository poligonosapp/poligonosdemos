import { render } from "@testing-library/react";
import FeatureGeoJSONMapaCalor from "./pages/FeatureGeoJSONMapaCalor";
import React from "react";

test("should FeatureGeoJSONMapaCalor", () => {
  const { baseElement } = render(<FeatureGeoJSONMapaCalor />);
   expect(baseElement).toBeDefined();
  // fail(true);
});
