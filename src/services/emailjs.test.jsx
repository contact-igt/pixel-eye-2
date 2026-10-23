import { afterEach, describe, expect, it, vi } from "vitest";

const { sendMock } = vi.hoisted(() => ({
  sendMock: vi.fn(),
}));

vi.mock("@emailjs/browser", () => ({
  default: { send: sendMock },
}));

describe("sendEmail", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    delete process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    delete process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    vi.clearAllMocks();
    vi.resetModules();
  });

  it("sends the appointment fields with the configured EmailJS identifiers", async () => {
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = "service_example";
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = "template_example";
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = "public_key_example";
    sendMock.mockResolvedValue({ status: 200, text: "OK" });
    const { sendEmail } = await import("./emailjs");

    await expect(sendEmail({
      fullName: " Ananya Rao ",
      email: " ananya@example.com ",
      countryCode: "+91",
      mobile: "9876543210",
      location: "Sanath Nagar",
      date: "2099-01-01",
      timeSlot: "10:00 AM - 11:00 AM",
      symptoms: "Other eye concern",
      symptomDetails: "Blurred vision",
      whatsapp: true,
      consent: false,
    })).resolves.toEqual({ status: 200, text: "OK" });

    expect(sendMock).toHaveBeenCalledWith(
      "service_example",
      "template_example",
      {
        patient_name: "Ananya Rao",
        email: "ananya@example.com",
        mobile_number: "+919876543210",
        hospital_location: "Sanath Nagar",
        appointment_date: "2099-01-01",
        preferred_time: "10:00 AM - 11:00 AM",
        symptoms: "Other eye concern",
        symptom_details: "Blurred vision",
        whatsapp_updates: "Yes",
        marketing_consent: "No",
        from_name: "Pixel Eye Hospital",
      },
      { publicKey: "public_key_example" },
    );
  });

  it("rejects when EmailJS is not configured", async () => {
    const { sendEmail } = await import("./emailjs");

    await expect(sendEmail({})).rejects.toThrow("Email notifications are not configured");
    expect(sendMock).not.toHaveBeenCalled();
  });
});
