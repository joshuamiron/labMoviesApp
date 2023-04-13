import React from "react";
import Spinner from "../components/spinner";
import { MemoryRouter } from "react-router";

export default {
  title: "Loading",
  component: Spinner,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <Spinner />;

Basic.storyName = "Default";
