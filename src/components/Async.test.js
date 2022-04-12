import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("Renders poost if requests succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "test post" }],
    });
    render(<Async />);
    const posts = await screen.findAllByRole("listitem");
    expect(posts).not.toHaveLength(0);
  });
});
