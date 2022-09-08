import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import fetchMock from "fetch-mock";
import fullRender from "./fullRender";
import { People } from "./People";

describe("People", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("renders people", async () => {
    fullRender(<People />);
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));
  });
});
