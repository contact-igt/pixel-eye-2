import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const { pushMock, submitFormMock, submitPrivyrLeadMock, sendEmailMock } = vi.hoisted(() => ({
  pushMock: vi.fn(),
  submitFormMock: vi.fn().mockResolvedValue({ ok: true }),
  submitPrivyrLeadMock: vi.fn().mockResolvedValue({ ok: true }),
  sendEmailMock: vi.fn().mockResolvedValue({ status: 200, text: "OK" }),
}));

vi.mock("next/router", () => ({
  useRouter: () => ({ push: pushMock }),
}));

vi.mock("@/lib/formService", () => ({
  default: submitFormMock,
}));

vi.mock("@/lib/privyrLead", () => ({
  submitPrivyrLead: submitPrivyrLeadMock,
}));

vi.mock("@/services/emailjs", () => ({
  sendEmail: sendEmailMock,
}));

import AppointmentForm from "./index";

afterEach(cleanup);

describe("AppointmentForm", () => {
  it("marks the open time picker so it can appear above the footer", () => {
    render(<AppointmentForm />);

    fireEvent.change(screen.getByLabelText("Hospital Location"), { target: { value: "Sanath Nagar" } });
    const timePickerButton = screen.getByRole("button", { name: "Choose preferred time" });
    fireEvent.click(timePickerButton);

    expect(timePickerButton.closest("[data-time-picker-open]")).toHaveAttribute(
      "data-time-picker-open",
      "true",
    );
  });

  it("mirrors a successful appointment lead to Privyr before the thank-you redirect", async () => {
    render(<AppointmentForm />);

    fireEvent.change(screen.getByLabelText("Patient's Full Name"), { target: { value: "Ananya Rao" } });
    fireEvent.change(screen.getByLabelText("Patient's Email ID (optional)"), { target: { value: "ananya@example.com" } });
    fireEvent.change(screen.getByLabelText("Patient's Mobile Number"), { target: { value: "9876543210" } });
    fireEvent.change(screen.getByLabelText("Hospital Location"), { target: { value: "Sanath Nagar" } });
    fireEvent.change(screen.getByLabelText("Date"), { target: { value: "2099-01-01" } });
    fireEvent.change(screen.getByLabelText("Symptoms/Conditions"), { target: { value: "Other eye concern" } });
    fireEvent.click(screen.getByLabelText(/I agree to the Terms/i));

    fireEvent.submit(screen.getByRole("button", { name: "Enquire Now" }).closest("form"));

    await waitFor(() => {
      expect(submitFormMock).toHaveBeenCalled();
      expect(submitPrivyrLeadMock).toHaveBeenCalledWith({
        name: "Ananya Rao",
        phone: "9876543210",
        email: "ananya@example.com",
      });
      expect(sendEmailMock).toHaveBeenCalled();
      expect(pushMock).toHaveBeenCalledWith("/thank-you");
    });

    expect(submitFormMock.mock.invocationCallOrder[0]).toBeLessThan(submitPrivyrLeadMock.mock.invocationCallOrder[0]);
    expect(submitPrivyrLeadMock.mock.invocationCallOrder[0]).toBeLessThan(sendEmailMock.mock.invocationCallOrder[0]);
    expect(submitPrivyrLeadMock.mock.invocationCallOrder[0]).toBeLessThan(pushMock.mock.invocationCallOrder[0]);
  });
});
