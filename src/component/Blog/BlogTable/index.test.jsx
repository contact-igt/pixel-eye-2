import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import BlogTable from "./index";

afterEach(cleanup);

const baseData = {
  id: "table_1",
  enabled: true,
  heading: "LASIK Treatment Comparison",
  content: "Compare the available treatment options.",
  headers: ["Procedure", "Recovery Time", "Success Rate"],
  rows: [
    ["LASIK", "24 hours", "99%"],
    ["PRK", "3-5 days", "98%"],
  ],
};

describe("BlogTable", () => {
  it("renders the title, content, headers, and cell data", () => {
    render(<BlogTable data={baseData} settings={{ variant: "striped", headerStyle: "brand_sky", alignment: "left" }} />);

    expect(screen.getByRole("heading", { name: "LASIK Treatment Comparison" })).toBeInTheDocument();
    expect(screen.getByText("Compare the available treatment options.")).toBeInTheDocument();
    expect(screen.getByText("Procedure")).toBeInTheDocument();
    expect(screen.getByText("Recovery Time")).toBeInTheDocument();
    expect(screen.getByText("LASIK")).toBeInTheDocument();
    expect(screen.getByText("24 hours")).toBeInTheDocument();
    expect(screen.getByText("99%")).toBeInTheDocument();
  });

  it("renders semantic table markup with a horizontal-scroll wrapper for mobile", () => {
    const { container } = render(<BlogTable data={baseData} settings={{}} />);
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
    expect(container.querySelectorAll("thead th")).toHaveLength(3);
    expect(container.querySelectorAll("tbody tr")).toHaveLength(2);
    expect(table.closest("div").className).toContain("tableScroll");
  });

  it("applies the striped, bordered, and clean variant classes", () => {
    const { container: striped } = render(<BlogTable data={baseData} settings={{ variant: "striped" }} />);
    expect(striped.querySelector("section").className).toContain("variant_striped");

    const { container: bordered } = render(<BlogTable data={baseData} settings={{ variant: "bordered" }} />);
    expect(bordered.querySelector("section").className).toContain("variant_bordered");

    const { container: clean } = render(<BlogTable data={baseData} settings={{ variant: "clean" }} />);
    expect(clean.querySelector("section").className).toContain("variant_clean");
  });

  it("applies the configured header style", () => {
    const { container } = render(<BlogTable data={baseData} settings={{ headerStyle: "dark_slate" }} />);
    const th = container.querySelector("thead th");
    expect(th.className).toContain("headerStyle_dark_slate");
  });

  it("applies left and center text alignment", () => {
    const { container: left } = render(<BlogTable data={baseData} settings={{ alignment: "left" }} />);
    expect(left.querySelector("section").className).toContain("align_left");

    const { container: center } = render(<BlogTable data={baseData} settings={{ alignment: "center" }} />);
    expect(center.querySelector("section").className).toContain("align_center");
  });

  it("does not render a disabled table", () => {
    const { container } = render(<BlogTable data={{ ...baseData, enabled: false }} settings={{}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("does not render when headers or rows are missing", () => {
    const { container: noHeaders } = render(<BlogTable data={{ ...baseData, headers: [] }} settings={{}} />);
    expect(noHeaders).toBeEmptyDOMElement();

    const { container: noRows } = render(<BlogTable data={{ ...baseData, rows: [] }} settings={{}} />);
    expect(noRows).toBeEmptyDOMElement();

    const { container: noData } = render(<BlogTable data={null} settings={{}} />);
    expect(noData).toBeEmptyDOMElement();
  });
});
