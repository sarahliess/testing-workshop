import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AwesomeButton from "./SuperButton";

configure({ adapter: new Adapter() });

it("should change the text after clicking the button", () => {
  const button = shallow(<AwesomeButton />);

  expect(button.text()).toBe("I'm an awesome button");

  button.find("button").simulate("click");

  expect(button.text()).toBe("I'm not a super awesome button?");
});

it("should have a red background color", () => {
  const button = shallow(<AwesomeButton />);

  const color = button.find("button").prop("style").background;

  expect(color).toBe("red");
});
