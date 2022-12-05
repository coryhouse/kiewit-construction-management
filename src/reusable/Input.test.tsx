import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { it } from "vitest";

it("should apply the provided label", () => {
  render(<Input label="My Label" id="id" value="" onChange={() => {}} />);
  screen.getByLabelText("My Label");
});
