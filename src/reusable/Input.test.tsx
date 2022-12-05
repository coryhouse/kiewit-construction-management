import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { it, vi } from "vitest";
import { userEvent } from "../utils/testUtils";

it("should apply the provided label and associate the label with the input via the provided id", () => {
  render(<Input label="My Label" id="id" value="" onChange={() => {}} />);
  expect(screen.getByLabelText("My Label")).toBeInTheDocument();
});

it("should render an input with the provided value", () => {
  render(<Input label="My Label" id="id" value="val" onChange={() => {}} />);
  expect(screen.getByRole("textbox", { name: "My Label" })).toHaveValue("val");
});

it("should fire the onChange handler on keypress", () => {
  const onChange = vi.fn();
  render(<Input label="My Label" id="id" value="val" onChange={onChange} />);
  screen.getByLabelText("My Label").focus();
  userEvent.keyboard("a");
  expect(onChange).toHaveBeenCalledTimes(1);
});
