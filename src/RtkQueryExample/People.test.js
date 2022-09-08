import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import fetchMock from "fetch-mock";
import fullRender from "./fullRender";
import { People } from "./People";

describe("People", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  // FIXME: I don't know how to make this work yet
  it("renders people", async () => {
    fetchMock.get("https://www.swapi.tech/api/people", {
      status: 200,
      body: {
        results: [
          { uid: "1", name: "name1" },
          { uid: "2", name: "name2" },
          { uid: "3", name: "name3" },
        ],
      },
    });

    fullRender(<People />);

    await waitForElementToBeRemoved(screen.queryByText("Loading..."));

    expect(screen.getByText("name1")).toBeInTheDocument();
    expect(screen.getByText("name2")).toBeInTheDocument();
  });
});
