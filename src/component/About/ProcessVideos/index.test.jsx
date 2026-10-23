import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("react-slick", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

vi.mock("@/common/RevealOnView", () => ({
  default: ({ children }) => <>{children}</>,
}));

import ProcessVideos from "./index";

describe("ProcessVideos", () => {
  it("does not render the section-level Explore More call to action", () => {
    render(<ProcessVideos />);

    expect(screen.queryByRole("link", { name: "Explore More" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to video 1" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Watch Video" })).not.toHaveLength(0);
  });
});
