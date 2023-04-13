import React from "react";
import PersonHeader from "../components/headerPerson";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";

export default {
  title: "People/PersonHeader",
  component: PersonHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PersonHeader name={SamplePerson} />;

Basic.storyName = "Default";
