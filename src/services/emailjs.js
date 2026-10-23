import emailjs from "@emailjs/browser";

const getEmailJsConfig = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Email notifications are not configured. Please try again later.",
    );
  }

  return { serviceId, templateId, publicKey };
};

const toYesNo = (value) => (value ? "Yes" : "No");

export async function sendEmail(formData = {}) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  const patientName = String(formData.fullName || "").trim();
  const email = String(formData.email || "").trim();
  const countryCode = String(formData.countryCode || "+91").trim();
  const mobile = String(formData.mobile || "").replace(/\D/g, "");

  return emailjs.send(
    serviceId,
    templateId,
    {
      patient_name: patientName || "Guest User",
      mobile_number: `${countryCode}${mobile}`,
      service_name: String(formData.symptoms || ""),
      email_subject: "Pixel Eye Hospital Appointment Request",
      from_name: "Pixel Eye Hospitals",
      from_email: "info@pixeleyehospitals.com",
    },
    { publicKey },
  );
}
