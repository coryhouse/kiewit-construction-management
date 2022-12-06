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

it("should fire the onChange handler on keypress", async () => {
  const onChange = vi.fn();
  render(<Input label="My Label" id="id" value="val" onChange={onChange} />);
  await userEvent.type(screen.getByLabelText("My Label"), "a");
  expect(onChange).toHaveBeenCalledTimes(1);
});

it("should render a text input by default", () => {
  render(<Input label="My Label" id="id" value="val" onChange={() => {}} />);
  expect(screen.getByLabelText("My Label")).toHaveAttribute("type", "text");
});

it("should render a password input when passed a type of password", () => {
  render(
    <Input
      label="My Label"
      id="id"
      value="val"
      onChange={() => {}}
      type="password"
    />
  );
  expect(screen.getByLabelText("My Label")).toHaveAttribute("type", "password");
});

it("should render an error message when passed an error", () => {
  render(
    <Input
      label="My Label"
      id="id"
      value="val"
      onChange={() => {}}
      error="Error Message"
    />
  );
  expect(screen.getByText("Error Message")).toBeInTheDocument();
});
